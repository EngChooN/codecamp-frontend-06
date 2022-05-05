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
      userPoint {
        amount
      }
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 150px;
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
  z-index: 1;
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

const Point = styled.button``;

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

  const onClickMovePointCharge = () => {
    router.push("/pointCharge");
  };

  const onClickMoveBaketsList = () => {
    router.push("/products/baskets");
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
              <UserInfo>
                {data?.fetchUserLoggedIn.userPoint.amount} POINT
                <button onClick={onClickMoveBaketsList}>
                  🛍 {JSON.parse(localStorage.getItem("baskets") || "[]").length}
                </button>
              </UserInfo>
              <HeaderBtnJoin onClick={onClickLogout}>로그아웃</HeaderBtnJoin>
              <Point onClick={onClickMovePointCharge}>포인트충전</Point>
            </>
          )}
        </BtnWrapper>
      </HeaderWrapper>
    </Wrapper>
  );
}

export default withAuth(Header);
