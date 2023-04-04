import { useEffect, useState, useRef } from "react";
import { editIssue } from "../../../../Service/UpdateIssueHook";
import React from "react";
import styled from "styled-components";

type StateOptiosProps = {
  passState: string;
  passEditData: {
    title: string;
    repository: string;
    labels: [string];
    body: string;
  };
  passIssueNumber: string;
};

export const Status = React.memo((props: StateOptiosProps) => {
  const [click, setClick] = useState(false);
  const options = ["open", "in progress", "closed"];
  useEffect(() => {
    console.log(123);
  }, []);

  document.addEventListener("click", (e) => {
    if (!(e.target as Element).classList.contains("state")) setClick(false);
  });

  return (
    <Container>
      <CurrentState
        className="state"
        onClick={() => {
          setClick(true);
        }}
      >
        {props.passState}
      </CurrentState>

      <Options className={click ? "show" : ""}>
        {options.map((option) => (
          <li
            key={option}
            className={option}
            onClick={() => {
              editIssue(
                JSON.parse(localStorage.getItem("user")!).owner,
                JSON.parse(localStorage.getItem("user")!).token,
                props.passIssueNumber,
                { ...props.passEditData, labels: [`${option}`] }
              );
            }}
          >
            {option[0].toUpperCase() + option.slice(1)}
          </li>
        ))}
      </Options>
    </Container>
  );
});
const Container = styled.div`
  position: relative;
`;
const CurrentState = styled.span`
  padding: 5px;
  cursor: pointer;
  &:hover {
    background: #e5e5e5;
    border-radius: 10px;
  }
`;
const Options = styled.div`
  display: none;
  flex-direction: column;
  gap: 10px;
  position: absolute;
  bottom: 0;
  left: -140px;
  background: white;
  border: 2px solid grey;
  border-radius: 10px;
  padding: 10px;
  list-style-type: square;
  cursor: pointer;

  &.show {
    display: flex;
  }
  .open {
    color: grey;
  }
  .progress {
    color: red;
  }
  .closed {
    color: green;
  }
`;
