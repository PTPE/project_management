import { useState } from "react";
import styled from "styled-components";

type SubmitProps = {
  onPassSearchHandler: Function;
};

export const SearchBarItem = (props: SubmitProps) => {
  const [value, setValue] = useState("");

  const setValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const submitHandler = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    e.preventDefault();
    props.onPassSearchHandler(value);
  };

  return (
    <Container>
      <SearchWord onChange={setValueHandler} value={value} />
      <SubmitButton value="Search" type="submit" onClick={submitHandler} />
    </Container>
  );
};
const Container = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
`;
const SearchWord = styled.input`
  height: 30px;
  width: 80%;
  border: none;
  border-radius: 5px;
  margin-right: 10px;
  padding: 10px;
`;

const SubmitButton = styled.input`
  font-size: 16px;
  border: none;
  border-radius: 10px;
  padding: 5px;
  background: #e6e6e6;
  cursor: pointer;
`;
