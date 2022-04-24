// import ReactQuill from "react-quill";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import "react-quill/dist/quill.snow.css";
import {
  Wrapper,
  NewOrEdit,
  Name,
  Price,
  Remarks,
  Edit,
  New,
  Img,
} from "./ProductWrite.styles";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function ProductWritePresenter(props) {
  // useEffect(() => {
  //   props.reset({ contents: props.data?.fetchUseditem.contents });
  // }, [props.data]);

  return (
    <Wrapper>
      <NewOrEdit onSubmit={props.handleSubmit(props.onClickProductWrite)}>
        <Name
          type="text"
          placeholder="상품명"
          {...props.register("name")}
          defaultValue={props.data?.fetchUseditem.name}
          // 이름이 있으면 등록된 글이니까 조건을 주어 disabled!!
          // disabled={props.data?.fetchUseditem.name !== undefined ? true : false}
        />
        <ReactQuill
          onChange={props.onChangeContents}
          defaultValue={props.data?.fetchUseditem.contents}
          style={{
            width: "800px",
            height: "300px",
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
          }}
          placeholder="상품설명"
          // value={props.setValue("contents" || "")}
        />
        {/* defaultValue를 지웟다 저장해서 다시 되돌리고 저장해야지만 보인다; */}
        <Img>+</Img>
        <Price
          type="text"
          placeholder="상품가격"
          {...props.register("price")}
          defaultValue={props.data?.fetchUseditem.price}
        />
        <Remarks
          type="text"
          placeholder="간단명"
          {...props.register("remarks")}
          defaultValue={props.data?.fetchUseditem.remarks}
        />
        {props.isEdit === true ? <Edit>상품수정</Edit> : <New>상품등록</New>}
      </NewOrEdit>
    </Wrapper>
  );
}
