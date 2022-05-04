// import ReactQuill from "react-quill";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import "react-quill/dist/quill.snow.css";
import KakaoMap from "../../../commons/map";
import {
  Wrapper,
  NewOrEdit,
  Name,
  Price,
  Remarks,
  Edit,
  New,
  Img,
  HashTag,
  Images,
  ImagesBtn,
} from "./ProductWrite.styles";
// 모달
import { Modal, Button } from "antd";
// 다음 주소
import DaumPostcode from "react-daum-postcode";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function ProductWritePresenter(props) {
  useEffect(() => {
    props.reset({ contents: props.data?.fetchUseditem.contents });
  }, [props.data]);

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
        <span>{props.formState.errors.name?.message}</span>
        <ReactQuill
          onChange={props.onChangeContents}
          value={props.getValues("contents") || ""}
          style={{
            width: "800px",
            height: "300px",
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
          }}
          placeholder="상품설명"
          // value={props.setValue("contents" || "")}
        />
        {/* <span>{props.formState.errors.contents?.message}</span> */}
        {/* defaultValue를 지웟다 저장해서 다시 되돌리고 저장해야지만 보인다; */}
        <Price
          type="text"
          placeholder="상품가격"
          {...props.register("price")}
          defaultValue={props.data?.fetchUseditem.price}
        />
        <span>{props.formState.errors.price?.message}</span>
        <Remarks
          type="text"
          placeholder="간단명"
          {...props.register("remarks")}
          defaultValue={props.data?.fetchUseditem.remarks}
        />
        <span>{props.formState.errors.remarks?.message}</span>

        {/* 해쉬태그 */}
        <div>
          {props.data?.fetchUseditem.tags}
          {props.hashArr.map((el, index) => (
            <span key={index}>{el}</span>
          ))}
        </div>
        <HashTag
          type={"text"}
          onKeyUp={props.onKeyUpHashTag}
          placeholder="태그를 입력 후 스페이스바를 눌러주세요"
        />

        {/* 모달과 주소 */}
        <Button onClick={props.onToggleModal}>주소등록</Button>
        {/* 수정하기할 때, 나오는 주소 */}
        <input
          value={
            props.address ||
            props.data?.fetchUseditem.useditemAddress.address ||
            ""
          }
        />
        {props.isOpen && (
          <Modal
            // 아예 모달을 삭제했다가 다시 켜기
            visible={true}
            onOk={props.onToggleModal}
            onCancel={props.onToggleModal}
          >
            <DaumPostcode onComplete={props.handleComplete} />
          </Modal>
        )}
        <KakaoMap
          setLat={props.setLat}
          setLng={props.setLng}
          address={
            props.address ||
            props.data?.fetchUseditem.useditemAddress.address ||
            ""
          }
        />
        <Images>
          이미지
          <ImagesBtn onClick={props.onClickImg}>
            <input
              style={{ display: "none" }}
              type="file"
              onChange={props.onChangeImg}
              ref={props.myImgRef}
            />
            {/* 이미지url이 비어있으면, 등록이 아닌 수정이니까 fetch image를 src로 주고,
             존재한다면, 등록이거나 수정해서 다시 올린 새로운 사진이므로 imgUrl을 src로 준다. */}
            <Img
              src={
                props.imgUrl === ""
                  ? "https://storage.googleapis.com/" +
                    props.data?.fetchUseditem.images[0]
                  : "https://storage.googleapis.com/" + props.imgUrl
              }
            />
          </ImagesBtn>
        </Images>
        {props.isEdit === true ? <Edit>상품수정</Edit> : <New>상품등록</New>}
      </NewOrEdit>
    </Wrapper>
  );
}
