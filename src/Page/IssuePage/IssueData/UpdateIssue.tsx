import { useState, useEffect } from "react";
import { IssueCard } from "../UI/IssueCard/IssueCard";
import { FetchIssue } from "./APIService";

type UpdateIssueProps = {
  onPassSearch: string;
  onPassLabelFilter: {
    open: boolean;
    progress: boolean;
    closed: boolean;
  };
  onPassTimeOrder: boolean;
};

export const UpdateIssue = (props: UpdateIssueProps) => {
  const [issueData, setIssueData] = useState<String[]>([]);
  useEffect(() => {
    const search = props.onPassSearch;

    const owner = JSON.parse(localStorage.getItem("user")!).owner;

    const label = () => {
      const label = ["open", "in progress", "closed"];
      const selected = label
        .filter((_, i) => Object.values(props.onPassLabelFilter)[i])
        .map((label) => `"${label}"`)
        .join(",");
      const result =
        selected.length === 0
          ? `label:"open","in progress","closed"`
          : `label:${selected}`;

      return result;
    };

    const time = props.onPassTimeOrder ? "desc" : "asc";

    (async () => {
      const data = await FetchIssue(owner, search, label(), time, "1");
      setIssueData(data.items);
    })();
    console.log(label());
  }, [props.onPassLabelFilter, props.onPassSearch, props.onPassTimeOrder]);

  return <IssueCard passIssueData={issueData}></IssueCard>;
};
