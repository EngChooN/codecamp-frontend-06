import {
  Left_Content_Wrapper,
  Left_Date,
  Left_Img,
  Left_Project_Wrapper,
  Link,
  Right_Content_Wrapper,
  Right_Date,
  Right_Img,
  Right_Project_Wrapper,
  ScrollBox,
  Tag,
  Tags,
  Title,
  Wrapper,
} from "../../../src/components/units/Project.styles";
import Flip from "react-reveal/Flip";
import Fade from "react-reveal/Fade";

export default function ProjectPage() {
  const onClickLink = (e) => {
    window.open(e.target.id);
  };
  return (
    <Wrapper>
      <ScrollBox>
        <Fade>
          <Right_Date>July 03, 2021 ~ July 21, 2021</Right_Date>
        </Fade>
        <Flip left>
          <Left_Project_Wrapper>
            <Left_Img src={"/images/project/langB.gif"} />
            <Left_Content_Wrapper>
              <Title>📗 LangB 팀 프로젝트</Title>
              <Link
                onClick={onClickLink}
                id={
                  "https://www.notion.so/LangB-SNS-166e79512ede43039e4b4d1f35ef750a"
                }
              >
                https://www.notion.so/LangB-SNS-166e79512ede43039e4b4d1f35ef750a
              </Link>
              <Link
                onClick={onClickLink}
                id={"https://github.com/EngChooN/team-refac"}
              >
                https://github.com/EngChooN/team-refac
              </Link>
              <Tags>
                <Tag>Next.js</Tag>
                <Tag>React/ReactHooks</Tag>
                <Tag>GraphQL</Tag>
                <Tag>Apollo-Client</Tag>
                <Tag>Emotion</Tag>
                <Tag>GithuB</Tag>
                <Tag>Socket.io</Tag>
              </Tags>
            </Left_Content_Wrapper>
          </Left_Project_Wrapper>
        </Flip>
        <Fade>
          <Left_Date>March 14, 2022 (in progress)</Left_Date>
        </Fade>
        <Flip right>
          <Right_Project_Wrapper>
            <Right_Img src={"/images/project/codeCamp.png"} />
            <Right_Content_Wrapper>
              <Title>📗 코드캠프 개인 프로젝트</Title>
              <Link
                onClick={onClickLink}
                id={"https://www.notion.so/9e4e40fd0205435f87334fbad12bc3b2"}
              >
                https://www.notion.so/9e4e40fd0205435f87334fbad12bc3b2
              </Link>
              <Link
                onClick={onClickLink}
                id={
                  "https://github.com/EngChooN/codecamp-frontend-06/tree/master/freeboard_frontend"
                }
              >
                https://github.com/EngChooN/codecamp-frontend-06/tree/master/freeboard_frontend
              </Link>
              <Tags>
                <Tag>Next.js</Tag>
                <Tag>React/ReactHooks</Tag>
                <Tag>GraphQL</Tag>
                <Tag>Apollo-Client</Tag>
                <Tag>Emotion</Tag>
                <Tag>GithuB</Tag>
              </Tags>
            </Right_Content_Wrapper>
          </Right_Project_Wrapper>
        </Flip>
        <Fade>
          <Right_Date>Feb 28, 2022 ~ March 04, 2022</Right_Date>
        </Fade>
        <Flip left>
          <Left_Project_Wrapper>
            <Left_Img src={"/images/project/cyWorld.png"} />
            <Left_Content_Wrapper>
              <Title>📗 싸이월드 클론 코딩</Title>
              <Link
                onClick={onClickLink}
                id={"https://www.notion.so/2f3f01aa198b4ebbadfa2d5960f136a2"}
              >
                https://www.notion.so/2f3f01aa198b4ebbadfa2d5960f136a2
              </Link>
              <Link
                onClick={onClickLink}
                id={
                  "https://github.com/EngChooN/precamp-14/tree/master/cyworld"
                }
              >
                https://github.com/EngChooN/precamp-14/tree/master/cyworld
              </Link>
              <Tags>
                <Tag>HTML</Tag>
                <Tag>CSS</Tag>
                <Tag>Javascript</Tag>
                <Tag>GitHub</Tag>
              </Tags>
            </Left_Content_Wrapper>
          </Left_Project_Wrapper>
        </Flip>
        <Fade>
          <Left_Date>April 18, 2021 ~ April 22, 2021</Left_Date>
        </Fade>
        <Flip right>
          <Right_Project_Wrapper>
            <Right_Img src={"/images/project/toDoList.png"} />
            <Right_Content_Wrapper>
              <Title>📗 Javascript로 To-Do-list 만들기</Title>
              <Link
                onClick={onClickLink}
                id={
                  "https://www.notion.so/Javascript-To-Do-list-ad580e388e4f40d095c7f5d9d5e9f29f"
                }
              >
                https://www.notion.so/Javascript-To-Do-list-ad580e388e4f40d095c7f5d9d5e9f29f
              </Link>
              <Link
                onClick={onClickLink}
                id={"https://github.com/EngChooN/todo-list"}
              >
                https://github.com/EngChooN/todo-list
              </Link>
              <Tags>
                <Tag>HTML</Tag>
                <Tag>CSS</Tag>
                <Tag>Javascript</Tag>
                <Tag>GitHub</Tag>{" "}
              </Tags>
            </Right_Content_Wrapper>
          </Right_Project_Wrapper>
        </Flip>
        <Fade>
          <Right_Date>July 03, 2021 ~ July 21, 2021</Right_Date>
        </Fade>
        <Flip left>
          <Left_Project_Wrapper>
            <Left_Img src={"/images/project/kakaoClone.png"} />
            <Left_Content_Wrapper>
              <Title>📗 카카오톡 클론 코딩</Title>
              <Link
                onClick={onClickLink}
                id={"https://www.notion.so/72df36a511354c08a9c1859957101a95"}
              >
                https://www.notion.so/72df36a511354c08a9c1859957101a95
              </Link>
              <Link
                onClick={onClickLink}
                id={"https://github.com/EngChooN/kakao-clone"}
              >
                https://github.com/EngChooN/kakao-clone
              </Link>
              <Tags>
                <Tag>HTML</Tag>
                <Tag>CSS</Tag>
                <Tag>GitHub</Tag>
              </Tags>
            </Left_Content_Wrapper>
          </Left_Project_Wrapper>
        </Flip>
      </ScrollBox>
    </Wrapper>
  );
}
