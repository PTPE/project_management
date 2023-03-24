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
  useEffect(() => {
    const search = props.onPassSearch;

    const label = () => {
      const selected = (
        Object.keys(
          props.onPassLabelFilter
        ) as (keyof typeof props.onPassLabelFilter)[]
      ).filter((key) => props.onPassLabelFilter[key]);

      const selectedString = selected.map((label) => `"${label}"`).join(",");
      return selectedString;
    };

    const time = props.onPassTimeOrder ? "desc" : "asc";

    // FetchIssue(owner, search, label(), time, "1");
  }, [props.onPassLabelFilter, props.onPassSearch, props.onPassTimeOrder]);

  return <IssueCard></IssueCard>;
};
