import { UserAithorization } from "../Data/UserAuthorization";
import styled from "styled-components";
export const RedirectPage = () => {
  UserAithorization();
  return (
    <Container>
      <Ring>
        <div />
        <div />
        <div />
        <div />
      </Ring>
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #e5e5e5;
`;
const Ring = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
  div {
    display: block;
    position: absolute;
    width: 100px;
    height: 100px;
    margin: 10px;
    border: 10px solid #0E8388;
    border-radius: 50%;
    animation: spin 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color:#0E8388 transparent transparent transparent;
  }
  div:nth-child(1) {
    animation-delay: -0.45s;
  }
  div:nth-child(2) {
    animation-delay: -0.3s;
  }
  div:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }

`;
