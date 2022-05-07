import { gql, useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import RecommentWriterPage from "../write/RecommentWrite";

// 대댓글 삭제 뮤테이션
const RECOMMENT_DELETE = gql`
  mutation deleteUseditemQuestionAnswer($useditemQuestionAnswerId: ID!) {
    deleteUseditemQuestionAnswer(
      useditemQuestionAnswerId: $useditemQuestionAnswerId
    )
  }
`;

// 대댓글 목록 쿼리
const PRODUCT_RECOMMENT = gql`
  query fetchUseditemQuestionAnswers($useditemQuestionId: ID!) {
    fetchUseditemQuestionAnswers(useditemQuestionId: $useditemQuestionId) {
      _id
      user {
        name
      }
      contents
    }
  }
`;

export default function RecommentListPage(props) {
  const { data } = useQuery(PRODUCT_RECOMMENT, {
    variables: {
      useditemQuestionId: props.el?._id,
    },
  });

  const [deleteUseditemQuestionAnswer] = useMutation(RECOMMENT_DELETE);

  // 대댓글 삭제
  const [eidtRecomment, setEditRecomment] = useState("");
  const onClickRecommentEdit = (event) => {
    setEditRecomment(event?.target.id);
  };

  const onClickRecommentDelete = async (event) => {
    await deleteUseditemQuestionAnswer({
      variables: {
        useditemQuestionAnswerId: event.target.id,
      },
      refetchQueries: [
        {
          query: PRODUCT_RECOMMENT,
          variables: {
            useditemQuestionId: props.el?._id,
          },
        },
      ],
    });
    alert("삭제완료!");
  };
  console.log("BBB!!" + eidtRecomment);
  return (
    <div>
      {data?.fetchUseditemQuestionAnswers.map((el, index) => (
        <div key={index}>
          <div>{el.contents}</div>
          <div>{el.user.name}</div>
          <button onClick={onClickRecommentEdit} id={el._id}>
            수정
          </button>
          <button onClick={onClickRecommentDelete} id={el._id}>
            삭제
          </button>
          {eidtRecomment === el._id && (
            <RecommentWriterPage
              isRecommentEdit={true}
              questionId={props.el?._id}
              recommentId={el._id}
              recommentContents={el.contents}
            />
          )}
          <hr />
        </div>
      ))}
    </div>
  );
}
