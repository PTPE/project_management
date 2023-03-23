import { useState } from "react";
import styled from "styled-components";
export const LabelFilter = () => {
  const [selected, setSelected] = useState([false, false, false]);
  const filter = ["Open", "In Progress", "Closed"];

  const setSelectedHandler = (i: number) => {
    setSelected((prev) => {
      const selectedCopied = prev.slice();
      selectedCopied[i] = !selected[i];
      return selectedCopied;
    });
  };
  return (
    <Label>
      <span>Filter:</span>

      {filter.map((filter, i) => (
        <div
          onClick={() => {
            setSelectedHandler(i);
          }}
          key={i}
          className={` ${selected[i] ? "selected" : ""}`}
        >
          {filter}
        </div>
      ))}
    </Label>
  );
};

const Label = styled.div`
  display: flex;
  gap: 10px;
  padding: 20px;
  font-weight: 400;
  span {
    padding: 10px;
  }
  div {
    cursor: pointer;
    padding: 10px;
    background: #e5e5e5;
    border-radius: 10px;
  }
  .selected {
    background: #0e8388;
    color: white;
  }
`;
