import styled from "@emotion/styled";
import { useRouter } from "next/router";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 150px;
`;

const HeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
`;

const HeaderBtnLogin = styled.button`
  margin-right: 20px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
`;

const HeaderBtnJoin = styled.button`
  background-color: #ffd600;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  font-size: 25px;
  cursor: pointer;
`;

const BtnWrapper = styled.div``;

export default function Header() {
  const router = useRouter();

  const onCilckMoveMain = () => {
    router.push("/");
  };

  return (
    <Wrapper>
      <HeaderWrapper>
        <Title onClick={onCilckMoveMain}>Header</Title>
        <BtnWrapper>
          <HeaderBtnLogin>로그인</HeaderBtnLogin>
          <HeaderBtnJoin>회원가입</HeaderBtnJoin>
        </BtnWrapper>
      </HeaderWrapper>
    </Wrapper>
  );
}
