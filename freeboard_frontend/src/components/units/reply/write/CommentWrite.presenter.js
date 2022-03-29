import {
  Waraper,
  CommentWriteHeader,
  CommentWriteHeaderIcon,
  CommentWriteHeaderTitle,
  CommentWriteRating,
  CommentWriteInfo,
  CommentWriteContents,
  CommentWriteWriter,
  CommentWriteWriterWriter,
  CommentWriteWriterBtn,
  CommentWritePassword,
} from "./CommentWrite.styles";
import { Rate } from "antd";

export default function CommentWriteUI(props) {
  return (
    <Waraper>
      <CommentWriteHeader>
        <CommentWriteHeaderIcon src="/images/Vector.png" />
        <CommentWriteHeaderTitle>댓글</CommentWriteHeaderTitle>
      </CommentWriteHeader>
      <CommentWritePassword
        placeholder="댓글 비밀번호"
        onChange={props.onChangeCommentPassword}
        type="password"
        value={props.commentPassword}
      ></CommentWritePassword>
      <CommentWriteRating
      // value={1}
      // hidden
      // onChange={props.onChangeCommentRating}
      >
        <Rate onChange={props.handleChange} value={props.rating} />
      </CommentWriteRating>
      <CommentWriteInfo>
        <CommentWriteContents
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후에 삭제될 수 있으며, 이에 대한 안전사상 책임은 게시자에게 있습니다."
          onChange={props.onChangeCommentContents}
          type="text"
          value={props.commentContents}
          maxLength={100}
        ></CommentWriteContents>
        <CommentWriteWriter>
          <CommentWriteWriterWriter
            placeholder="작성자 이름"
            onChange={props.onChangeCommentWriter}
            type="text"
            value={props.commentWriter}
          ></CommentWriteWriterWriter>
          <CommentWriteWriterBtn
            onClick={props.onClickCommentCreate}
            isActive={props.isActive}
            disabled={props.isActive ? false : true}
          >
            등록하기
          </CommentWriteWriterBtn>
        </CommentWriteWriter>
      </CommentWriteInfo>
      {/* 작성중인 내용 글자 수 실시간 확인 */}
      <div>{props.commentContents.length}/100</div>
    </Waraper>
  );
}
