import { gql, useMutation } from "@apollo/client";
import { useState } from "react";

// 대댓글 작성 뮤테이션
const RECOMMENT_CREATE = gql`
  mutation createUseditemQuestionAnswer(
    $createUseditemQuestionAnswerInput: CreateUseditemQuestionAnswerInput!
    $useditemQuestionId: ID!
  ) {
    createUseditemQuestionAnswer(
      createUseditemQuestionAnswerInput: $createUseditemQuestionAnswerInput
      useditemQuestionId: $useditemQuestionId
    ) {
      _id
    }
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

export default function RecommentWriterPage(props) {
  console.log("PROPS!!" + props.el._id);
  console.log("EL!" + props.el);
  const [recomment, setRecomment] = useState("");
  const [createUseditemQuestionAnswer] = useMutation(RECOMMENT_CREATE);

  const onChangeRecomment = (event) => {
    setRecomment(event.target.value);
  };

  const onClickRecommentWrite = async () => {
    try {
      await createUseditemQuestionAnswer({
        variables: {
          createUseditemQuestionAnswerInput: {
            contents: recomment,
          },
          useditemQuestionId: props.el,
        },
        refetchQueries: [
          {
            query: PRODUCT_RECOMMENT,
            variables: {
              useditemQuestionId: props.el,
            },
          },
        ],
      });
      alert("댓글작성성공!");
    } catch (error) {
      alert(error);
    }
  };
  return (
    <>
      {props.recommentWrite === props.el && (
        <div>
          <input type={"text"} onChange={onChangeRecomment} />
          <button onClick={onClickRecommentWrite}>대댓글작성완료</button>
        </div>
      )}
    </>
  );
}
