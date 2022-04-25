import { gql, useMutation } from "@apollo/client";
import styled from "@emotion/styled";
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

const Wrapper = styled.div`
  background-image: url("/images/Login.jpg");
  width: 100%;
  height: 80vh;
  background-size: cover;
`;
const Login = styled.div`
  height: 100%;
  padding-top: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #0000007e;
`;

const InputUserInfo = styled.input`
  border: none;
  height: 60px;
  width: 550px;
  font-size: 18px;
  border-radius: 20px;
  margin-bottom: 30px;
`;

const Title = styled.div`
  color: white;
  font-size: 45px;
  margin-bottom: 100px;
  font-weight: 300;
`;

const Check = styled.input``;

const LoginBtn = styled.button`
  border: none;
  background-color: rgb(254, 216, 9);
  width: 130px;
  height: 50px;
  border-radius: 10px;
  font-weight: 700;
  font-size: 20px;
  cursor: pointer;
  margin-top: 20px;
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
      localStorage.setItem("accessToken", accessToken);
      alert("성공!");
      return router.push("/");
    }
  };

  return (
    <Wrapper>
      <Login>
        <Title>LOGIN</Title>
        <InputUserInfo
          type="text"
          placeholder="이메일을 입력해주세요"
          onChange={onChangeEmail}
        />
        <InputUserInfo
          type="password"
          placeholder="비밀번호를 입력해주세요"
          onChange={onChangePassword}
        />
        {/* <Check type="checkbox" /> 로그인 상태 유지 */}
        <LoginBtn onClick={onClickLogin}>로그인하기</LoginBtn>
      </Login>
    </Wrapper>
  );
}
