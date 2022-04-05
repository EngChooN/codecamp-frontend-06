import CommentDetailUI from "./CommentDetail.presenter";
import { useMutation, useQuery } from "@apollo/client";
import { DELETE_COMMENTS, FETCH_COMMENTS } from "./CommentDetail.queries";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { Modal } from "antd";

export default function CommentDetail(props) {
  const [isCommentEdit, setIsCommentEdit] = useState(false); // 이 값이 true면 해당 폼이 인풋으로 바뀜
  const [editCommentId, setEditCommentId] = useState(""); // 수정할 댓글 아이디 값
  const [editCommentWriter, setEditCommentWriter] = useState("");
  const [editCommentContents, setEditCommentContents] = useState("");
  const [editCommentRating, setEditCommentRating] = useState("");
  // const [updateBoardComment] = useMutation(UPDATE_COMMENT);
  const inputRef = useRef(null);

  const isEdit = false;
  const [deleteBoardComment] = useMutation(DELETE_COMMENTS);
  const router = useRouter();
  const { data, fetchMore } = useQuery(FETCH_COMMENTS, {
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

  // 댓글수정
  const onClickEditComment = (id, writer, contents, rating) => {
    // console.log(event.target.id);
    // setEditCommentId(event.target.id);
    setIsCommentEdit(true);
    // onClickCommentEditFocus();
    console.log(id, writer, contents, rating);
    setEditCommentId(id);
    setEditCommentWriter(writer);
    setEditCommentContents(contents);
    setEditCommentRating(rating);
    if (isCommentEdit === true) {
      setIsCommentEdit(false);
    }
  };

  // 댓글 수정 시, 수정창 포커스
  const onClickCommentEditFocus = () => {
    inputRef.current?.focus();
  };

  // 무한스크롤
  const loadFunc = () => {
    if (!data) return;
    fetchMore({
      variables: { page: Math.ceil(data?.fetchBoardComments.length / 10) + 1 },
      // 왜 length를 10개 밖에 못가져오냐???
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchBoardComments)
          return { fetchBoardComments: [...prev.fetchBoardComments] };
        return {
          fetchBoardComments: [
            ...prev.fetchBoardComments,
            ...fetchMoreResult.fetchBoardComments,
          ],
        };
      },
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
      // 댓글수정
      isCommentEdit={isCommentEdit}
      editCommentId={editCommentId}
      setIsCommentEdit={setIsCommentEdit}
      //  댓글수정테스트2
      editCommentWriter={editCommentWriter}
      editCommentContents={editCommentContents}
      editCommentRating={editCommentRating}
      // 무한스크롤
      loadFunc={loadFunc}
      // 댓글 수정 시, 수정창 포커스
      onClickCommentEditFocus={onClickCommentEditFocus}
      inputRef={inputRef}
    />
  );
}
