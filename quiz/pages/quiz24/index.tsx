import { useMutation, gql } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

export default function ImageUploadPreviewPage() {
  const [imageUrl, setImageUrl] = useState("");
  // const file을 onClickSubmit 함수에서도 쓰기 위해서, state를 선언
  const [file1, setFile1] = useState<File>();

  const { register, handleSubmit } = useForm({
    mode: "onChange",
  });

  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [createBoard] = useMutation(CREATE_BOARD);

  const onChangeImage = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    // 파일이 없을 때의 조건문
    if (!file) {
      alert("파일이 없습니다.");
      return;
    }

    // 내장되어 있는 기능으로, 파일을 임시 url형태로 바꿔주는 함수가 있다. (readAsDataURL)
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    // 파일을 읽는다 (data형태로 들어옴)
    fileReader.onload = (data) => {
      // useState의 타입추론 때문에 string 타입이지만, null이거나 undefined 일 수도 있으니, 조건을 준다
      if (typeof data.target?.result === "string") {
        console.log(data.target?.result); // 파일을 url 형태로 읽은 결과물
        setImageUrl(data.target?.result);
        setFile1(file);
      }
    };
  };

  const onClickSubmit = async (aa: any) => {
    console.log(aa);
    try {
      //   이미지 url을 storage에 업로드
      const result1 = await uploadFile({
        variables: { file: file1 },
      });
      console.log(result1);

      // 뮤테이션 할 이미지 url을 result1의 데이터에서 가져와서 선언
      const imageUrl = result1.data.uploadFile.url;

      // 글을 등록
      const result2 = await createBoard({
        variables: {
          createBoardInput: {
            writer: aa.writer,
            title: aa.title,
            contents: aa.contents,
            password: aa.password,
            images: [imageUrl],
          },
        },
      });
      alert("이미지 + 글 등록 성공!");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      <input type="text" placeholder="writer" {...register("writer")} />
      <input type="text" placeholder="title" {...register("title")} />
      <input type="text" placeholder="contents" {...register("contents")} />
      <input type="password" placeholder="password" {...register("password")} />
      <input type={"file"} onChange={onChangeImage} />
      <img src={imageUrl} />
      <button>게시글 등록하기</button>
    </form>
  );
}
