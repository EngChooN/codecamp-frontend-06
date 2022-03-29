import CommentDetailUI from "./CommentDetail.presenter";
import { useMutation, useQuery } from "@apollo/client";
import { DELETE_COMMENTS, FETCH_COMMENTS } from "./CommentDetail.queries";
import { useRouter } from "next/router";

export default function CommentDetail(props) {
  const [deleteBoardComment] = useMutation(DELETE_COMMENTS);
  const router = useRouter();
  const { data } = useQuery(FETCH_COMMENTS, {
    variables: {
      boardId: router.query.boardId,
    },
  });

  const onClickDeleteComment = async (event) => {
    const password = prompt("비밀번호입력");
    try {
      await deleteBoardComment({
        variables: {
          password: password,
          boardCommentId: event.target.id,
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
      alert("댓글이 삭제되었습니다!");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <CommentDetailUI data={data} onClickDeleteComment={onClickDeleteComment} />
  );
}
