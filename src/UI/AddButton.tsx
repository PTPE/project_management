import styled from "styled-components";
export const AddButton = () => {
  return (
    <Add>
      <div> Add New Issue</div>
    </Add>
  );
};

const Add = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  div {
    background-color: #53e7b2;
    border-radius: 10px;
    padding: 10px;
    cursor: pointer;
  }
`;
