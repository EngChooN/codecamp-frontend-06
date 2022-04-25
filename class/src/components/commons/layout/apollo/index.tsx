import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
// 이미지 올리기
import { createUploadLink } from "apollo-upload-client";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState, userInfoState } from "../../../../commons/store";
import { onError } from "@apollo/client/link/error";
import { getAccessToken } from "../../../../commons/libraries/getAccessToken";

export default function ApolloSetting(props) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [, setUserInfo] = useRecoilState(userInfoState);
  // 방법1
  // if (typeof window === "undefined") {
  //   console.log("여기는 브라우저");
  //   const myLocalStorageAccessToken = localStorage.getItem("accessToken");
  //   setAccessToken(myLocalStorageAccessToken || "");
  // } else {
  //   console.log("여기는 프론트엔드 서버 (yarn dev)");
  // }

  // 방법2 (새로고침을 해도 토큰이 안사라지지 않게, 로컬스토리지에서 토큰을 받아 글로벌 스테이트에 넣어준다)
  useEffect(() => {
    // const accessToken = localStorage.getItem("accessToken");
    // const userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}");
    // setAccessToken(accessToken || "");
    // setUserInfo(userInfo);

    // accessToken 재발급 받아서 state에 넣어주기
    getAccessToken().then((newAccessToken) => {
      setAccessToken(newAccessToken);
    });
  }, []);

  // 리프레시 토큰
  const errorLink = onError(({ graphQlErrors, operation, forward }) => {
    // 1. 에러를 캐치
    if (graphQlErrors) {
      for (const err of graphQlErrors) {
        // 해당 에러가 토큰 만료에러인지 체크(UNAUTHENTICATIED)
        if (err.extensions.code === "UNAUTHENTICATIED") {
          // 2. refreshToken으로 accessToken을 재발급 해준다
          // apollo가 세팅이 안된 상태에서 graphql-request를 이용하여 rest api 형태로 사용 할 수 있다.
          getAccessToken().then((newAccessToken) => {
            // 재발급 받은 newAccessToken을 글로벌 스테이트(accessToken)에 다시 저장
            setAccessToken(newAccessToken);
            // 3. 재발급 받은 accessToken으로 방금 실패한 query(토큰만료로 실패한 api)를 재요청한다.
            // 기존의 headers를 바꿔서 갈아끼운다(?)
            operation.setContext({
              headers: {
                ...operation.getContext().headers,
                Authorization: `Bearer ${newAccessToken}`, // accessToken만 바꿔치기
              },
            });
            // 변경된 operation 재요청하기
            return forward(operation);
          });
        }
      }
    }
  });

  const uploadLink = createUploadLink({
    uri: "https://backend06.codebootcamp.co.kr/graphql",
    headers: { Authorization: `Bearer ${accessToken}` },
    credentials: "include",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink]),
    cache: new InMemoryCache(),
  });
  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
