import { useState } from "react";
import { TimeOrderItems } from "./TimeOrderItems/TimeOrderItems";
import styled from "styled-components";

type TimeOrder = {
  onPassSetTimeOrderHandler: Function;
  onPassTimeOrder: Boolean;
};

export const TimeOrder = (props: TimeOrder) => {
  return (
    <Time>
      <span>Time Order:</span>
      <TimeOrderItems
        onPassSetTimeOrderHandler={props.onPassSetTimeOrderHandler}
        onPassTimeOrder={props.onPassTimeOrder}
      />
    </Time>
  );
};

const Time = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 20px;
`;
