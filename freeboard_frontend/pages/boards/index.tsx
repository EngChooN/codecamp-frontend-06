import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int, $search: String) {
    fetchBoards(page: $page, search: $search) {
      _id
      writer
      title
      createdAt
    }
  }
`;

const FETCH_BOARDS_COUNT = gql`
  query fetchBoardsCount {
    fetchBoardsCount
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
  padding-bottom: 15px;
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
import { MouseEvent, useState } from "react";
import Pagination from "../../src/components/commons/pagination/01/pagination";
interface IBoardList {
  onClickMoveBoardDetail: (event: MouseEvent<HTMLDivElement>) => void;
}
// -----------------------------------------------------------------------------------

export default function BoardListPage() {
  // 페이지네이션
  const { data: dataBoardsCount } = useQuery(FETCH_BOARDS_COUNT);
  const lastPage = Math.ceil(dataBoardsCount?.fetchBoardsCount / 10);
  // 게시글번호
  const [selectPageNumber, setSelectPageNumber] = useState(0);
  const onClickPageId = (a) => {
    console.log(a);
    setSelectPageNumber(Number(a));
  };
  // 검색
  const [search, setSearch] = useState("");

  const { data, refetch } = useQuery(FETCH_BOARDS);
  const router = useRouter();

  const onClickMoveBoardDetail = (event: MouseEvent<HTMLDivElement>) => {
    router.push("/boards/" + event.target.id);
  };

  const onClickMoveBoardWrite = () => {
    router.push("/boards/new");
  };

  // 검색기능
  const onChangeSearch = (event) => {
    setSearch(event.target.value);
  };

  const onClickSearch = () => {
    refetch({
      search: search,
    });
  };

  return (
    <Warapper>
      <input type="text" placeholder="검색어 입력" onChange={onChangeSearch} />
      <button onClick={onClickSearch}>게시물 검색</button>
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
        const date = String(aaa.getDate()).padStart(2, "0");
        const result = `${year} - ${month} - ${date}`;

        return (
          <BoardsRow key={el._id}>
            <BoardsColumn>
              {dataBoardsCount?.fetchBoardsCount -
                index * Number(selectPageNumber) -
                index}
            </BoardsColumn>
            <BoardsColumn id={el._id} onClick={onClickMoveBoardDetail}>
              {el.title}
            </BoardsColumn>
            <BoardsColumn>{el.writer}</BoardsColumn>
            <BoardsColumn>{result}</BoardsColumn>
          </BoardsRow>
        );
      })}
      <Pagination
        data={data}
        refetch={refetch}
        dataBoardsCount={dataBoardsCount}
        lastPage={lastPage}
        onClickPageId={onClickPageId}
      />
    </Warapper>
  );
}
