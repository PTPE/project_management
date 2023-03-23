import styled from "styled-components";
import { useState, useEffect } from "react";
import { UpdateIssue } from "../Data/UpdateIssue";
import { SearchBar } from "../Layout/SearchBar/SearchBar";
import { LabelFilter } from "../Layout/LabelFilter/LabelFilter";
import { TimeOrder } from "../Layout/TimeOrder/TimeOrder";
import { AddButton } from "../Layout/AddButton";

export const IssuePage = () => {
  const [search, setSearch] = useState("");
  const [labelFilter, setlabelFilter] = useState({
    open: false,
    progress: false,
    closed: false,
  });
  const [descendent, setdescendent] = useState(true);

  const setSearchHandler = (search: string) => {
    setSearch(search);
  };

  useEffect(() => {
    console.log(search);
  }, [search]);

  return (
    <Container>
      <SearchBar onPassSearchHandler={setSearchHandler} />
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
