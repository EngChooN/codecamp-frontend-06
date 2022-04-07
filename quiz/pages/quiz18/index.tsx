// import axios from 'axios'
import { useMutation, gql } from "@apollo/client";
import styled from "@emotion/styled";
import { ChangeEvent, useRef, useState } from "react";
import { checkFileValidation } from "../../src/commons/libraries/validation";
import { LikeOutlined } from "@ant-design/icons";

const ImgBtn = styled.div``;

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
      images
    }
  }
`;

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function GraphqlMutationPage() {
  const myfileRef = useRef<HTMLInputElement>(null);
  const [imageUrl, setImageUrl] = useState<string | undefined>("");
  const [uploadFile] = useMutation(UPLOAD_FILE);

  const [myWriter, setMyWriter] = useState("");
  const [myTitle, setMyTitle] = useState("");
  const [myContents, setMyContents] = useState("");
  const [myPassword, setMyPassword] = useState("");

  const [data, setData] = useState("");
  const [callApi] = useMutation(CREATE_BOARD);

  const callGraphqlApi = async () => {
    // const result = await axios.get("https://koreanjson.com/posts/1") rest 방식
    const result = await callApi({
      variables: {
        createBoardInput: {
          writer: myWriter,
          title: myTitle,
          contents: myContents,
          password: myPassword,
          images: [imageUrl],
        },
      },
    }); // graphql 방식
    console.log(result);
    console.log(result.data.createBoard.message);
    setData(result.data.createBoard.message);
  };

  const onChangeWriter = (event) => {
    setMyWriter(event.target.value);
  };

  const onChangeTitle = (event) => {
    setMyTitle(event.target.value);
  };

  const onChangeContents = (event) => {
    setMyContents(event.target.value);
  };

  const onChangePassword = (event) => {
    setMyPassword(event.target.value);
  };

  const onClickImage = () => {
    myfileRef.current?.click();
  };

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const myfile = event.target.files?.[0];
    console.log(myfile);

    const isValid = checkFileValidation(myfile);
    if (!isValid) return;

    try {
      const result = await uploadFile({
        variables: { file: myfile },
      });
      console.log(result.data?.uploadFile.url);

      setImageUrl(result.data?.uploadFile.url);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div>
      {/* <div>{data}</div> */}
      작성자: <input type="text" onChange={onChangeWriter} />
      <br />
      제목: <input type="text" onChange={onChangeTitle} />
      <br />
      내용: <input type="text" onChange={onChangeContents} />
      <br />
      비밀번호: <input type="password" onChange={onChangePassword} />
      <br />
      <div>
        <div>이미지 업로드 연습하기</div>

        <LikeOutlined onClick={onClickImage} />

        <input
          style={{ display: "none" }}
          type="file"
          onChange={onChangeFile}
          ref={myfileRef}
        />
        <img src={"https://storage.googleapis.com/" + imageUrl} />
      </div>
      <button onClick={callGraphqlApi}>글 + 이미지 등록</button>
    </div>
  );
}
