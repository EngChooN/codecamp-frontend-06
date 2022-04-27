import { ChangeEvent, useState } from "react";

export default function ImageUploadPreviewPage() {
  const [imageUrl, setImageUrl] = useState("");

  const onChangeImage = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    // 파일이 없을 때
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
      }
    };
  };

  return (
    <div>
      <input type={"file"} onChange={onChangeImage} />
      <img src={imageUrl} />
    </div>
  );
}
