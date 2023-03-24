import styled from "styled-components";
import { useState, useEffect } from "react";
import { UpdateIssue } from "./IssueData/UpdateIssue";
import { SearchBar } from "./UI/SearchBar";
import { LabelFilter } from "./UI/LabelFilter/LabelFilter";
import { TimeOrder } from "./UI/TimeOrder/TimeOrder";
import { AddButton } from "./UI/AddButton";
export const IssuePage = () => {
  const [search, setSearch] = useState("");
  const [labelFilter, setlabelFilter] = useState({
    open: false,
    progress: false,
    closed: false,
  });
  const [descendent, setdescendent] = useState(true);

  return (
    <Container>
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
        <AddButton />
      </Filter>
      <Issue>
        <UpdateIssue
          onPassSearch={search}
          onPassLabelFilter={labelFilter}
          onPassTimeOrder={descendent}
        />
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
