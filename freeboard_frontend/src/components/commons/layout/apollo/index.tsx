import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../commons/libraries/Recoil";
import { getAccessToken } from "../../../../commons/libraries/getAccessToken";
import { onError } from "@apollo/client/link/error";

export default function ApolloSetting(props) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  useEffect(() => {
    // const myLocalStorageAccessToken = localStorage.getItem("accessToken");
    // setAccessToken(myLocalStorageAccessToken || "");

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
