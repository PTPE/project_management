import { useEffect, useState } from "react";
import { editIssue, addNewIssue } from "../../IssueData/APIService";
import styled from "styled-components";

type SubmitFormProps = {
  passForm: {
    title: string;
    repository: string;
    labels: string;
    body: string;
  };
  passIssueNumber: string;
  passMode: string;
  passShowModalHandler: React.Dispatch<React.SetStateAction<boolean>>;
  passDisable: boolean;
  passSetForm: React.Dispatch<
    React.SetStateAction<{
      [key: string]: string;
      title: string;
      repository: string;
      labels: string;
      body: string;
    }>
  >;
};

export const SubmitForm = (props: SubmitFormProps) => {
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
        props.passSetForm({ title: "", repository: "", labels: "", body: "" });
      }}
      disabled={props.passDisable}
      className={props.passDisable ? "inactive" : "active"}
    >
      Submit
    </Submit>
  );
};
const Submit = styled.button`
  font-size: 20px;
  padding: 8px;
  background: #0e8388;
  border-radius: 3px;
  font-weight: 600;
  text-align: center;
  cursor: pointer;
  color: white;
  margin-top: 15px;
  border: none;
  &.active:hover {
    background: #45c698;
    color: white;
  }
  &.inactive {
    background: #073d40;
    color: black;
    cursor: auto;
  }
`;
