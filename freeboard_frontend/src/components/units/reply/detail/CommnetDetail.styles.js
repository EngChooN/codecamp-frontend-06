import styled from "@emotion/styled";

export const CommentWaraper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 1200px;
  border-bottom: 1px solid #bdbdbd;
  margin-bottom: 20px;
  padding: 10px;
  margin: auto;
  margin-top: 20px;
`;
export const CommentProfile = styled.img`
  margin-right: 15px;
  position: relative;
  bottom: 27px;
`;

export const CommentInfo = styled.div`
  width: 100%;
`;

export const CommentInfoHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const CommentInfoHeaderWriter = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
`;

export const CommentInfoHeaderRating = styled.div``;

export const CommentInfoHeaderEdit = styled.img`
  margin-right: 15px;
`;

export const CommentInfoHeaderDelete = styled.img``;

export const CommentInfoContents = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #4f4f4f;
`;

export const CommentInfoHeaderBtn = styled.div``;

export const CommentInfoHeaderWriterUser = styled.div`
  display: flex;
  flex-direction: row;
`;

export const CommentCreatedAt = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #bdbdbd;
  margin-top: 20px;
  margin-bottom: 20px;
`;
