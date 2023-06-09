import { useState, useEffect } from "react";
import React from "react";
import { IssueCard } from "./IssueCard";
import { fetchIssue } from "../../../../Service/UpdateIssue";

type IssueProps = {
  passSearch: string;
  passLabelFilter: {
    open: boolean;
    progress: boolean;
    closed: boolean;
  };
  passTimeOrder: boolean;
  passIsBottom: boolean;
};

export const Issue = React.memo((props: IssueProps) => {
  const [params, setParams] = useState({
    owner: "",
    search: "",
    label: "",
    time: "",
    page: "",
  });
  const [issueData, setIssueData] = useState<String[]>([]);
  const [stopLoading, setStopLoading] = useState(false);

  useEffect(() => {
    setStopLoading(false);
    const owner = JSON.parse(localStorage.getItem("user")!).owner;
    const label = () => {
      const label = ["open", "in progress", "closed"];
      const selected = label
        .filter((_, i) => Object.values(props.passLabelFilter)[i])
        .map((label) => `"${label}"`)
        .join(",");
      const result =
        selected.length === 0
          ? `label:"open","in progress","closed"`
          : `label:${selected}`;
      return result;
    };
    const page = () => {
      return issueData.length % 10 === 0
        ? issueData.length / 10 + 1
        : Math.ceil(issueData.length / 10);
    };
    const time = props.passTimeOrder ? "desc" : "asc";
    setParams({
      owner: owner,
      search: props.passSearch,
      label: label(),
      time: time,
      page: `${page()}`,
    });
  }, [
    props.passLabelFilter,
    props.passSearch,
    props.passTimeOrder,
    issueData.length,
  ]);

  useEffect(() => {
    (async () => {
      if (!(params.owner.length === 0)) {
        const data = await fetchIssue(
          params.owner,
          params.search,
          params.label,
          params.time,
          "1"
        );
        if (!data) return;
        setIssueData(data.items);
      }
    })();
  }, [params.owner, params.label, params.search, params.time]);

  useEffect(() => {
    if (!props.passIsBottom) return;
    if (!(issueData.length % 10 === 0)) return;

    (async () => {
      if (!(params.owner.length === 0) && !stopLoading) {
        const data = await fetchIssue(
          params.owner,
          params.search,
          params.label,
          params.time,
          params.page
        );
        if (data.items.length === 0) setStopLoading(true);
        else
          setIssueData((prev) => {
            return [...prev, ...data.items];
          });
      }
    })();
  }, [props.passIsBottom]);

  return <IssueCard passIssueData={issueData}></IssueCard>;
});
