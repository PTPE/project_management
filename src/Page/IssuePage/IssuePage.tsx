import styled from "styled-components";
import { useState, useEffect, useRef } from "react";
import { UpdateIssue } from "./IssueData/UpdateIssue";
import { SearchBar } from "./UI/SearchBar";
import { LabelFilter } from "./UI/LabelFilter/LabelFilter";
import { TimeOrder } from "./UI/TimeOrder/TimeOrder";
import { AddNewIssueButton } from "./UI/AddIssueButton";
import { isPageBottom } from "./IssueData/APIService";

export const IssuePage = () => {
  const [search, setSearch] = useState("");
  const [labelFilter, setlabelFilter] = useState({
    open: false,
    progress: false,
    closed: false,
  });
  const [descendent, setdescendent] = useState(true);
  const [isBottom, setIsBottom] = useState(false);

  const pageRef = useRef<HTMLInputElement>(null);

  window.addEventListener("scroll", () => {
    if (!pageRef.current) return;
    setIsBottom(isPageBottom(pageRef));
  });

  return (
    <Container ref={pageRef}>
      <SearchBar onPassSearchHandler={setSearch} />
      <Filter>
        <LabelFilter
          onPassLabelFilterHandler={setlabelFilter}
          onPassLabelFilter={labelFilter}
        />
        <TimeOrder
          onPassSetTimeOrderHandler={setdescendent}
          onPassTimeOrder={descendent}
        />
        <AddNewIssueButton />
      </Filter>
      <Issue>
        <UpdateIssue
          passSearch={search}
          passLabelFilter={labelFilter}
          passTimeOrder={descendent}
          passIsBottom={isBottom}
        />
      </Issue>
    </Container>
  );
};
const Container = styled.div`
  padding: 0px 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #e9f8f9;
  min-height: 100vh;
`;
const Issue = styled.div`
  width: 60%;
`;
const Filter = styled.div`
  display: flex;
`;
