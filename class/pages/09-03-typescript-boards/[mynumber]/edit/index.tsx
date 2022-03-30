// 수정하기페이지
import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";
import BoardWrite from "../../../../src/components/units/board/09-board-write/BoardWrite.container";

const PETCH_BOARD = gql`
  query fetchBoard($number: Int) {
    fetchBoard(number: $number) {
      number
      writer
      title
      contents
    }
  }
`;

export default function BoardEditPage() {
  const router = useRouter();

  const { data } = useQuery(PETCH_BOARD, {
    variables: { number: Number(router.query.mynumber) },
  });

  return <BoardWrite isEdit={true} data={data} />;
}
