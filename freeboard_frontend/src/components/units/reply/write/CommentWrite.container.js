import CommentWriteUI from "./CommentWrite.presenter";
import { useMutation } from "@apollo/client";
import { CREATE_BOARD_COMMENT, UPDATE_COMMENT } from "./CommentWrite.queries";
import { useState } from "react";
import { useRouter } from "next/router";
import { FETCH_COMMENTS } from "../detail/CommentDetail.queries";
import { Modal } from "antd";

export default function CommentWrite(props) {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);
  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);
  const [updateBoardComment] = useMutation(UPDATE_COMMENT);
  const [editCommentId2, setEditCommentId2] = useState("");
  const [commentWriter, setCommentWriter] = useState("");
  const [commentContents, setCommentContents] = useState("");
  const [commentPassword, setCommentPassword] = useState("");
  // const [commentRating, setCommentRating] = useState("");
  //별점
  const [rating, setRating] = useState(0);
  const handleChange = (rating) => {
    setRating(rating);
  };

  const onChangeCommentWriter = (event) => {
    setCommentWriter(event.target.value);
    if (
      event.target.value !== "" &&
      commentContents !== "" &&
      commentPassword !== ""
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeCommentContents = (event) => {
    setCommentContents(event.target.value);
    if (
      event.target.value !== "" &&
      commentWriter !== "" &&
      commentPassword !== ""
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeCommentPassword = (event) => {
    setCommentPassword(event.target.value);
    if (
      event.target.value !== "" &&
      commentWriter !== "" &&
      commentContents !== ""
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeCommentRating = (event) => {
    setCommentRating(event.target.value);
  };

  const onClickCommentCreate = async () => {
    try {
      const result = await createBoardComment({
        variables: {
          createBoardCommentInput: {
            writer: commentWriter,
            password: commentPassword,
            contents: commentContents,
            rating: rating,
          },
          boardId: router.query.boardId,
        },
        refetchQueries: [
          {
            query: FETCH_COMMENTS,
            variables: {
              boardId: router.query.boardId,
            },
          },
        ],
      });
      // 댓글작성 후, 작성내용을 지워주기 위하여, state를 등록 후 빈값으로 세팅한다.
      setCommentContents("");
      setCommentPassword("");
      setCommentWriter("");
      setRating(0);
      Modal.success({
        content: "(댓글등록 성공!)",
      });
    } catch (error) {
      Modal.error({
        content: error,
      });
    }
  };

  // 댓글수정
  // 아이디는 어찌저찌 받았는데 등록 당시 정보를 가져오려면 commentDetail에서 el을 받아야하는데 방법을 모르겠다.
  // 아그리고 props.isCommentEdit = false; 이거 안되는거보니까 commentDetail에서 set함수도 보내줘야 할듯
  const onClickCommentUpdate = async (event) => {
    setEditCommentId2(event.target.id);
    console.log("댓글수정함수" + event.target.id);
    try {
      await updateBoardComment({
        variables: {
          updateBoardCommentInput: {
            contents: commentContents,
            rating: rating,
          },
          password: commentPassword,
          boardCommentId: editCommentId2,
        },
      });
      Modal.success({
        content: "(댓글수정성공!)",
      });
      props.isCommentEdit = false;
    } catch (error) {
      Modal.error({
        content: error,
      });
    }
  };

  return (
    <CommentWriteUI
      isActive={isActive}
      onChangeCommentContents={onChangeCommentContents}
      onChangeCommentWriter={onChangeCommentWriter}
      onChangeCommentPassword={onChangeCommentPassword}
      onClickCommentCreate={onClickCommentCreate}
      onChangeCommentRating={onChangeCommentRating}
      // 댓글작성 후, 작성내용을 지워주기 위하여, 아래의 props값을 value로 사용한다.
      commentContents={commentContents}
      commentPassword={commentPassword}
      commentWriter={commentWriter}
      handleChange={handleChange}
      rating={rating}
      // 수정
      isCommentEdit={props.isCommentEdit}
      editCommentId={props.editCommentId}
      onClickCommentUpdate={onClickCommentUpdate}
    />
  );
}
