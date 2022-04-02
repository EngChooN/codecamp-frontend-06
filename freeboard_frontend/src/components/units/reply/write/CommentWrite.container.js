import CommentWriteUI from "./CommentWrite.presenter";
import { useMutation } from "@apollo/client";
import { CREATE_BOARD_COMMENT } from "./CommentWrite.queries";
import { useState } from "react";
import { useRouter } from "next/router";
import { FETCH_COMMENTS } from "../detail/CommentDetail.queries";
import { Modal } from "antd";

export default function CommentWrite(props) {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);
  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);
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
    />
  );
}
