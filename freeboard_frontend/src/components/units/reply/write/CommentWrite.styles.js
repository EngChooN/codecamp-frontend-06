import styled from "@emotion/styled";

export const Waraper = styled.div`
  width: 1200px;
  margin: auto;
  margin-bottom: 40px;
`;

export const CommentWriteHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 50px;
`;

export const CommentWriteHeaderIcon = styled.img`
  margin-right: 20px;
`;

export const CommentWriteHeaderTitle = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
`;

export const CommentWriteRating = styled.input``;

export const CommentWriteInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const CommentWriteContents = styled.input`
  height: 108px;
  border-top: 1px solid #bdbdbd;
  border-left: 1px solid #bdbdbd;
  border-right: 1px solid #bdbdbd;
`;

export const CommentWriteWriter = styled.div`
  display: flex;
  flex-direction: row;
  border-left: 1px solid #bdbdbd;
  border-right: 1px solid #bdbdbd;
  border-bottom: 1px solid #bdbdbd;
`;

export const CommentWriteWriterWriter = styled.input`
  width: 93%;
  height: 52px;
`;

export const CommentWriteWriterBtn = styled.button`
  width: 7%;
  background-color: black;
  color: white;
  border: none;
`;

export const CommentWritePassword = styled.input`
  height: 30px;
  border-top: 1px solid #bdbdbd;
  border-left: 1px solid #bdbdbd;
  border-right: 1px solid #bdbdbd;
  border-bottom: 1px solid #bdbdbd;
  margin-bottom: 15px;
`;
