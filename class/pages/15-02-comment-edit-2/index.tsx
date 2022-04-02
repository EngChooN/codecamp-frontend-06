import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import { useState } from "react";

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

const MyRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const MyColumn = styled.div`
  width: 25%;
`;

export default function StaticRoutedPage() {
  const [myIndex, setMyIndex] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const { data } = useQuery(PETCH_BOARDS);

  const onClickEdit = (event) => {
    const aaa = myIndex;
    aaa[event.target.id] = true;
    setMyIndex([...aaa]);
  };
  console.log(data);

  return (
    <div>
      {data?.fetchBoards.map((el, index) => {
        myIndex[index] === false ? (
          <MyRow key={el._id}>
            <MyColumn>
              <input type="checkbox" />
            </MyColumn>
            <MyColumn>{el._id}</MyColumn>
            <MyColumn>{el.writer}</MyColumn>
            <MyColumn>{el.title}</MyColumn>
            <button id={index} onClick={onClickEdit}>
              수정
            </button>
          </MyRow>
        ) : (
          <div>수정하기 화면입니다 </div>
        );
      })}
    </div>
  );
}
