import styled from "@emotion/styled";

export const WrapperPr = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 1000px;
  margin-top: 20px;
`;

export const ProductList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  background-color: white;
  margin-top: 40px;
  height: 70px;
  padding: 10px;
  // 판매완료 날짜가 있으면 배경색을 빨갛게 하기
  {props.data?.fetchUseditems.soldAt}
`;
