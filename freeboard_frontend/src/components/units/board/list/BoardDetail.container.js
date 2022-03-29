import BoardDetailUI from "./BoardDetail.presenter";
import { useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import {
  FETCH_BOARD,
  DELETE_BOARD,
  LIKE_BOARD,
  DISLIKE_BOARD,
} from "./BoardDetail.queries";

export default function BoardDetail() {
  const router = useRouter();
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [likeBoard] = useMutation(LIKE_BOARD);
  const [dislikeBoard] = useMutation(DISLIKE_BOARD);
  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.boardId,
    },
  });

  const onClickMoveBoardList = () => {
    router.push("/boards");
  };

  const onClickMoveBoardEdit = () => {
    router.push("/boards/" + router.query.boardId + "/edit");
  };

  const onClickMoveBoardDelete = async () => {
    try {
      const result = await deleteBoard({
        variables: {
          boardId: router.query.boardId,
        },
      });
      alert("삭제성공!");
      router.push("/boards");
    } catch (error) {
      alert(error);
    }
  };

  //좋아요 클릭
  const onClickLike = () => {
    likeBoard({
      variables: {
        boardId: router.query.boardId,
      },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: { boardId: router.query.boardId },
        },
      ],
    });
    alert("좋아요 꾸욱!");
  };

  const onClickDislike = () => {
    dislikeBoard({
      variables: {
        boardId: router.query.boardId,
      },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: { boardId: router.query.boardId },
        },
      ],
    });
    alert("완전 싫다...");
  };

  return (
    <BoardDetailUI
      data={data}
      onClickMoveBoardList={onClickMoveBoardList}
      onClickMoveBoardEdit={onClickMoveBoardEdit}
      onClickMoveBoardDelete={onClickMoveBoardDelete}
      onClickLike={onClickLike}
      onClickDislike={onClickDislike}
    />
  );
}
