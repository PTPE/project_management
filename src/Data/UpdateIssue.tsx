import { useState, useEffect } from "react";
import { IssueCard } from "../Layout/IssueCard";

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
  return <IssueCard></IssueCard>;
};
