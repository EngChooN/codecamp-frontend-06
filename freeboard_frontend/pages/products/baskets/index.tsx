import styled from "@emotion/styled";
import { useEffect, useState } from "react";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
`;

const Baskets = styled.div`
  width: 700px;
  display: flex;
  margin-bottom: 20px;
  border-bottom: 1px solid gray;
  padding-bottom: 20px;
  justify-content: space-around;
`;

const Name = styled.div``;

const Price = styled.div``;

const Seller = styled.div``;

const Button = styled.button``;

export default function BasketsPage() {
  const [baskets, setBaskets] = useState([]);
  useEffect(() => {
    setBaskets(JSON.parse(localStorage.getItem("baskets") || "[]"));
    console.log(baskets);
  }, [baskets]);

  // 장바구니 삭제
  const onClickBasketsDelete = () => {};

  return (
    <Wrapper>
      <Title>장바구니페이지</Title>
      {baskets.map((el, index) => (
        <Baskets key={index}>
          <Name>{el.name}</Name>
          <Price>{el.price}</Price>
          <Seller>{el.seller.name}</Seller>
          <Button onClick={onClickBasketsDelete}>장바구니 삭제</Button>
        </Baskets>
      ))}
    </Wrapper>
  );
}
