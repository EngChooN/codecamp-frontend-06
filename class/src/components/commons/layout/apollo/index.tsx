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
import { accessTokenState } from "../../../../commons/store";

export default function ApolloSetting(props) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  // 방법1
  // if (typeof window === "undefined") {
  //   console.log("여기는 브라우저");
  //   const myLocalStorageAccessToken = localStorage.getItem("accessToken");
  //   setAccessToken(myLocalStorageAccessToken || "");
  // } else {
  //   console.log("여기는 프론트엔드 서버 (yarn dev)");
  // }

  // 방법2
  useEffect(() => {
    const myLocalStorageAccessToken = localStorage.getItem("accessToken");
    setAccessToken(myLocalStorageAccessToken || "");
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
