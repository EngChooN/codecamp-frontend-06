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
import { Rate } from "antd";
import { Modal, Button } from "antd";

export default function CommentDetailUI(props) {
  return (
    <div>
      {props.data?.fetchBoardComments.map((el) => {
        const aaa = new Date(el.createdAt);
        const year = aaa.getFullYear();
        const month = String(aaa.getMonth() + 1).padStart(2, "0");
        const date = aaa.getDate();
        const result = `${year} - ${month} - ${date}`;

        const onClickCommentWriter = (event) => {
          // alert(el.writer + "님이 작성하신 댓글입니다.");
          alert(event.currentTarget.id + "님이 작성한 댓글 입니다.");
        };
        return (
          <CommentWaraper
            key={el._id}
            // onClick={onClickCommentWriter}
            // id={el.writer}
          >
            <CommentProfile src="/images/Profile.png" />
            <CommentInfo>
              <CommentInfoHeader>
                <CommentInfoHeaderWriterUser>
                  <CommentInfoHeaderWriter>{el.writer}</CommentInfoHeaderWriter>
                  <CommentInfoHeaderRating>
                    <Rate disabled value={el.rating} />
                  </CommentInfoHeaderRating>
                </CommentInfoHeaderWriterUser>
                <CommentInfoHeaderBtn>
                  <CommentInfoHeaderEdit
                    src="/images/Edit.png"
                    onClick={props.onClickEditComment}
                  />
                  <CommentInfoHeaderDelete
                    onClick={props.showModal}
                    src="/images/Delete.png"
                    // id={el._id}
                  />
                  {/* 비밀번호 모달창 */}
                  {props.isModalVisible && (
                    <Modal
                      title="비밀번호를 입력해 주세요"
                      visible={props.isModalVisible}
                      onOk={props.handleOk}
                      onCancel={props.handleCancel}
                    >
                      <input
                        type="password"
                        onChange={props.onChangePassword}
                        id={el._id}
                      />
                    </Modal>
                  )}
                  {/* ----------------------------- */}
                </CommentInfoHeaderBtn>
              </CommentInfoHeader>
              <CommentInfoContents>{el.contents}</CommentInfoContents>
              <CommentCreatedAt>{result}</CommentCreatedAt>
            </CommentInfo>
          </CommentWaraper>
        );
      })}
    </div>
  );
}
