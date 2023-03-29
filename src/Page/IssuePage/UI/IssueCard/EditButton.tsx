import { useState } from "react";
import { FormModal } from "../Modal/FormModal";
import styled from "styled-components";

type EditProps = {
  passIssueNumber: string;
  passDefaultValue: {
    title: string;
    repository: string;
    labels: string;
    body: string;
  };
};

export const EditButton = (props: EditProps) => {
  const [showOptions, setShowOption] = useState(false);
  const [showModal, setShowModal] = useState(false);

  document.addEventListener("click", (e) => {
    if (!(e.target as Element).classList.contains("option"))
      setShowOption(false);
  });

  return (
    <Edit>
      <Dots
        className="option"
        onClick={() => {
          setShowOption(true);
        }}
      >
        ...
      </Dots>
      <Options className={showOptions ? "show" : ""}>
        <span className="edit" onClick={() => setShowModal(true)}>
          Edit
        </span>
        <span className="delete">Delete</span>
      </Options>
      {showModal ? (
        <FormModal
          passShowModal={showModal}
          passShowModalHandler={setShowModal}
          passDefaultValue={props.passDefaultValue}
          passIssueNumber={props.passIssueNumber}
          passMode="edit"
        ></FormModal>
      ) : (
        ""
      )}
    </Edit>
  );
};

const Edit = styled.div`
  align-self: start;
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: absolute;
  top: 20px;
  right: 20px;
  @media (max-width: 768px) {
    order: -1;
  }
`;
const Dots = styled.div`
  font-size: 25px;
  align-self: end;
  writing-mode: vertical-lr;
  cursor: pointer;
`;
const Options = styled.div`
  display: none;
  flex-direction: column;
  border-radius: 10px;
  &.show {
    display: flex;
    border: 2px solid grey;
  }
  span {
    font-size: 16px;
    padding: 5px;
    cursor: pointer;
  }
  .edit {
    color: grey;
  }
  .delete {
    color: red;
  }
`;
