import { from } from "@apollo/client";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

const Wrapper = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  backdrop-filter: blur(100px);
  z-index: 1;
`;

const MenuWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Select = keyframes`
  from{
    border-top: 1px solid black;
    width: 0px;
  }
  to{
    border-top: 1px solid black;
    width: 100%;
  }
  `;

const SelectOut = keyframes`
   from{
    border-top: 1px solid black;
    width: 100%;
  }
  to{
    border-top: 1px solid black;
    width: 0;
  }

`;

const Title = styled.div`
  font-size: 25px;
  font-weight: 250;
  cursor: pointer;
`;

const Menu = styled.div`
  font-size: 17px;
  font-weight: 200;
  cursor: pointer;
`;

const UnderLineWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const UnderLine = styled.div`
  height: 1px;
`;

const ElWrapper = styled.div`
  :hover {
    & > div:last-child {
      > div {
        animation: ${Select} ease-in 0.5s;
        animation-fill-mode: forwards;
      }
    }
  }
  /* 
  :not(:hover) {
    & > div:last-child {
      > div {
        animation: ${SelectOut} ease-out 0.7s;
        animation-fill-mode: forwards;
      }
    }
  } */
`;

export default function Navigation2() {
  const router = useRouter();
  const menuArray = ["Skills & Info", "About", "Project", "Career & Education"];

  const onClickMain = () => {
    // document.location.href = "/";
    router.push("/");
  };

  const onClickMenu = (e) => {
    const id = e.target.id;
    if (id === "Skills & Info") {
      router.push("/Joonyoung/Skills");
    } else if (id === "About") {
      router.push("/Joonyoung/About");
    } else if (id === "Project") {
      router.push("/Joonyoung/Project");
    } else if (id === "Career & Education") {
      router.push("/Joonyoung/Career&Education");
    }
  };
  return (
    <Wrapper>
      <MenuWrapper>
        <ElWrapper>
          <Title onClick={onClickMain}>Joonyoung{"'"}s</Title>
          <UnderLineWrapper>
            <UnderLine />
          </UnderLineWrapper>
        </ElWrapper>
        {menuArray.map((menuTitle, index) => (
          <ElWrapper key={index}>
            <Menu onClick={onClickMenu} id={menuTitle}>
              {menuTitle}
            </Menu>
            <UnderLineWrapper>
              <UnderLine />
            </UnderLineWrapper>
          </ElWrapper>
        ))}
      </MenuWrapper>
    </Wrapper>
  );
}
