import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../src/commons/store";

// 토큰 만료시간 5초
const LOGIN_USER_EXAMPLE = gql`
  mutation loginUserExample($email: String!, $password: String!) {
    loginUserExample(email: $email, password: $password) {
      accessToken
    }
  }
`;

export default function LoginPage() {
  const [, setAccessToken] = useRecoilState(accessTokenState);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginUser] = useMutation(LOGIN_USER_EXAMPLE);
  const router = useRouter();

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const onClickLogin = async () => {
    const result = await loginUser({
      variables: {
        email: email,
        password: password,
      },
    });
    const accessToken = result.data.loginUserExample.accessToken;
    setAccessToken(accessToken);
    console.log(accessToken);
    alert("로그인 성공!");
    router.push("/30-02-login-success");
  };

  return (
    <div>
      이메일: <input type="text" onChange={onChangeEmail} />
      <br />
      비밀번호: <input type="password" onChange={onChangePassword} />
      <br />
      <button onClick={onClickLogin}>로그인</button>
    </div>
  );
}
