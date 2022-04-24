import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { accessTokenState } from "../../../../commons/libraries/Recoil";
import { useRecoilState } from "recoil";
import { gql, useQuery } from "@apollo/client";
import { withAuth } from "../../hoc/withAuth";

// 로그인 정보
const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 150px;
  z-index: 5;
  background-color: white;
`;

const HeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  background-color: white;
  height: 150px;
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

const UserInfo = styled.div`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  font-size: 25px;
`;

const BtnWrapper = styled.div``;

// ===================================
function Header() {
  const router = useRouter();

  const onClickMoveMain = () => {
    router.push("/");
  };

  const onClickMoveLogin = () => {
    router.push("/login");
  };

  const onClickMoveJoin = () => {
    router.push("/join");
  };

  // 로그인 정보
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const { data } = useQuery(FETCH_USER_LOGGED_IN);

  const onClickLogout = () => {
    setAccessToken("");
    localStorage.removeItem("accessToken");
    console.log(router.pathname);
    router.push(router.pathname);
    alert("로그아웃 성공!");
  };

  return (
    <Wrapper>
      <HeaderWrapper>
        <Title onClick={onClickMoveMain}>Header</Title>
        <BtnWrapper>
          {accessToken === "" ? (
            <>
              <HeaderBtnLogin onClick={onClickMoveLogin}>로그인</HeaderBtnLogin>
              <HeaderBtnJoin onClick={onClickMoveJoin}>회원가입</HeaderBtnJoin>
            </>
          ) : (
            <>
              <UserInfo>{data?.fetchUserLoggedIn.name}님 환영합니다.</UserInfo>
              <HeaderBtnJoin onClick={onClickLogout}>로그아웃</HeaderBtnJoin>
            </>
          )}
        </BtnWrapper>
      </HeaderWrapper>
    </Wrapper>
  );
}

export default withAuth(Header);
