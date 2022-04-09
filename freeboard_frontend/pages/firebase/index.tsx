import {
  collection,
  getFirestore,
  addDoc,
  getDocs,
} from "firebase/firestore/lite";
import { useState } from "react";
import { firebaseApp } from "../_app";

export default function MyFireBasePageContainer() {
  const [inputs, setInputs] = useState({
    writer: "",
    title: "",
    contents: "",
  });

  const onClickSubmit = async () => {
    // firebase에 데이터 한줄 등록하기
    try {
      const board = collection(getFirestore(firebaseApp), "board");
      await addDoc(board, {
        writer: inputs.writer,
        title: inputs.title,
        contents: inputs.contents,
      });
      alert("success!");
    } catch {
      alert("failed!");
    }
  };

  const onChangeInputs = (event) => {
    setInputs({
      ...inputs,
      [event.target.id]: event.target.value,
    });
  };
  return (
    <>
      <input
        type="text"
        placeholder="writer"
        id="writer"
        onChange={onChangeInputs}
      />
      <input
        type="text"
        placeholder="title"
        id="title"
        onChange={onChangeInputs}
      />
      <input
        type="text"
        placeholder="contents"
        id="contents"
        onChange={onChangeInputs}
      />
      <button onClick={onClickSubmit}>등록하기</button>
    </>
  );
}
