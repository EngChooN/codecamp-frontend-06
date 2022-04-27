import { useMutation, gql } from "@apollo/client";
import { ChangeEvent, useState } from "react";

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
  const [imageUrls, setImageUrls] = useState(["", "", ""]);
  // const file을 onClickSubmit 함수에서도 쓰기 위해서, state를 선언
  const [files, setFiles] = useState<(File | undefined)[]>([
    undefined,
    undefined,
    undefined,
  ]);

  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [createBoard] = useMutation(CREATE_BOARD);

  const onChangeImage =
    (filesNumber) => (event: ChangeEvent<HTMLInputElement>) => {
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
          const tempUrls = [...imageUrls];
          tempUrls[filesNumber] = data.target?.result;
          setImageUrls(tempUrls);

          const tempFiles = [...files];
          tempFiles[filesNumber] = file;
          setFiles(tempFiles);
        }
      };
    };

  const onClickSubmit = async () => {
    try {
      const result = await Promise.all(
        files.map((el) => el && uploadFile({ variables: { file: el } }))
      );

      const resultUrls = result.map((el) => {
        return el?.data ? el?.data.uploadFile.url : "";
      });

      // 뮤테이션 할 이미지 url을 result1의 데이터에서 가져와서 선언
      // const imageUrl = result1.data.uploadFile.url;

      // 글을 등록
      const result2 = await createBoard({
        variables: {
          createBoardInput: {
            writer: "작성자",
            title: "제목",
            contents: "내용",
            password: "1111",
            images: resultUrls,
          },
        },
      });
      alert("이미지 + 글 등록 성공!");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div>
      <input type={"file"} onChange={onChangeImage(0)} />
      <input type={"file"} onChange={onChangeImage(1)} />
      <input type={"file"} onChange={onChangeImage(2)} />
      <img src={imageUrls[0]} />
      <img src={imageUrls[1]} />
      <img src={imageUrls[2]} />
      <button onClick={onClickSubmit}>게시글 등록하기</button>
    </div>
  );
}
