import { useState } from "react";

export default function JoinPage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const onClickLogin = () => {
    if (/^\w+@\w+\.\w+$/.test(email) === false) {
      return alert("이메일을 입력해주세요!");
    } else if (name === "") {
      alert("이름을 입력해주세요");
    } else if (password === "") {
      alert("비밀번호를 입력해주세요");
    } else if (rePassword === "" || rePassword !== password) {
      alert("비밀번호를 다시 입력해주세요");
    } else {
      alert("회원가입 성공!");
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
    <>
      이메일
      <input
        type="text"
        placeholder="이메일을 입력해주세요"
        onChange={onChangeEmail}
      />
      이름
      <input
        type="text"
        placeholder="이름을 입력해주세요"
        onChange={onChangeName}
      />
      비밀번호
      <input
        type="password"
        placeholder="비밀번호를 입력해주세요"
        onChange={onChangePassword}
      />
      비밀번호 확인
      <input
        type="password"
        placeholder="비밀번호를 입력해주세요"
        onChange={onChangeRePassword}
      />
      <button onClick={onClickLogin}>회원가입</button>
    </>
  );
}