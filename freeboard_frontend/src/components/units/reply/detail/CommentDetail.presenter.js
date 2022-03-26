import {
  CommentWaraper,
  CommentProfile,
  CommentInfo,
  CommentInfoHeader,
  CommentInfoHeaderWriter,
  CommentInfoHeaderRating,
  CommentInfoContents,
  CommentInfoHeaderEdit,
  CommentInfoHeaderDelete,
  CommentInfoHeaderBtn,
  CommentInfoHeaderWriterUser,
  CommentCreatedAt,
} from "./CommnetDetail.styles";

export default function CommentDetailUI(props) {
  return (
    <div>
      {props.data?.fetchBoardComments.map((el) => {
        return (
          <CommentWaraper>
            <CommentProfile src="/images/Profile.png" />
            <CommentInfo>
              <CommentInfoHeader>
                <CommentInfoHeaderWriterUser>
                  <CommentInfoHeaderWriter>{el.writer}</CommentInfoHeaderWriter>
                  <CommentInfoHeaderRating></CommentInfoHeaderRating>
                </CommentInfoHeaderWriterUser>
                <CommentInfoHeaderBtn>
                  <CommentInfoHeaderEdit src="/images/Edit.png" />
                  <CommentInfoHeaderDelete src="/images/Delete.png" />
                </CommentInfoHeaderBtn>
              </CommentInfoHeader>
              <CommentInfoContents>{el.contents}</CommentInfoContents>
              <CommentCreatedAt>{el.createdAt}</CommentCreatedAt>
            </CommentInfo>
          </CommentWaraper>
        );
      })}
    </div>
  );
}
