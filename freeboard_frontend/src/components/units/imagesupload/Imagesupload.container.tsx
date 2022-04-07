import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useRef, useState } from "react";
import { checkFileValidation } from "../../../commons/libraries/validation";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function ImagesUpload(props) {
  const myfileRef = useRef<HTMLInputElement>(null);

  //   const [imageUrl, setImageUrl] = useState<string | undefined>("");
  const [uploadFile] = useMutation(UPLOAD_FILE);

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

      //   setImageUrl(result.data?.uploadFile.url);
      props.setImageUrl(result.data?.uploadFile.url);
    } catch (error) {
      alert(error);
    }
  };

  const onClickImage = () => {
    myfileRef.current?.click();
  };

  return (
    <div>
      <div>이미지 업로드 연습하기</div>
      <div
        style={{ width: "150px", height: "50px", backgroundColor: "gray" }}
        onClick={onClickImage}
      >
        이미지선택
      </div>
      <input
        style={{ display: "none" }}
        type="file"
        onChange={onChangeFile}
        ref={myfileRef}
      />
      <img src={"https://storage.googleapis.com/" + props.imageUrl} />
    </div>
  );
}
