import styled from "styled-components";

type LabelFilterItemsProps = {
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
    [key: string]: boolean;
  };
};

export const LabelFilterItems = (props: LabelFilterItemsProps) => {
  const filter = ["Open", "In Progress", "Closed"];

  const setSelectedHandler = (i: number) => {
    const selectedFilterKeys = Object.keys(props.passLabelFilter)[i];
    const selectedFilterValues = Object.values(props.passLabelFilter)[i];

    props.passLabelFilterHandler((prev) => {
      return { ...prev, [selectedFilterKeys]: !selectedFilterValues };
    });
  };

  return (
    <Container>
      {filter.map((filter, i) => (
        <LabelItem
          onClick={() => {
            setSelectedHandler(i);
          }}
          key={i}
          className={` ${
            Object.values(props.passLabelFilter)[i] ? "selected" : ""
          }`}
        >
          {filter}
        </LabelItem>
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const LabelItem = styled.div`
  cursor: pointer;
  padding: 10px;
  background: #e5e5e5;
  border-radius: 10px;
  flex: 1 0 auto;
  &.selected {
    background: #0e8388;
    color: white;
  }
`;
