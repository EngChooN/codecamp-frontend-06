import { gql, useMutation } from "@apollo/client";
import styled from "@emotion/styled";
import { ChangeEvent, useRef, useState } from "react";
import { checkFileValidation } from "../../../commons/libraries/validation";
import { UPLOAD_FILE } from "./ImageUpload.queries";

const UploadButton = styled.button`
  width: 78px;
  height: 78px;
  background-color: #bdbdbd;
  margin-right: 24px;
  outline: none;
  border: none;
  cursor: pointer;
  margin-bottom: 25px;
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
      <UploadButton onClick={onClickImage}>+</UploadButton>
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
