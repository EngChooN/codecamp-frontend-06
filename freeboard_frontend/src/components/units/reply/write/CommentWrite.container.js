import CommentWriteUI from "./CommentWrite.presenter";
import { useMutation } from "@apollo/client";
import { CREATE_BOARD_COMMENT } from "./CommentWrite.queries";
import { useState } from "react";
import { useRouter } from "next/router";
import { FETCH_COMMENTS } from "../detail/CommnetDetail.queries";

export default function CommentWrite(props) {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);
  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);
  const [commentWriter, setCommentWriter] = useState("");
  const [commentContents, setCommentContents] = useState("");
  const [commentPassword, setCommentPassword] = useState("");
  const [commentRating, setCommentRating] = useState("");

  const onChangeCommentWriter = (event) => {
    console.log(event.target.value);
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
      await createBoardComment({
        variables: {
          createBoardCommentInput: {
            writer: commentWriter,
            password: commentPassword,
            contents: commentContents,
            rating: Number(commentRating),
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
      alert("댓글등록에 성공하였습니다!");
    } catch (error) {
      alert(error.message);
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
    />
  );
}
