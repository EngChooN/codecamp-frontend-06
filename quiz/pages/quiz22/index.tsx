import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "../../src/components/commons/buttons";
import Input from "../../src/components/commons/inputs";

interface IData {
  writer?: string;
  title?: string;
  contents?: string;
}

export default function Quiz() {
  const errorMessage = yup.object({
    writer: yup.string().max(5, "5자리 이내로 쓰자").required("빈칸 안된다"),
    password: yup
      .string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
        "대문소문특숫포함하자"
      )
      .max(8, "8자리 이내로 해라")
      .required("빈칸 안된다"),
    title: yup.string().max(100, "100자 넘지마라").required("빈칸 안된다"),
    contents: yup.string().max(1000, "1000자 넘지마라").required("빈칸 안된다"),
  });

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(errorMessage),
  });

  const onClickSubmit = (data: IData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      {/* <input type="text" {...register("writer")} placeholder="작성자" /> */}
      <Input
        type={"text"}
        register={{ ...register("writer") }}
        placeholder={"작성자"}
      />
      <div>{formState.errors.writer?.message}</div>
      {/* <input type="password" {...register("password")} placeholder="비밀번호" /> */}
      <Input
        type={"password"}
        register={{ ...register("password") }}
        placeholder={"비밀번호"}
      />
      <div>{formState.errors.password?.message}</div>
      {/* <input type="text" {...register("title")} placeholder="제목" /> */}
      <Input
        type={"text"}
        register={{ ...register("title") }}
        placeholder={"제목"}
      />
      <div>{formState.errors.title?.message}</div>
      {/* <input type="text" {...register("contents")} placeholder="내용" /> */}
      <Input
        type={"text"}
        register={{ ...register("contents") }}
        placeholder={"내용"}
      />
      <div>{formState.errors.contents?.message}</div>
      {/* <button>등록</button> */}
      <Button btnTitle={"등록"} />
    </form>
  );
}
