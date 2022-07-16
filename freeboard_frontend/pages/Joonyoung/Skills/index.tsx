import styled from "@emotion/styled";
import Fade from "react-reveal/Fade";
import { useState } from "react";

const Wrapper = styled.div`
  // 필수 세팅
  margin-top: -465px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: url("/images/rending/rending1.jpg") fixed;
  background-size: cover;
  padding-top: 50px;
`;

const Skills = styled.div`
  display: flex;
  flex-direction: column;
`;

const Tap_Wrapper = styled.div`
  display: flex;
`;

const Content_Wrapper = styled.div`
  width: 100%;
  height: 500px;
  padding: 30px;
  background-color: white;
`;

const SkillsTap1 = styled.section`
  width: 180px;
  height: 50px;
  border-radius: 15px 15px 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: ${(props) => (props.one ? "white" : "#dddddd")};
  font-size: 19px;
  font-weight: 200;
`;

const SkillsTap2 = styled.section`
  width: 180px;
  height: 50px;
  border-radius: 15px 15px 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: ${(props) => (props.two ? "white" : "#dddddd")};
  font-size: 19px;
  font-weight: 200;
`;

const SkillsTap3 = styled.section`
  width: 180px;
  height: 50px;
  border-radius: 15px 15px 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: ${(props) => (props.three ? "white" : "#dddddd")};
  font-size: 19px;
  font-weight: 200;
`;

const SkillsUl = styled.ul``;

const SkillsLi = styled.li`
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: 300;
`;

const SubTitle = styled.h3`
  font-size: 17px;
  font-weight: 400;
  margin-bottom: 40px;
  margin-top: 20px;
`;

const Info = styled.section`
  height: 550px;
  width: 400px;
  margin-left: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
`;

const Profile = styled.img`
  width: 100%;
`;

const Tags = styled.div`
  display: flex;
  justify-content: center;
  background-color: white;
  width: 100%;
`;

const Tag = styled.span`
  margin-top: 10px;
  margin-left: 5px;
  margin-right: 5px;
  background-color: #e9e9e6;
  color: #e33f46;
  padding-left: 5px;
  padding-right: 5px;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const Contact = styled.div`
  background-color: white;
  width: 100%;
  height: 100%;
  margin-top: 15px;
`;

const Contact_Content = styled.p`
  margin-left: 45px;
`;

export default function SkillsPage(props) {
  const [one, setOne] = useState(true);
  const [two, setTwo] = useState(false);
  const [three, setThree] = useState(false);

  const onClickTapOne = () => {
    setOne(true);
    setTwo(false);
    setThree(false);
  };

  const onClickTapTwo = () => {
    setOne(false);
    setTwo(true);
    setThree(false);
  };

  const onClickTapThree = () => {
    setOne(false);
    setTwo(false);
    setThree(true);
  };

  const tags = ["#역지사지", "#집요함", "#조금씩 전진", "#실력은 고통의 총합"];

  return (
    <Wrapper>
      <Fade>
        <Skills>
          <Tap_Wrapper>
            <SkillsTap1 one={one} onClick={onClickTapOne}>
              Proficient
            </SkillsTap1>
            <SkillsTap2 two={two} onClick={onClickTapTwo}>
              Demonstrating
            </SkillsTap2>
            <SkillsTap3 three={three} onClick={onClickTapThree}>
              ETC
            </SkillsTap3>
          </Tap_Wrapper>
          <Content_Wrapper>
            {one && (
              <div style={{ color: "#296A98" }}>
                <Fade>
                  <SubTitle>
                    💡 관련 지식과 경험이 있어 특별한 도움 없이 업무 수행이
                    가능한 기술
                  </SubTitle>
                  <SkillsUl>
                    <SkillsLi>HTML5 / CSS</SkillsLi>
                    <SkillsLi>Javascript</SkillsLi>
                    <SkillsLi>React / React-hooks</SkillsLi>
                    <SkillsLi>Next.js</SkillsLi>
                    <SkillsLi>Styled-component & emotion</SkillsLi>
                    <SkillsLi>GraphQL & Apollo Client</SkillsLi>
                    <SkillsLi>Recoil</SkillsLi>
                  </SkillsUl>
                </Fade>
              </div>
            )}
            {two && (
              <div style={{ color: "#BE7F24" }}>
                <Fade>
                  <SubTitle>
                    💡 능숙하진 않으나, 경험이 있어 기본적인 업무 수행이 가능한
                    기술
                  </SubTitle>
                  <SkillsUl>
                    <SkillsLi>React-router-dom</SkillsLi>
                    <SkillsLi>Typescript</SkillsLi>
                    <SkillsLi>rest-API & Axios</SkillsLi>
                    <SkillsLi>socket.io</SkillsLi>
                  </SkillsUl>
                </Fade>
              </div>
            )}
            {three && (
              <div style={{ color: "#CB4244" }}>
                <Fade>
                  <SubTitle>
                    💡 개발 관련 프로그램이나 사용 경험이 있는 기술 및 서비스
                  </SubTitle>
                  <SkillsUl>
                    <SkillsLi>Google Cloud Platform</SkillsLi>
                    <SkillsLi>Firebase</SkillsLi>
                    <SkillsLi>VsCode</SkillsLi>
                    <SkillsLi>GitHub</SkillsLi>
                  </SkillsUl>
                </Fade>
              </div>
            )}
          </Content_Wrapper>
        </Skills>
        <Info>
          <Profile src="/images/rending/profile.JPG" />
          <Tags>
            {tags.map((tag, index) => (
              <Tag key={index}>{tag}</Tag>
            ))}
          </Tags>
          <Contact>
            <Contact_Content>📞 Phone : 010-5179-9303</Contact_Content>
            <Contact_Content>📨 Email : aimzero9303@gmail.com</Contact_Content>
          </Contact>
        </Info>
      </Fade>
    </Wrapper>
  );
}
