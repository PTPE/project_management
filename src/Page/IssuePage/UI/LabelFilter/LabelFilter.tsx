import { LabelFilterItems } from "./LabelFilterItems";
import styled from "styled-components";

type LabelFilterProps = {
  passLabelFilterHandler: React.Dispatch<
    React.SetStateAction<{
      open: boolean;
      progress: boolean;
      closed: boolean;
    }>
  >;
  passLabelFilter: {
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
        passLabelFilterHandler={props.passLabelFilterHandler}
        passLabelFilter={props.passLabelFilter}
      />
    </Label>
  );
};

const Label = styled.div`
  display: flex;
  gap: 10px;
  font-weight: 400;
  align-items: center;
  justify-content: center;
  span {
    padding: 10px;
  }
`;
