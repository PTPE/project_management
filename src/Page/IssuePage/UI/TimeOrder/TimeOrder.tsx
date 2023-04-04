import styled from "styled-components";

type TimeOrder = {
  passSetTimeOrderHandler: Function;
  passTimeOrder: Boolean;
};

export const TimeOrder = (props: TimeOrder) => {
  return (
    <Container>
      <span>Time Order:</span>
      <Time
        className={props.passTimeOrder ? "old" : "new"}
        onClick={() => props.passSetTimeOrderHandler(!props.passTimeOrder)}
      >
        {props.passTimeOrder ? "From Old To New" : "From New To Old"}
      </Time>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const Time = styled.div`
  cursor: pointer;
  padding: 10px;
  background: #e5e5e5;
  border-radius: 10px;
  color: black;
  flex: 1 0 auto;
  &.new {
    background: #0e8388;
    color:white;
`;
