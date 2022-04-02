import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import { useState } from "react";
import BoardCommentItem from "../../src/components/units/board/15-board-commnet";

const PETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      contents
    }
  }
`;

// const MyRow = styled.div`
//   display: flex;
//   flex-direction: row;
// `;

// const MyColumn = styled.div`
//   width: 25%;
// `;

export default function StaticRoutedPage() {
  //   const [myIndex, setMyIndex] = useState([
  //     false,
  //     false,
  //     false,
  //     false,
  //     false,
  //     false,
  //     false,
  //     false,
  //     false,
  //     false,
  //   ]);
  const { data } = useQuery(PETCH_BOARDS);

  // const onClickEdit = (event) => {
  //   const aaa = myIndex;
  //   aaa[event.target.id] = true;
  //   setMyIndex([...aaa]);
  // };
  // console.log(data);

  return (
    <div>
      {data?.fetchBoards.map((el, index) => {
        <BoardCommentItem key={el.id} />;
      })}
    </div>
  );
}
