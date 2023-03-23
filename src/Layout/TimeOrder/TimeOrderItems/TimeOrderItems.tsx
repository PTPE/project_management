import styled from "styled-components";

type TimeOrderItemsProps = {
  onPassSetTimeOrderHandler: Function;
  onPassTimeOrder: Boolean;
};

export const TimeOrderItems = (props: TimeOrderItemsProps) => {
  return (
    <TimeOrder
      className={props.onPassTimeOrder ? "old" : "new"}
      onClick={() => props.onPassSetTimeOrderHandler(!props.onPassTimeOrder)}
    >
      {props.onPassTimeOrder ? "From Old To New" : "From New To Old"}
    </TimeOrder>
  );
};

const TimeOrder = styled.div`
  cursor: pointer;
  padding: 10px;
  background: #e5e5e5;
  border-radius: 10px;
  color: black;
  &.new {
    background: #0e8388;
    color:white;
`;
