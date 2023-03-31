import React from "react";
import { EditButton } from "./EditButton";
import { Status } from "./Status";
import styled from "styled-components";

type IssueCardProps = {
  passIssueData: {
    [key: string]: any;
  };
};

type Data = {
  labels: { [key: number]: { name: string } };
  title: string;
  repository_url: string;
  user: { login: string };
  created_at: string;
  body: string;
  number: string;
};

export const IssueCard = React.memo((props: IssueCardProps) => {
  const convertTime = (time: string) => {
    const timeStamp = Date.parse(time);
    const date = new Date(timeStamp);
    const result = `${
      date.getMonth() + 1
    }/${date.getDate()}/${date.getFullYear()} ${date
      .getHours()
      .toString()
      .padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")} `;
    return result;
  };

  const capitalization = (word: string) =>
    word
      .split(" ")
      .map((word) => word[0].toLocaleUpperCase() + word.slice(1))
      .join(" ");
  if (!props.passIssueData) return <div>no data</div>;

  return props.passIssueData.map((data: Data, i: string) => {
    return (
      <Container key={i}>
        <BasicInfo>
          <Status
            passState={capitalization(data.labels[0].name)}
            passEditData={{
              title: data.title,
              repository: data.repository_url.slice(
                30 + data.user.login.length
              ),
              labels: [data.labels[0].name],
              body: data.body,
            }}
            passIssueNumber={data.number}
          />
          <h3 className="title">{data.title}</h3>
          <h3 className="repo">
            {data.repository_url.slice(30 + data.user.login.length)}
          </h3>
          <h6 className="time">{convertTime(data.created_at)}</h6>
        </BasicInfo>
        <Body>{data.body}</Body>
        <EditButton
          passIssueNumber={data.number}
          passDefaultValue={{
            title: data.title,
            repository: data.repository_url.slice(30 + data.user.login.length),
            labels: data.labels[0].name,
            body: data.body,
          }}
        />
      </Container>
    );
  });
});
const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 10px;
  padding: 20px 100px 20px 40px;
  gap: 50px;
  position: relative;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px 40px 20px 40px;
  }
  margin-bottom: 50px;
`;
const BasicInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

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
