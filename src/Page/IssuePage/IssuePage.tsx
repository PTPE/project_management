import styled from "styled-components";
import { useState, useRef } from "react";
import { Issue } from "./Components/IssueCard/Issue";
import { SearchBar } from "./Components/SearchBar";
import { LabelFilter } from "./Components/LabelFilter/LabelFilter";
import { TimeOrder } from "./Components/IssueCard/TimeOrder";
import { AddNewIssueButton } from "./Components/AddIssueButton";
import { isPageBottom } from "../../Service/DetectPageBottom";

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
      <SearchBar passSearchHandler={setSearch} />
      <div className="filter">
        <LabelFilter
          passLabelFilterHandler={setlabelFilter}
          passLabelFilter={labelFilter}
        />
        <div className="time-add">
          <TimeOrder
            passSetTimeOrderHandler={setdescendent}
            passTimeOrder={descendent}
          />
          <AddNewIssueButton />
        </div>
      </div>
      <div className="issue">
        <Issue
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
