import { useQuery, gql } from "@apollo/client";
import Board from "../../src/components/quiz14/Board";
import Pagenation from "../../src/components/quiz14/Pagenation";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;

const FETCH_BOARDS_COUNT = gql`
  query fetchBoardsCount {
    fetchBoardsCount
  }
`;

export default function MapBoardPage() {
  const { data, refetch } = useQuery(FETCH_BOARDS);

  const { data: dataBoardsCount } = useQuery(FETCH_BOARDS_COUNT);
  const lastPage = Math.ceil(dataBoardsCount?.fetchBoardsCount / 10);

  return (
    <div>
      <Board data={data} />
      <Pagenation refetch={refetch} lastPage={lastPage} />
    </div>
  );
}
