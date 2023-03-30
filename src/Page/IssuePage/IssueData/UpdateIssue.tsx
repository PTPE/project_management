import { useState, useEffect } from "react";
import { IssueCard } from "../UI/IssueCard/IssueCard";
import { fetchIssue } from "./APIService";

type UpdateIssueProps = {
  passSearch: string;
  passLabelFilter: {
    open: boolean;
    progress: boolean;
    closed: boolean;
  };
  passTimeOrder: boolean;
  passIsBottom: boolean;
};

export const UpdateIssue = (props: UpdateIssueProps) => {
  const [params, setParams] = useState({
    owner: "",
    search: "",
    label: "",
    time: "",
    page: "",
  });
  const [issueData, setIssueData] = useState<String[]>([]);

  useEffect(() => {
    setParams((prev) => {
      return { ...prev, search: props.passSearch };
    });
    setParams((prev) => {
      const owner = JSON.parse(localStorage.getItem("user")!).owner;
      return { ...prev, owner: owner };
    });
    setParams((prev) => {
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

      return { ...prev, label: label() };
    });
    if (props.passIsBottom)
      setParams((prev) => {
        const page =
          issueData.length % 10 === 0
            ? issueData.length / 10 + 1
            : Math.ceil(issueData.length / 10);
        return { ...prev, page: `${page}` };
      });
    setParams((prev) => {
      const time = props.passTimeOrder ? "desc" : "asc";
      return { ...prev, time: time };
    });
  }, [
    props.passLabelFilter,
    props.passSearch,
    props.passTimeOrder,
    props.passIsBottom,
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
    if (props.passIsBottom) {
      (async () => {
        if (!(params.owner.length === 0)) {
          const data = await fetchIssue(
            params.owner,
            params.search,
            params.label,
            params.time,
            params.page
          );
          if (!data) return;
          setIssueData((prev) => {
            return [...prev, ...data.items];
          });
        }
      })();
    }
  }, [params.page]);

  return <IssueCard passIssueData={issueData}></IssueCard>;
};
