import { useEffect, useState } from "react";
import { ModalPortal } from "./Modal";
import { SubmitForm } from "./SubmitForm";
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
  const labelOptions = ["open", "in progress", "closed"];

  const formCheck = (field: string, value: string) => {
    if (field === "title" || field === "repository") {
      return value.length === 0 ? "show" : "not-show";
    }
    if (field === "body") {
      return value.length < 30 ? "show" : "not-show";
    }
  };
  useEffect(() => {
    console.log(form);
    console.log(props.passDefaultValue.labels);
  }, [form]);
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
              {field === "labels" ? (
                <select
                  defaultValue={`${props.passDefaultValue.labels}`}
                  onChange={(e) => {
                    setForm({ ...form, labels: e.target.value });
                  }}
                >
                  {labelOptions.map((label) => (
                    <option value={label} key={label}>
                      {label[0].toUpperCase() + label.slice(1)}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  defaultValue={props.passDefaultValue[field]}
                  disabled={field === "repository" && props.passMode === "edit"}
                  onChange={(e) => {
                    setForm({
                      ...form,
                      [field]: e.target.value,
                    });
                  }}
                  className={`${formCheck(field, form[field])}`}
                />
              )}
              <div className={formCheck(field, form[field])}>
                {field === "title" || field === "repository" ? "Required" : ""}
                {field === "body" ? "At least 30 words" : ""}
              </div>
            </FieldItem>
          ))}
          <SubmitForm
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
    border: 2px solid red;
    outline: none;
  }
  input.not-show {
    border: 2px solid transparent;
    outline: none;
  }
  select {
    width: 100%;
    height: 40px;
    box-sizing: border-box;
    border: 2px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    outline: none;
  }
  select:focus,
  input:focus {
    border-color: #6ea4e8;
  }
`;
