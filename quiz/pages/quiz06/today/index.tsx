import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      contents
      createdAt
    }
  }
`;

const MyRow = styled.div`
  display: flex;
  padding-bottom: 20px;
  border: 1px solid blue;
  text-align: center;
  align-items: center;
`;

const MyColumn = styled.div`
  width: 25%;
`;

export default function BasketPage() {
  const [today, setToday] = useState([]);
  const { data } = useQuery(FETCH_BOARDS);
  const date = new Date().toISOString().slice(0, 10);

  const onClickBasket = (el) => () => {
    const baskets = JSON.parse(localStorage.getItem(date) || "[]");

    const temp = baskets.filter((basketEl) => basketEl._id === el._id);
    if (temp.length === 1) {
      alert("이미 찜한 게시글입니다!!~");
      return;
    }
    const { __typename, ...newEl } = el;
    baskets.push(newEl);
    localStorage.setItem(date, JSON.stringify(baskets));

    setToday(JSON.parse(localStorage.getItem(date) || "[]"));
  };

  //   const onClickBasketCancel = (el) => () => {
  //     // 기존 장바구니 가져오기
  //     const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");
  //     //console.log(baskets);
  //     // 클릭한 상품 삭제
  //     const newBaskets = baskets.filter((basketEl) => basketEl._id !== el._id);

  //     // 삭제한 게시글
  //     const deletedBaskets = baskets.filter(
  //       (basketEl) => basketEl._id === el._id
  //     );
  //     console.log(deletedBaskets);
  //     if (el._id === deletedBaskets[0]._id) {
  //       alert("찜목록이 해제되었습니다");
  //     } else if (deletedBaskets[0]._id === undefined) {
  //       alert("이미 찜목록이 해제된 게시글입니다.");
  //     }
  //     // console.log(deletedBaskets[0]._id);

  //     const baskets2 = newBaskets;
  //     //console.log(baskets2);

  //     // if (newBaskets.length === 1) {
  //     //   alert("이미 해제완료!!~");
  //     //   // alert("찜목록 해제되었습니다!!~");
  //     //   return;
  //     // }

  //     /* if (el._id === deletedBaskets[0]._id) {
  //       alert("이미해제했음");
  //     } */

  //     // typename제외한 나머지 가져오기
  //     const { __typename, ...newEl } = el;
  //     baskets.push(newEl);
  //     localStorage.setItem("baskets", JSON.stringify(newBaskets));
  //   };

  const dateFunc = (aa) => {
    const date = aa;
    const newDate = new Date(date);
    const year = newDate.getFullYear().toString();
    const month = String((newDate.getMonth() + 1).toString()).padStart(2, "0");
    const day = String(newDate.getDay().toString()).padStart(2, "0");

    return year + "-" + month + "-" + day;
  };

  useEffect(() => {
    setToday(JSON.parse(localStorage.getItem(date) || "[]"));
    // localStorage.setItem(date, JSON.stringify(baskets));
    // setToday(JSON.parse(localStorage.getItem(data) || "[]"));
  }, []);

  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <MyRow key={el._id}>
          <MyColumn>{el.writer}</MyColumn>
          <MyColumn>{el.title}</MyColumn>
          <MyColumn>{dateFunc(el.createdAt)}</MyColumn>
          <button onClick={onClickBasket(el)}>게시물담기</button>
          {/* <button onClick={onClickBasketCancel(el)}>담기취소</button> */}
        </MyRow>
      ))}
      {today.map((el, index) => (
        <div key={index}>
          <MyColumn>{el.writer}</MyColumn>
          <MyColumn>{el.title}</MyColumn>
        </div>
      ))}
    </div>
  );
}
