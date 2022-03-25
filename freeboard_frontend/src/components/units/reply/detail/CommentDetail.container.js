import CommentDetailUI from "./CommentDetail.presenter";
import { useQuery } from "@apollo/client";
import { FETCH_COMMENTS } from "./CommnetDetail.queries";
import { useRouter } from "next/router";

export default function CommentDetail(props) {
  const router = useRouter();
  const { data } = useQuery(FETCH_COMMENTS, {
    variables: {
      boardId: router.query.boardId,
    },
  });

  return <CommentDetailUI data={data} />;
}
