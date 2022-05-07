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

// 대댓글 수정 뮤테이션
const RECOMMENT_UPDATE = gql`
  mutation updateUseditemQuestionAnswer(
    $updateUseditemQuestionAnswerInput: UpdateUseditemQuestionAnswerInput!
    $useditemQuestionAnswerId: ID!
  ) {
    updateUseditemQuestionAnswer(
      updateUseditemQuestionAnswerInput: $updateUseditemQuestionAnswerInput
      useditemQuestionAnswerId: $useditemQuestionAnswerId
    ) {
      _id
    }
  }
`;

export default function RecommentWriterPage(props) {
  console.log("DDD" + props.recommentId);
  // console.log("EL!" + props.qId);
  const [recomment, setRecomment] = useState("");
  const [createUseditemQuestionAnswer] = useMutation(RECOMMENT_CREATE);
  const [updateUseditemQuestionAnswer] = useMutation(RECOMMENT_UPDATE);

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
          useditemQuestionId: props.qId,
        },
        refetchQueries: [
          {
            query: PRODUCT_RECOMMENT,
            variables: {
              useditemQuestionId: props.qId,
            },
          },
        ],
      });
      alert("대-댓글작성성공!");
    } catch (error) {
      alert(error);
    }
  };

  const onClickRecommentEdit = async () => {
    const updateVar = {
      updateUseditemQuestionAnswerInput: {},
      useditemQuestionAnswerId: props.recommentId,
    };

    if (recomment !== "") {
      updateVar.updateUseditemQuestionAnswerInput.contents = String(recomment);
    }
    // else {
    //   updateVar.updateUseditemQuestionAnswerInput.contents =
    //     props.recomentContents;
    // }

    if (recomment === "") {
      return alert("수정된 내용이 없습니다!");
    }

    try {
      await updateUseditemQuestionAnswer({
        variables: updateVar,
        refetchQueries: [
          {
            query: PRODUCT_RECOMMENT,
            variables: {
              useditemQuestionId: props?.questionId,
            },
          },
        ],
        // update(cache, { data }) {
        //   cache.modify({
        //     fields: {
        //       fetchUseditemQuestionAnswers: (prev) => {
        //         return [data.updateUseditemQuestionAnswer, ...prev];
        //       },
        //     },
        //   });
        // },
      });
      alert("대댓수정완료!");
      // location.reload();
    } catch (error) {
      alert(error);
    }
  };

  console.log(props.recommentWrite);

  return (
    <>
      {props.recommentWrite === props.qId && (
        <div>
          <input
            type={"text"}
            onChange={onChangeRecomment}
            defaultValue={props.recommentContents || ""}
          />
          {props.isRecommentEdit === true ? (
            <button onClick={onClickRecommentEdit}>대댓글수정완료</button>
          ) : (
            <button onClick={onClickRecommentWrite}>대댓글작성완료</button>
          )}
        </div>
      )}
    </>
  );
}
