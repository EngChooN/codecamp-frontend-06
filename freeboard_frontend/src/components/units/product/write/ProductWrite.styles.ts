import styled from "@emotion/styled";
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 550px;
`;

export const NewOrEdit = styled.form``;

export const Name = styled.input`
  margin-bottom: 30px;
  border: none;
  height: 40px;
  width: 200px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  font-size: 16px;
  padding: 10px;
`;

export const Price = styled.input`
  margin-top: 30px;
  margin-right: 20px;
  border: none;
  height: 40px;
  width: 200px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  font-size: 16px;
  padding: 10px;
`;

export const Remarks = styled.input`
  margin-right: 30px;
  border: none;
  height: 40px;
  width: 200px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  font-size: 16px;
  padding: 10px;
`;

export const Edit = styled.button`
  border: none;
  height: 40px;
  width: 100px;
  :hover {
    background-color: black;
    color: white;
  }
  cursor: pointer;
`;

export const New = styled.button`
  border: none;
  height: 40px;
  width: 100px;
  :hover {
    background-color: black;
    color: white;
  }
  cursor: pointer;
`;

export const Img = styled.div`
  margin-top: 100px;
  background-color: gray;
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  cursor: pointer;
  border-radius: 10px;
`;
