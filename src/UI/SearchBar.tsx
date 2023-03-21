import styled from "styled-components";
export const SearchBar = () => {
  return (
    <Container>
      <Search></Search>
      <Submit type="submit" value="Search" />
    </Container>
  );
};
const Container = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
`;
const Search = styled.input`
  width: 60%;
  height: 30px;
  border: none;
  border-radius: 5px;
  margin-right: 10px;
  padding: 10px;
`;
const Submit = styled.input`
  font-size: 16px;
  border: none;
  border-radius: 10px;
  padding: 5px;
  background: #8dcbe6;
  cursor: pointer;
`;
