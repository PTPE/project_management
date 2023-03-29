import { useEffect, useState } from "react";
import { editIssue, addNewIssue } from "../../IssueData/APIService";
import styled from "styled-components";

type SubmitIssueProps = {
  passForm: {
    title: string;
    repository: string;
    labels: string;
    body: string;
  };
  passIssueNumber: string;
  passMode: string;
  passShowModalHandler: React.Dispatch<React.SetStateAction<boolean>>;
};

export const SubmitIssue = (props: SubmitIssueProps) => {
  const [params, setParams] = useState({
    owner: "",
    token: "",
    issueNumber: "",
    body: { title: "", repository: "", labels: [""], body: "" },
  });
  const [mode, setMode] = useState("");

  useEffect(() => {
    setParams((prev) => {
      const owner = JSON.parse(localStorage.getItem("user")!).owner;
      return { ...prev, owner: owner };
    });

    setParams((prev) => {
      const token = JSON.parse(localStorage.getItem("user")!).token;
      return { ...prev, token: token };
    });
    setParams((prev) => {
      return { ...prev, issueNumber: props.passIssueNumber };
    });
    setParams((prev) => {
      const body = { ...props.passForm, labels: [props.passForm.labels] };
      return { ...prev, body: body };
    });
  }, [props.passForm]);

  useEffect(() => {
    setMode(props.passMode);
    console.log(mode);
  }, [mode]);

  return (
    <Submit
      onClick={() => {
        mode === "edit"
          ? editIssue(
              params.owner,
              params.token,
              params.issueNumber,
              params.body
            )
          : addNewIssue(params.owner, params.token, params.body);
        props.passShowModalHandler(false);
      }}
    >
      Submit
    </Submit>
  );
};
const Submit = styled.div`
  font-size: 20px;
  padding: 8px;
  background: #0e8388;
  border-radius: 3px;
  font-weight: 600;
  text-align: center;
  cursor: pointer;
  color: white;
  margin-top: 15px;
  &:hover {
    background: #45c698;
    color: white;
  }
`;
