import {
  Waraper,
  Header,
  Writer_left,
  Writer_img,
  Writer_info,
  Writer_name,
  Writer_createdAt,
  Writer_right,
  Writer_icon,
  Contents_box,
  Contents_title,
  Contents_main,
  Contents_img,
  Contents_cnt,
  Ect,
  Ect_ect,
  Like_waraper,
  Like,
  Dislike,
  Like_icon,
  Like_span,
  Dislike_icon,
  Dislike_span,
  Footer,
  Footer_btn,
  Writer_icon2,
} from "./BoardDetail.styles";
import ReactPlayer from "react-player";
import { Popover } from "antd";

export default function BoardDetailUI(props) {
  const aaa = new Date(props.data?.fetchBoard.createdAt);
  const year = aaa.getFullYear();
  const month = String(aaa.getMonth() + 1).padStart(2, "0");
  const date = aaa.getDate();
  const result = `${year} - ${month} - ${date}`;
  return (
    <>
      <Waraper>
        <Header>
          <Writer_left>
            <Writer_img src="/images/Profile.png" />
            <Writer_info>
              <Writer_name>{props.data?.fetchBoard.writer}</Writer_name>
              <Writer_createdAt>Date: {result}</Writer_createdAt>
            </Writer_info>
          </Writer_left>
          <Writer_right>
            <Writer_icon src="/images/1.png" />
            <Popover content={props.popover} title="주소">
              <Writer_icon2 src="/images/2.png" />
              {/* {props.data?.fetchBoard.boardAddress.address}/
              {props.data?.fetchBoard.boardAddress.zipcode}/
              {props.data?.fetchBoard.boardAddress.addressDetail} */}
            </Popover>
          </Writer_right>
        </Header>
        <Contents_box>
          <Contents_title>
            {props.data?.fetchBoard.title} [포트폴리오용]
          </Contents_title>
          <Contents_main>
            <Contents_img></Contents_img>
            <Contents_cnt>{props.data?.fetchBoard.contents}</Contents_cnt>
          </Contents_main>
        </Contents_box>
        <Ect>
          <Ect_ect>
            <ReactPlayer url={props.data?.fetchBoard.youtubeUrl} />
          </Ect_ect>
        </Ect>
        <Like_waraper>
          <Like>
            <Like_icon src="/images/Like.png" onClick={props.onClickLike} />
            <Like_span>{props.data?.fetchBoard.likeCount}</Like_span>
          </Like>
          <Dislike>
            <Dislike_icon
              src="/images/Dislike.png"
              onClick={props.onClickDislike}
            />
            <Dislike_span>{props.data?.fetchBoard.dislikeCount}</Dislike_span>
          </Dislike>
        </Like_waraper>
      </Waraper>
      <Footer>
        <Footer_btn onClick={props.onClickMoveBoardList}>목록으로</Footer_btn>
        <Footer_btn onClick={props.onClickMoveBoardEdit}>수정하기</Footer_btn>
        <Footer_btn onClick={props.onClickMoveBoardDelete}>삭제하기</Footer_btn>
      </Footer>
    </>
  );
}
