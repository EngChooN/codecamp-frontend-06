import { gql, useMutation, useQuery } from "@apollo/client";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      likeCount
    }
  }
`;

const LIKE_BOARD = gql`
  mutation likeBoard($boardId: ID!) {
    likeBoard(boardId: $boardId)
  }
`;

export default function OptimisticUIPage() {
  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: "6269ece8a8255b002988d634",
    },
  });

  const [likeBoard] = useMutation(LIKE_BOARD);

  const onClickOptimisticUI = () => {
    likeBoard({
      variables: {
        boardId: "6269ece8a8255b002988d634",
      },

      //   refetchQueries: [
      //     {
      //       query: FETCH_BOARD,
      //       variables: {
      //         boardId: "6269ece8a8255b002988d634",
      //       },
      //     },
      //   ],

      optimisticResponse: {
        like: (data?.fetchBoard.likeCount || 0) + 1,
      },
      update(cache, { data }) {
        cache.writeQuery({
          query: FETCH_BOARD,
          variables: { boardId: "6269ece8a8255b002988d634" },
          data: {
            fetchBoard: {
              // 아래 두개(_id, __typename)는 공식마냥 필수임
              _id: "6269ece8a8255b002988d634",
              __typename: "board",
              likeCount: data.likeBoard,
            },
          },
        });
      },
    });
  };

  return (
    <div>
      <h1>옵티미스틱UI</h1>
      <div>현재좋아요카운트: {data?.fetchBoard.likeCount}</div>
      <button onClick={onClickOptimisticUI}>좋아요올리기</button>ui
    </div>
  );
}
