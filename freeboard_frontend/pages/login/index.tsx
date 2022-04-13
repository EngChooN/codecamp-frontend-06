import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../src/commons/libraries/Recoil";

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

export default function LoginPage() {
  const [, setAccessToken] = useRecoilState(accessTokenState);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginUser] = useMutation(LOGIN_USER);
  const router = useRouter();

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const onClickLogin = async () => {
    if (/^\w+@\w+\.\w+$/.test(email) === false) {
      return alert("이메일을 입력해주세요!");
    } else if (password === "") {
      return alert("비밀번호를 입력해주세요!");
    } else {
      const result = await loginUser({
        variables: {
          email: email,
          password: password,
        },
      });
      const accessToken = result.data.loginUser.accessToken;
      setAccessToken(accessToken);
      alert("성공!");
      return router.push("/");
    }
  };

  return (
    <>
      <input
        type="text"
        placeholder="이메일을 입력해주세요"
        onChange={onChangeEmail}
      />
      <input
        type="password"
        placeholder="비밀번호를 입력해주세요"
        onChange={onChangePassword}
      />
      <input type="checkbox" /> 로그인 상태 유지
      <button onClick={onClickLogin}>로그인하기</button>
    </>
  );
}
