import { useState } from "react";
import { FormModal } from "./Modal/FormModal";
import styled from "styled-components";

export const AddButton = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <Add>
      <div onClick={() => setShowModal(true)} className="add">
        Add New Issue
      </div>
      {showModal ? (
        <FormModal
          passShowModalHandler={setShowModal}
          passShowModal={showModal}
          passDefaultValue={{ title: "", repository: "", labels: "", body: "" }}
          passIssueNumber="null"
          passMode="add"
        ></FormModal>
      ) : (
        ""
      )}
    </Add>
  );
};

const Add = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  .add {
    background-color: #45c698;
    border-radius: 10px;
    padding: 10px;
    cursor: pointer;
  }
`;
