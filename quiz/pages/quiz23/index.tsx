import { gql, useMutation, useQuery } from "@apollo/client";
import { useForm } from "react-hook-form";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      contents
    }
  }
`;

const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId)
  }
`;

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function Quiz23() {
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [createBoard] = useMutation(CREATE_BOARD);
  const { data } = useQuery(FETCH_BOARDS);
  const { register, handleSubmit } = useForm();

  const onClickDelete = (boardId: string) => async () => {
    // 삭제하기로직
    await deleteBoard({
      variables: { boardId },
      update(cache, { data }) {
        const deletedId = data.deleteBoard;
        cache.modify({
          fields: {
            fetchBoards: (prev, { readField }) => {
              const filteredPrev = prev.filter(
                (el) => readField("_id", el) !== deletedId
              ); // el._id가 안되므로, readField에서 꺼내오기
              return [...filteredPrev];
            },
          },
        });
      },
    });
  };

  const onClickSubmit = async (data) => {
    console.log(data);
    console.log(data.writer);
    // 등록하기로직
    await createBoard({
      variables: {
        createBoardInput: {
          writer: data.writer,
          password: data.password,
          title: data.title,
          contents: data.contents,
        },
      },
      update(cache, { data }) {
        data.createBoard;
        cache.modify({
          fields: {
            fetchBoards: (prev) => {
              return [data.createBoard, ...prev];
            },
          },
        });
      },
    });
  };

  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <div>작성자: '{el.writer}'</div>
          <div>제목: '{el.title}'</div>
          <div>내용: '{el.contents}'</div>
          <button onClick={onClickDelete(el._id)}>X</button>
          <hr></hr>
        </div>
      ))}
      <form onSubmit={handleSubmit(onClickSubmit)}>
        <input type="text" placeholder="제목" {...register("title")} />
        <input type="text" placeholder="내용" {...register("contents")} />
        <input type="text" placeholder="작성자" {...register("writer")} />
        <input
          type="password"
          placeholder="비밀번호"
          {...register("password")}
        />
        <button>등록하기</button>
      </form>
    </div>
  );
}
