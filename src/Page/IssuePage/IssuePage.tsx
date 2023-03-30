import styled from "styled-components";
import { useState, useRef } from "react";
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
      <div className="filter">
        <LabelFilter
          onPassLabelFilterHandler={setlabelFilter}
          onPassLabelFilter={labelFilter}
        />
        <div className="time-add">
          <TimeOrder
            onPassSetTimeOrderHandler={setdescendent}
            onPassTimeOrder={descendent}
          />
          <AddNewIssueButton />
        </div>
      </div>
      <div className="issue">
        <UpdateIssue
          passSearch={search}
          passLabelFilter={labelFilter}
          passTimeOrder={descendent}
          passIsBottom={isBottom}
        />
      </div>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #e9f8f9;
  min-height: 100vh;
  .search-add {
    margin-top: 50px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .issue {
    width: 60%;
  }
  .filter {
    display: flex;
    padding: 10px;
    gap: 10px;
    @media (max-width: 768px) {
      flex-direction: column;
    }
  }
  .time-add {
    display: flex;
    gap: 10px;
  }
`;
