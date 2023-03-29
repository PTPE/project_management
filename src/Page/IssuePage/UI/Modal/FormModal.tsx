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

  const formCheck = (field: string, value: string) => {
    if (field === "title" || field === "repository") {
      return value.length === 0 ? "show" : "not-show";
    }
    if (field === "body") {
      return value.length < 30 ? "show" : "not-show";
    }
  };

  return (
    <ModalPortal
      passShowModal={props.passShowModal}
      passShowModalHandler={props.passShowModalHandler}
    >
      {
        <Field>
          {field.map((field, i) => (
            <FieldItem key={i}>
              <label>{field[0].toUpperCase() + field.slice(1)}</label>
              <input
                defaultValue={props.passDefaultValue[field]}
                onChange={(e) => {
                  setForm({
                    ...form,
                    [field]: e.target.value,
                  });
                }}
                className={`${formCheck(field, form[field])}`}
              />
              <div className={formCheck(field, form[field])}>
                {field === "title" || field === "repository" ? "Required" : ""}
                {field === "body" ? "At least 30 words" : ""}
              </div>
            </FieldItem>
          ))}
          <SubmitIssue
            passForm={form}
            passIssueNumber={props.passIssueNumber}
            passMode={props.passMode}
            passShowModalHandler={props.passShowModalHandler}
            passDisable={
              form.body.length < 30 ||
              form.title.length === 0 ||
              form.repository.length === 0
            }
            passSetForm={setForm}
          />
        </Field>
      }
    </ModalPortal>
  );
};

const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
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
  position: relative;

  div {
    position: absolute;
    bottom: -20px;
  }
  div.show {
    color: red;
    font-size: 14px;
  }
  div.not-show {
    display: none;
  }
  input.show {
    border: 1px solid red;
    outline: none;
  }
  input.not-show {
    border: 1px solid transparent;
    outline: none;
  }
`;
