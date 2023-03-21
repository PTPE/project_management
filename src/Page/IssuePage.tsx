import styled from "styled-components";
import { IssueCard } from "../UI/IssueCard";
export const IssuePage = () => {
  return (
    <Container>
      <Issue>
        <IssueCard />
      </Issue>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #e9f8f9;
  height: 100%;
`;
const Issue = styled.div`
  width: 60%;
`;
