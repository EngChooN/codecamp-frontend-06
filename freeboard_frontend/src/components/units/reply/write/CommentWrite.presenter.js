export default function CommentWriteUI(props) {
  return (
    <div>
      <input
        placeholder="댓글작성자"
        onChange={props.onChangeCommentWriter}
        type="text"
      />
      <input
        placeholder="비밀번호"
        onChange={props.onChangeCommentPassword}
        type="password"
      />
      <input
        placeholder="댓글내용"
        onChange={props.onChangeCommentContents}
        type="text"
      />
      <input placeholder="레이팅" onChange={props.onChangeCommentRating} />
      <button onClick={props.onClickCommentCreate}>등록하기</button>
    </div>
  );
}
