import CommentDetailUI from "./CommentDetail.presenter";
import { useMutation, useQuery } from "@apollo/client";
import {
  DELETE_COMMENTS,
  FETCH_COMMENTS,
  UPDATE_COMMENT,
} from "./CommentDetail.queries";
import { useRouter } from "next/router";
import { useState } from "react";

export default function CommentDetail(props) {
  const isCommentEdit = false;
  const [updateBoardComment] = useMutation(UPDATE_COMMENT);

  const isEdit = false;
  const [deleteBoardComment] = useMutation(DELETE_COMMENTS);
  const router = useRouter();
  const { data } = useQuery(FETCH_COMMENTS, {
    variables: {
      boardId: router.query.boardId,
    },
  });

  // 비밀번호모달
  const [password, setPassword] = useState("");
  const [boardCommentId, setBoardCommentId] = useState("");
  // let password = ""
  // let boardCommentId =""

  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    onClickDeleteComment();
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
    setBoardCommentId(event.target.id);
    // password = event.target.value;
    // boardCommentId = event.target.id;
    console.log("패스워드온체인지값", password, boardCommentId);
  };
  const onClickDeleteComment = async () => {
    // const password = prompt("비밀번호입력");
    console.log("딜리트함수실행", password, boardCommentId);
    try {
      await deleteBoardComment({
        variables: {
          password: password,
          boardCommentId: boardCommentId,
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
      Modal.success({
        content: "(댓글삭제 성공!)",
      });
    } catch (error) {
      Modal.error({
        content: error,
      });
    }
  };

  const onClickEditComment = async () => {
    await updateBoardComment({
      variables: {
        updateBoardCommentInput: {
          contents: contents,
          rating: rating,
        },
        password: password,
        boardCommentId: boardCommentId,
      },
    });
    Modal.success({
      content: "(수정아직 없음 ㅜ..)",
    });
  };

  return (
    <CommentDetailUI
      data={data}
      onClickDeleteComment={onClickDeleteComment}
      onClickEditComment={onClickEditComment}
      isEdit={isEdit}
      //  비밀번호모달
      isModalVisible={isModalVisible}
      showModal={showModal}
      handleOk={handleOk}
      handleCancel={handleCancel}
      onChangePassword={onChangePassword}
      isCommentEdit={isCommentEdit}
    />
  );
}
