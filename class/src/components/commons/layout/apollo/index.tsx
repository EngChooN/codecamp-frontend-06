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
    const accessToken = localStorage.getItem("accessToken");
    const userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}");
    setAccessToken(accessToken || "");
    setUserInfo(userInfo);
  }, []);

  const uploadLink = createUploadLink({
    uri: "http://backend06.codebootcamp.co.kr/graphql",
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    cache: new InMemoryCache(),
  });
  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
