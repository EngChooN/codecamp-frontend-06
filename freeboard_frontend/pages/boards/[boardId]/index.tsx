// import { Contents } from '../../../styles/emotion.js'

import BoardDetail from "../../../src/components/units/board/list/BoardDetail.container";
import CommentDetail from "../../../src/components/units/reply/detail/CommentDetail.container";
import CommentWrite from "../../../src/components/units/reply/write/CommentWrite.container";

export default function boardIdPage() {
  return (
    <div>
      <BoardDetail />
      <CommentWrite />
      <CommentDetail />
    </div>
  );
}
