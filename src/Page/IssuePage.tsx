import styled from "styled-components";
import { IssueCard } from "../UI/IssueCard";
import { SearchBar } from "../UI/SearchBar";
import { LabelFilter } from "../UI/LabelFilter";
import { TimeOrder } from "../UI/TimeOrder";
import { AddButton } from "../UI/AddButton";
export const IssuePage = () => {
  return (
    <Container>
      <SearchBar />
      <Filter>
        <LabelFilter />
        <TimeOrder />
        <AddButton />
      </Filter>
      <Issue>
        <IssueCard />
      </Issue>
    </Container>
  );
};
const Container = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #e9f8f9;
  height: 100%;
`;
const Issue = styled.div`
  width: 60%;
`;
const Filter = styled.div`
  display: flex;
`;
