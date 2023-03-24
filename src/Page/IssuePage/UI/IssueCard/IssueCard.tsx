import styled from "styled-components";
import { EditButton } from "./EditButton";
import { StateOption } from "./StateOptions";
export const IssueCard = () => {
  return (
    <Container>
      <BasicInfo>
        <h3 className="state">Open</h3>
        <h3 className="title">Hello</h3>
        <h3 className="repo">Hotel_App</h3>
        <h6 className="time">5/12</h6>
      </BasicInfo>
      <StateOption />
      <Body>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi maxime
        sit officiis inventore nobis, porro amet suscipit aut laudantium fugiat
        tenetur facilis beatae repudiandae autem maiores provident deserunt vero
        molestias!
      </Body>
      <EditButton />
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  border-radius: 10px;
  padding: 20px 100px 20px 40px;
  gap: 50px;
  position: relative;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px 40px 20px 40px;
  }
`;
const BasicInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  .state {
    font-size: 20px;
    padding: 5px;
    align-self: start;
    border-radius: 10px;
    display: flex;
    cursor: pointer;
    background: #e5e5e5;
  }
  .title {
    font-size: 30px;
  }
  .repo {
    font-size: 20px;
  }
  .time {
    font-size: 18px;
  }
`;
const Body = styled.p`
  line-height: 25px;
`;
