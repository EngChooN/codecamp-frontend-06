// import ReactQuill from "react-quill";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function ProductWritePresenter(props) {
  return (
    <form onSubmit={props.handleSubmit(props.onClickProductWrite)}>
      <input
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
      />
      {/* defaultValue를 지웟다 저장해서 다시 되돌리고 저장해야지만 보인다; */}
      <input
        type="text"
        placeholder="상품가격"
        {...props.register("price")}
        defaultValue={props.data?.fetchUseditem.price}
      />
      <input
        type="text"
        placeholder="간단명"
        {...props.register("remarks")}
        defaultValue={props.data?.fetchUseditem.remarks}
      />
      {props.isEdit === true ? (
        <button>상품수정</button>
      ) : (
        <button>상품등록</button>
      )}
    </form>
  );
}
