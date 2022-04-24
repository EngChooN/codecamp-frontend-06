import styled from "@emotion/styled";

export const WrapperPr = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 900px;
  margin-top: 40px;
`;

export const ProductList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  background-color: white;
  margin-top: 50px;
  height: 90px;
  padding: 15px;
  // 판매완료 날짜가 있으면 배경색을 빨갛게 하기
  background-color: ${(props) => (props.soldAt !== null ? "red" : "none")};
  :hover {
    background-color: rgba(0, 0, 0, 0.05);
    cursor: pointer;
  }
`;

export const Img = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 20px;
  border-radius: 10px;
`;

export const Name = styled.div`
  font-weight: 800;
  font-size: 20px;
  margin-right: 30px;
`;

export const Price = styled.div`
  font-weight: 200;
  font-size: 20px;
`;

export const Seller = styled.div`
  color: gray;
  margin-right: 20px;
`;

export const BasketBtn = styled.button`
  border: none;
  background-color: rgb(154, 244, 119);
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  height: 30px;
  width: 130px;
  cursor: pointer;
  :hover {
    background-color: blue;
    color: white;
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const Btn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProductNewBtn = styled.button`
  width: 100px;
  background-color: rgb(254, 216, 9);
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.05);
  border-radius: 15px;
  border: none;
  cursor: pointer;
  height: 30px;
  margin-right: 10px;
  :hover {
    background-color: black;
    color: white;
  }
`;

export const ProductListHeader = styled.div`
  position: fixed;
  background-color: white;
  width: 100%;
  height: 70px;
  top: 615px;
  display: flex;
  align-items: center;
`;
