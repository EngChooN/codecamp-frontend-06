import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      createdAt
    }
  }
`;

const Warapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 100px;
  width: 1200px;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
`;

const BoardsRow = styled.div`
  display: flex;
  flex-direction: row;
  border-top: 1px solid #bdbdbd;

  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  /* Gray 2 */
  color: #4f4f4f;
`;

const BoardsColumn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 25%;

  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  /* Gray 2 */
  color: #4f4f4f;
`;

const BoardsRow_P = styled.div`
  display: flex;
  flex-direction: row;
  border-top: 1px solid #bdbdbd;

  font-weight: 500;
  font-size: 18px;
  line-height: 27px;

  /* Black */
  color: #000000;
`;

const BoardsColumn_P = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 25%;

  font-weight: 500;
  font-size: 18px;
  line-height: 27px;

  /* Black */
  color: #000000;
`;

const BoardWriteBtn = styled.button`
  width: 100px;
  height: 40px;
  border: none;
  right: 120px;
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: black;
  color: white;
  cursor: pointer;
`;

//인터페이스--------------------------------------------------------------------------
import { MouseEvent } from "react";
interface IBoardList {
  onClickMoveBoardDetail: (event: MouseEvent<HTMLDivElement>) => void;
}
// -----------------------------------------------------------------------------------

export default function BoardListPage() {
  const { data } = useQuery(FETCH_BOARDS);
  const router = useRouter();

  const onClickMoveBoardDetail = (event: MouseEvent<HTMLDivElement>) => {
    router.push("/boards/" + event.target.id);
  };

  const onClickMoveBoardWrite = () => {
    router.push("/boards/new");
  };

  return (
    <Warapper>
      <BoardWriteBtn onClick={onClickMoveBoardWrite}>게시글 등록</BoardWriteBtn>
      <BoardsRow_P>
        <BoardsColumn_P>번호</BoardsColumn_P>
        <BoardsColumn_P>제목</BoardsColumn_P>
        <BoardsColumn_P>작성자</BoardsColumn_P>
        <BoardsColumn_P>날짜</BoardsColumn_P>
      </BoardsRow_P>
      {data?.fetchBoards.map((el, index) => {
        const aaa = new Date(el.createdAt);
        const year = aaa.getFullYear();
        const month = String(aaa.getMonth() + 1).padStart(2, "0");
        const date = aaa.getDate();
        const result = `${year} - ${month} - ${date}`;

        return (
          <BoardsRow>
            <BoardsColumn>{index + 1}</BoardsColumn>
            <BoardsColumn id={el._id} onClick={onClickMoveBoardDetail}>
              {el.title}
            </BoardsColumn>
            <BoardsColumn>{el.writer}</BoardsColumn>
            <BoardsColumn>{result}</BoardsColumn>
          </BoardsRow>
        );
      })}
    </Warapper>
  );
}
