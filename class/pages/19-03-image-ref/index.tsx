import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useRef, useState } from "react";
import { checkFileValidation } from "../../src/commons/libraries/validation";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../src/commons/types/generated/types";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function ImageValidationPage() {
  const myfileRef = useRef<HTMLInputElement>(null);

  const [imageUrl, setImageUrl] = useState<string | undefined>("");
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const myfile = event.target.files?.[0];
    console.log(myfile);

    const isValid = checkFileValidation(myfile);
    if (!isValid) return;
    // // 파일 검증
    // if (!myfile?.size) {
    //   alert("파일이 없습니다");
    //   return;
    // }

    // // 5mb 용량 제한
    // if (myfile.size > 5 * 1024 * 1024) {
    //   alert("파일용량이 너무 큽니다 [제한 5MB]");
    //   return;
    // }

    // // 파일 확장자 제한
    // if (!myfile.type.includes("jpeg") && !myfile.type.includes("png")) {
    //   alert("jpeg파일 또는 png파일만 업로드가 가능합니다");
    //   return;
    // }

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
      <img src={"https://storage.googleapis.com/" + imageUrl} />
    </div>
  );
}
