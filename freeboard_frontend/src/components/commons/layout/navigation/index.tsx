import styled from "@emotion/styled/";
import { useRouter } from "next/router";
const Wrapper = styled.div`
  height: 65px;
  background-color: #ffd600;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Menu = styled.div`
  display: flex;
`;

const Nav1 = styled.div`
  cursor: pointer;
`;

const Nav2 = styled.div`
  cursor: pointer;
`;

const Nav3 = styled.div`
  cursor: pointer;
`;

const Slash = styled.img`
  margin: 0px 40px 0px 40px;
`;

export default function Navigation() {
  const router = useRouter();

  const onCilckMoveMain = () => {
    router.push("/boards");
  };
  return (
    <Wrapper>
      <Menu>
        <Nav1 onClick={onCilckMoveMain}>자유게시판</Nav1>
        <Slash src="/images/I.png" />
        <Nav2>중고마켓</Nav2>
        <Slash src="/images/I.png" />
        <Nav3>마이페이지</Nav3>
      </Menu>
    </Wrapper>
  );
}
