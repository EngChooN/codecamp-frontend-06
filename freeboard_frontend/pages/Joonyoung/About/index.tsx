import styled from "@emotion/styled";

const Wrapper = styled.div`
  margin-top: -465px;
  height: 100vh;
`;
export default function AboutPage() {
  return (
    <Wrapper>
      <SideBar>
        <Sidebar_Tile>소통을하는 개발자입니다.</Sidebar_Tile>
        <Sidebar_Tile>
          사용자에게 좀더 편한 경험을 선사하고 싶습니다.
        </Sidebar_Tile>
        <Sidebar_Tile>현재 상태에 만족하지 않습니다.</Sidebar_Tile>
        <Sidebar_Tile>
          문제에 직면해도 끝까지 맞서는 개발자입니다.{" "}
        </Sidebar_Tile>
        <Sidebar_Tile>저는 이러한 성장을 하고 싶습니다.</Sidebar_Tile>
      </SideBar>
      <NewWrapper>
        <Title></Title>
        <Content></Content>
      </NewWrapper>
    </Wrapper>
  );
}
