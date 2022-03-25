import styled from "@emotion/styled";

export const CommentWaraper = styled.div`
  display: flex;
  align-items: center;
  width: 1200px;
  border-bottom: 1px solid black;
  margin-bottom: 20px;
  padding: 10px;
`;
export const CommentProfile = styled.div`
  width: 40px;
  height: 40px;
  background-color: #bdbdbd;
  border-radius: 25px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CommentInfo = styled.div`
  width: 100%;
`;

export const CommentInfoHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const CommentInfoHeaderWriter = styled.div``;

export const CommentInfoHeaderRating = styled.div``;

export const CommentInfoHeaderEdit = styled.button``;

export const CommentInfoHeaderDelete = styled.button``;

export const CommentInfoContents = styled.div``;

export const CommentInfoHeaderBtn = styled.div``;

export const CommentInfoHeaderWriterUser = styled.div`
  display: flex;
  flex-direction: row;
`;
