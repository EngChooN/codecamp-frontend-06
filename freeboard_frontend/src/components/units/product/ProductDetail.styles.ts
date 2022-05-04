import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProductDetail = styled.div`
  width: 900px;
  display: flex;
  flex-direction: column;
  background-color: white;
  margin-top: 100px;
  border-radius: 15px;
  padding: 60px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
`;

export const Seller = styled.div`
  font-weight: 500;
  font-size: 24px;
`;

export const Name = styled.div`
  font-weight: 700;
  font-size: 36px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const Contents = styled.div`
  font-weight: 400;
  font-size: 16px;
`;

export const Price = styled.div`
  margin-right: 20px;
  font-size: 30px;
  font-weight: 200;
`;

export const Remarks = styled.div`
  font-weight: 700;
`;

export const CreatedAt = styled.div``;

export const BtnWrapper = styled.div``;

export const Btn = styled.div`
  display: flex;
  justify-content: center;
`;

export const Edit = styled.button`
  border: none;
  font-size: 16px;
  width: 80px;
  height: 40px;
  border-radius: 20px;
  margin-right: 20px;
  cursor: pointer;
  :hover {
    background-color: black;
    color: white;
  }
`;

export const Delete = styled.button`
  border: none;
  font-size: 16px;
  width: 80px;
  height: 40px;
  border-radius: 20px;
  cursor: pointer;
  :hover {
    background-color: black;
    color: white;
  }
`;

export const Img = styled.img`
  margin-bottom: 20px;
`;

export const Row1 = styled.div`
  border-bottom: 1px solid #bdbdbd;
  padding-bottom: 20px;
`;

export const Row2 = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;
`;

export const PayBtn = styled.button``;

export const CommentTitle = styled.div``;

export const Comment = styled.div``;

export const C_Main = styled.div``;

export const C_Profile = styled.div``;

export const C_Name = styled.div``;

export const C_Btns = styled.div``;

export const C_Edit = styled.button``;

export const C_Delete = styled.button``;

export const C_Contents = styled.div``;
