import BoardDetailUI from "./BoardDetail.presenter";
import { useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import {
  FETCH_BOARD,
  DELETE_BOARD,
  LIKE_BOARD,
  DISLIKE_BOARD,
} from "./BoardDetail.queries";
import { Modal } from "antd";

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
      Modal.success({
        content: "(글 삭제 성공! : 저를 지우지 말아주세요...)",
      });
      router.push("/boards");
    } catch (error) {
      Modal.error({
        content: error,
      });
    }
  };

  // 팝오버
  const popover = (
    <div>
      <p>{data?.fetchBoard.boardAddress.zipcode}</p>
      <p>{data?.fetchBoard.boardAddress.address}</p>
      <p>{data?.fetchBoard.boardAddress.addressDetail}</p>
    </div>
  );

  // 좋아요 클릭
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
    Modal.success({
      content: "(좋아요! : 완전 좋다...)",
    });
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
    Modal.success({
      content: "(실어요! : 완전 싫다...)",
    });
  };

  return (
    <BoardDetailUI
      data={data}
      onClickMoveBoardList={onClickMoveBoardList}
      onClickMoveBoardEdit={onClickMoveBoardEdit}
      onClickMoveBoardDelete={onClickMoveBoardDelete}
      onClickLike={onClickLike}
      onClickDislike={onClickDislike}
      popover={popover}
    />
  );
}
