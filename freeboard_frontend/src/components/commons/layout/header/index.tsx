import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 150px;
  background-color: gray;
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.div``;

const BtnWrapper = styled.div``;

export default function Header() {
  return (
    <Wrapper>
      <HeaderWrapper>
        <Title>Title</Title>
        <BtnWrapper>
          <button>로그인</button>
          <button>회원가입</button>
        </BtnWrapper>
      </HeaderWrapper>
    </Wrapper>
  );
}
