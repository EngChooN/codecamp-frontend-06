import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { useForm } from "react-hook-form";
import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;
export default function WebEditorPage() {
  const router = useRouter();
  const [createBoard] = useMutation(CREATE_BOARD);

  const { register, handleSubmit, setValue, trigger } = useForm({
    mode: "onChange",
  });
  const onChangeContents = (value: string) => {
    setValue("contents", value === "<p><br></p>" ? "" : value);
    trigger("contents");
  };

  const onClickSubmit = async (data) => {
    if (!(data.writer && data.password && data.title && data.contents)) {
      return alert("모두입력해 주세요!!");
    } else {
      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              writer: data.writer,
              title: data.title,
              password: data.password,
              contents: data.contents,
            },
          },
        });
        alert("등록성공!");
        console.log(result);
        router.push("/quiz06/editor/detail/" + result.data.createBoard._id);
      } catch (error) {
        alert(error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      작성자: <input type={"text"} {...register("writer")} />
      <br />
      비밀번호: <input type={"password"} {...register("password")} />
      <br />
      제목: <input type={"text"} {...register("title")} />
      <br />
      내용: <ReactQuill onChange={onChangeContents} />
      <br />
      <button onClick={onClickSubmit}>등록하기</button>
    </form>
  );
}
