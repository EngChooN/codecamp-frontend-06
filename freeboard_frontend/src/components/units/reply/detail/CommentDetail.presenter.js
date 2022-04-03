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
// import CommentEdit from "../edit/CommentEdit.container";
import CommentWrite from "../write/CommentWrite.container";
import InfiniteScroll from "react-infinite-scroller";

export default function CommentDetailUI(props) {
  const getDate = (aa) => {
    const aaa = new Date(aa);
    const year = aaa.getFullYear();
    const month = String(aaa.getMonth() + 1).padStart(2, "0");
    const date = String(aaa.getDate()).padStart(2, "0");
    return `${year} - ${month} - ${date}`;
  };

  return (
    <div>
      <InfiniteScroll pageStart={0} loadMore={props.loadFunc} hasMore={true}>
        {/* {!props.isCommentEdit && (
        
      )} */}
        {props.data?.fetchBoardComments.map((el) => {
          return (
            <>
              <CommentWaraper key={el._id}>
                <CommentProfile src="/images/Profile.png" />
                <CommentInfo>
                  <CommentInfoHeader>
                    <CommentInfoHeaderWriterUser>
                      <CommentInfoHeaderWriter>
                        {el.writer}
                      </CommentInfoHeaderWriter>
                      <CommentInfoHeaderRating>
                        <Rate disabled value={el.rating} />
                      </CommentInfoHeaderRating>
                    </CommentInfoHeaderWriterUser>
                    <CommentInfoHeaderBtn>
                      <CommentInfoHeaderEdit
                        src="/images/Edit.png"
                        // onClick={props.onClickEditComment}
                        onClick={() =>
                          props.onClickEditComment(
                            el._id,
                            el.writer,
                            el.contents,
                            el.rating
                          )
                        }
                        id={el._id}
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
                  <CommentCreatedAt>{getDate(el.createdAt)}</CommentCreatedAt>
                </CommentInfo>
              </CommentWaraper>
            </>
          );
        })}
      </InfiniteScroll>
      {/* 댓글 수정창 */}
      {props.isCommentEdit && (
        <CommentWrite
          editCommentId={props.editCommentId}
          isCommentEdit={props.isCommentEdit}
          setIsCommentEdit={props.setIsCommentEdit}
          editCommentWriter={props.editCommentWriter}
          editCommentContents={props.editCommentContents}
          editCommentRating={props.editCommentRating}
        />
      )}
    </div>
  );
}
