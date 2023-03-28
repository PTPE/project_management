import ReactDOM from "react-dom";
import styled from "styled-components";
export const Modal = () => {
  const field = ["Title", "Repository", "Label", "Body"];
  return (
    <Container>
      <Backdrop />
      <ModalContainer>
        <Field>
          {field.map((field, i) => (
            <FieldItem key={i} className={field.toLowerCase()}>
              <label>{field}</label>
              <input />
            </FieldItem>
          ))}
        </Field>
        <Submit>Submit</Submit>
      </ModalContainer>
    </Container>
  );
};

export const ModalPortal = () => {
  return ReactDOM.createPortal(<Modal />, document.getElementById("modal")!);
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 1;
`;
const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(44, 51, 51, 0.75);
`;
const ModalContainer = styled.div`
  padding: 80px;
  background: #e9f8f9;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  label {
    font-size: 16px;
  }
  input {
    border: 1px solid #e8e8e8;
    border-radius: 3px;
    font-size: 18px;
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

const Submit = styled.div`
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
