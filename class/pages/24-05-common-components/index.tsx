import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styled from "@emotion/styled";
import Input01 from "../../src/components/commons/inputs/01";
import Button01 from "../../src/components/commons/buttons/01";

interface IProps {
  isActive: boolean;
}

interface IFormValues {
  email?: string;
  password?: string;
}

const Error = styled.div`
  color: red;
  font-size: 15px;
`;

const LoginBtn = styled.button`
  background-color: ${(props: IProps) => (props.isActive ? "yellow" : "")};
`;
const schema = yup.object({
  email: yup
    .string()
    .email("이메일 형식이 적합하지 않습니다.")
    .required("이메일은 필수 입력사항입니다."),
  password: yup
    .string()
    .min(4, "비밀번호는 최소 4자리 이상 입력해주세요.")
    .max(15, "비밀번호는 최대 15자리로 입력해주세요.")
    .required("비밀번호는 필수 입력사항입니다."),
});
export default function ReactHookFormPage() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickSubmit = (data: IFormValues) => {
    console.log(data);
  };

  console.log("리랜더링 쳌!");

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      {/* 이메일: <input type="text" {...register("email")} /> */}
      이메일: <Input01 mytype="text" myregister={register("email")} />
      <Error>{formState.errors.email?.message}</Error>
      {/* 비밀번호: <input type="password" {...register("password")} /> */}
      비밀번호: <Input01 mytype="password" myregister={register("password")} />
      <Error>{formState.errors.password?.message}</Error>
      {/* <LoginBtn isActive={formState.isValid}>로그인하기</LoginBtn> */}
      <Button01 myname={"로그인하기"} isActive={formState.isValid} />
    </form>
  );
}
