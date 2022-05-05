import { gql, useMutation, useQuery } from "@apollo/client";

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

  const onClickRecommentEdit = () => {};

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

  return (
    <div>
      {data?.fetchUseditemQuestionAnswers.map((el, index) => (
        <div key={index}>
          <div>{el.contents}</div>
          <div>{el.user.name}</div>
          <button onClick={onClickRecommentEdit}>수정</button>
          <button onClick={onClickRecommentDelete} id={el._id}>
            삭제
          </button>
          <hr />
        </div>
      ))}
    </div>
  );
}
