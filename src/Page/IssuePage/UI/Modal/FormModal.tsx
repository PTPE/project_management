import { useState } from "react";
import { ModalPortal } from "./Modal";
import { SubmitIssue } from "./SubmitIssue";
import styled from "styled-components";
type ModalContentProps = {
  passDefaultValue: {
    title: string;
    repository: string;
    labels: string;
    body: string;
    [key: string]: string;
  };
  passIssueNumber: string;
  passMode: string;
  passShowModal: boolean;
  passShowModalHandler: React.Dispatch<React.SetStateAction<boolean>>;
};
export const FormModal = (props: ModalContentProps) => {
  const field = ["title", "repository", "labels", "body"];
  const [form, setForm] = useState(props.passDefaultValue);

  return (
    <ModalPortal
      passShowModal={props.passShowModal}
      passShowModalHandler={props.passShowModalHandler}
    >
      {
        <Field>
          {field.map((field, i) => (
            <FieldItem key={i} className={field}>
              <label>{field[0].toUpperCase() + field.slice(1)}</label>
              <input
                defaultValue={props.passDefaultValue[field]}
                onChange={(e) => {
                  setForm({
                    ...form,
                    [field]: e.target.value,
                  });
                }}
              />
            </FieldItem>
          ))}
          <SubmitIssue
            passForm={form}
            passIssueNumber={props.passIssueNumber}
            passMode={props.passMode}
            passShowModalHandler={props.passShowModalHandler}
          />
        </Field>
      }
    </ModalPortal>
  );
};

const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  label {
    font-size: 20px;
  }
  input {
    border: 1px solid #e8e8e8;
    border-radius: 3px;
    font-size: 20px;
    padding: 5px;
    width: 400px;
  }
`;
const FieldItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  &.title,
  &.repository,
  &.body {
    position: relative;
  }
  &.title:after,
  &.repository:after {
    content: "Required";
    color: red;
    font-size: 10px;
    position: absolute;
    bottom: -15px;
  }

  &.body:after {
    content: "At least 30 words";
    color: red;
    font-size: 10px;
    position: absolute;
    bottom: -15px;
  }
`;
