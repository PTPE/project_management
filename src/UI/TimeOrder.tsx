import { useState } from "react";
import styled from "styled-components";
export const TimeOrder = () => {
  const [descendent, setdescendent] = useState(true);
  return (
    <Time>
      <span>Time Order:</span>
      <div
        className={descendent ? "old" : "new"}
        onClick={() => {
          setdescendent(!descendent);
        }}
      >
        {descendent ? "From New To Old" : "From Old To New"}
      </div>
    </Time>
  );
};

const Time = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 20px;

  div {
    cursor: pointer;
    padding: 10px;
    background: #e5e5e5;
    border-radius: 10px;
    color: white;
  }
  .new {
    background: #0e8388;
  }
  .old {
    background: #e6e6e6;
    color: black;
  }
`;
