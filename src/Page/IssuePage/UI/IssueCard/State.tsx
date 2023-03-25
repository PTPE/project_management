import { useState } from "react";
import styled from "styled-components";

type StateOptiosProps = {
  passState: string;
};

export const State = (props: StateOptiosProps) => {
  const [clickState, setClickState] = useState(false);

  document.addEventListener("click", (e) => {
    if (!(e.target as Element).classList.contains("state"))
      setClickState(false);
  });
  return (
    <div>
      <CurrentState
        className="state"
        onClick={() => {
          setClickState(true);
        }}
      >
        {props.passState}
      </CurrentState>
      <Options className={clickState ? "show" : ""}>
        <li className="open">Open</li>
        <li className="progress">In Progress</li>
        <li className="closed">Closed</li>
      </Options>
    </div>
  );
};
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
  left: -100px;
  bottom: 75%;
  background: white;
  border: 2px solid grey;
  border-radius: 10px;
  padding: 10px;
  list-style-type: square;
  cursor: pointer;
  @media (max-width: 768px) {
    position: absolute;
    left: 15%;
    top: -80px;
    height: 100px;
  }
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
