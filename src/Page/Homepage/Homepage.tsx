import styled from "styled-components";
export const Homepage = () => {
  const CLIENT_ID = "bf969790d4256f86647c";

  return (
    <Container>
      <Title>Welcome to Project Management</Title>
      <LogIn>
        <a
          href={`https://github.com/login/oauth/authorize?client_id=${CLIENT_ID};scope=repo`}
        >
          Login With Github
        </a>
      </LogIn>
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 100px;
  background: #e5e5e5;
`;
const Title = styled.h1`
  font-size: 50px;
  text-align: center;
  color: #0e8388;
  @media (max-width: 768px) {
    font-size: 40px;
  }
`;
const LogIn = styled.div`
  a {
    font-size: 40px;
    background: #0e8388;
    color: white;
    text-decoration: none;
    padding: 20px;
    border-radius: 15px;
    cursor: pointer;
    @media (max-width: 768px) {
      font-size: 30px;
    }
  }
`;
