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
} from "./CommnetDetail.styles";

export default function CommentDetailUI(props) {
  return (
    <div>
      {props.data?.fetchBoardComments.map((el) => {
        return (
          <CommentWaraper>
            <CommentProfile></CommentProfile>
            <CommentInfo>
              <CommentInfoHeader>
                <CommentInfoHeaderWriterUser>
                  <CommentInfoHeaderWriter>{el.writer}</CommentInfoHeaderWriter>
                  <CommentInfoHeaderRating>★★★★★</CommentInfoHeaderRating>
                </CommentInfoHeaderWriterUser>
                <CommentInfoHeaderBtn>
                  <CommentInfoHeaderEdit>🔧</CommentInfoHeaderEdit>
                  <CommentInfoHeaderDelete>❌</CommentInfoHeaderDelete>
                </CommentInfoHeaderBtn>
              </CommentInfoHeader>
              <CommentInfoContents>{el.contents}</CommentInfoContents>
            </CommentInfo>
          </CommentWaraper>
        );
      })}
    </div>
  );
}
