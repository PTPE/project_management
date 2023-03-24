import { useState } from "react";
import { LabelFilterItems } from "./LabelFilterItems";
import styled from "styled-components";

type LabelFilterProps = {
  onPassLabelFilterHandler: React.Dispatch<
    React.SetStateAction<{
      open: boolean;
      progress: boolean;
      closed: boolean;
    }>
  >;
  onPassLabelFilter: {
    open: boolean;
    progress: boolean;
    closed: boolean;
  };
};

export const LabelFilter = (props: LabelFilterProps) => {
  return (
    <Label>
      <span>Filter:</span>
      <LabelFilterItems
        onPassLabelFilterHandler={props.onPassLabelFilterHandler}
        onPassLabelFilter={props.onPassLabelFilter}
      />
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
`;
