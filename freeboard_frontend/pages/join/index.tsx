import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  Wrapper,
  Join,
  Email,
  Name,
  Password,
  Re_password,
  Btn,
  Btn_join,
  Title,
} from "../../src/components/units/Login.styles";

const CREATE_USER = gql`
  mutation createUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      _id
    }
  }
`;

export default function JoinPage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [createUser] = useMutation(CREATE_USER);
  const router = useRouter();

  const onClickLogin = async () => {
    if (/^\w+@\w+\.\w+$/.test(email) === false) {
      return alert("이메일을 입력해주세요!");
    } else if (name === "") {
      alert("이름을 입력해주세요");
    } else if (password === "") {
      alert("비밀번호를 입력해주세요");
    } else if (rePassword === "" || rePassword !== password) {
      alert("비밀번호를 다시 입력해주세요");
    } else {
      try {
        const result = await createUser({
          variables: {
            createUserInput: {
              email: email,
              password: password,
              name: name,
            },
          },
        });
        alert("회원가입 성공!");
        router.push("/login");
      } catch (error) {
        alert(error);
      }
    }
  };

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangeName = (event) => {
    setName(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const onChangeRePassword = (event) => {
    setRePassword(event.target.value);
  };

  return (
    <Wrapper>
      <Join>
        <Title>JOIN</Title>

        <Email
          type="text"
          placeholder="이메일을 입력해주세요"
          onChange={onChangeEmail}
        />

        <Name
          type="text"
          placeholder="이름을 입력해주세요"
          onChange={onChangeName}
        />

        <Password
          type="password"
          placeholder="비밀번호를 입력해주세요"
          onChange={onChangePassword}
        />

        <Re_password
          type="password"
          placeholder="비밀번호를 입력해주세요"
          onChange={onChangeRePassword}
        />
        <Btn>
          <Btn_join onClick={onClickLogin}>회원가입</Btn_join>
        </Btn>
      </Join>
    </Wrapper>
  );
}
