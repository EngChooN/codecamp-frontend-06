import { gql, useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import Dompurify from "dompurify";
import {
  Wrapper,
  ProductDetail,
  Name,
  Seller,
  Contents,
  Price,
  Remarks,
  CreatedAt,
  BtnWrapper,
  Btn,
  Edit,
  Delete,
  Img,
  Row1,
  Row2,
  PayBtn,
  CommentTitle,
  Comment,
  C_Main,
  C_Profile,
  C_Name,
  C_Btns,
  C_Edit,
  C_Delete,
  C_Contents,
} from "../../../src/components/units/product/ProductDetail.styles";
import KakaoMap from "../../../src/components/commons/map";
import CommentComponent from "../../../src/components/units/product/comment/write/ProductCommentWrite";
import { useState } from "react";
import RecommentListPage from "../../../src/components/units/product/comment/recomment/list/RecommentList";
import RecommentWriterPage from "../../../src/components/units/product/comment/recomment/write/RecommentWrite";

const FETCH_PRODUCT = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      price
      pickedCount
      seller {
        name
        email
      }
      createdAt
      soldAt
      useditemAddress {
        lat
        lng
      }
      tags
      images
    }
  }
`;

// 로그인 정보 불러와서 글 등록한 작성자 이메일이랑 로그인한 사람의 이메일링 비교해서 같으면 수정버튼 생성
const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;

// 삭제
const DELETE_PRODUCT = gql`
  mutation deleteUseditem($useditemId: ID!) {
    deleteUseditem(useditemId: $useditemId)
  }
`;

// 포인트로 상품구매
const PRODUCT_BUY = gql`
  mutation createPointTransactionOfBuyingAndSelling($useritemId: ID!) {
    createPointTransactionOfBuyingAndSelling(useritemId: $useritemId) {
      _id
    }
  }
`;

// 찜하기 뮤테이션
const PRODUCT_PICK = gql`
  mutation toggleUseditemPick($useditemId: ID!) {
    toggleUseditemPick(useditemId: $useditemId)
  }
`;

// 댓글목록 뮤테이션
const PRODUCT_COMMENTS = gql`
  query fetchUseditemQuestions($useditemId: ID!) {
    fetchUseditemQuestions(useditemId: $useditemId) {
      _id
      user {
        name
      }
      contents
    }
  }
`;

// 댓글삭제 뮤테이션
const PRODUCT_COMMENT_DELETE = gql`
  mutation deleteUseditemQuestion($useditemQuestionId: ID!) {
    deleteUseditemQuestion(useditemQuestionId: $useditemQuestionId)
  }
`;

export default function ProductDetailPage() {
  const router = useRouter();
  const { data: comments } = useQuery(PRODUCT_COMMENTS, {
    variables: {
      useditemId: router.query.productId,
    },
  });
  const { data } = useQuery(FETCH_PRODUCT, {
    variables: {
      useditemId: router.query.productId,
    },
  });
  const { data: loginData } = useQuery(FETCH_USER_LOGGED_IN);
  const [deleteUseditem] = useMutation(DELETE_PRODUCT);
  const [createPointTransactionOfBuyingAndSelling] = useMutation(PRODUCT_BUY);
  const [toggleUseditemPick] = useMutation(PRODUCT_PICK);
  const [deleteUseditemQuestion] = useMutation(PRODUCT_COMMENT_DELETE);

  const onClickMoveProductEdit = () => {
    router.push("/products/" + router.query.productId + "/edit");
  };

  const onClickMoveProductDelete = () => {
    try {
      deleteUseditem({
        variables: {
          useditemId: router.query.productId,
        },
      });
      alert("상품 삭제성공!");
      router.push("/products");
    } catch (error) {
      alert(error);
    }
  };

  const onClickBuy = () => {
    try {
      createPointTransactionOfBuyingAndSelling({
        variables: {
          useritemId: data?.fetchUseditem._id,
        },
      });
      alert("구매완료!");
      router.push("/products");
    } catch (error) {
      alert(error);
    }
  };

  // 찜하기 클릭
  const onClickPick = () => {
    try {
      const result = toggleUseditemPick({
        variables: {
          useditemId: router.query.productId,
        },
        refetchQueries: [
          {
            query: FETCH_PRODUCT,
            variables: {
              useditemId: router.query.productId,
            },
          },
        ],
      });
    } catch (error) {
      alert(error);
    }
  };

  console.log(data?.fetchUseditem);
  console.log(data?.fetchUseditem.useditemAddress?.lat);
  console.log(data?.fetchUseditem.useditemAddress?.lng);

  const [isEditComment, setIsEditComment] = useState("");
  const [commentEdit, setCommentEdit] = useState(false);
  // 댓글 수정버튼 누르면
  const onClickCommentEdit = (index) => (event) => {
    if (event.target.id === comments?.fetchUseditemQuestions[index]._id) {
      setCommentEdit(true);
      setIsEditComment(event.target.id);
    }
  };

  // 댓글 삭제버튼 누르면
  const onClickCommentDelete = (event) => {
    deleteUseditemQuestion({
      variables: {
        useditemQuestionId: event.target.id,
      },
      refetchQueries: [
        {
          query: PRODUCT_COMMENTS,
          variables: {
            useditemId: router.query.productId,
          },
        },
      ],
    });
  };

  const [recommentWrite, setRecommentWrite] = useState("");
  const onClickRecommentWrite = (event) => {
    setRecommentWrite(event.target.id);
    // if (el._id === event.target.id) {
    //   setRecommentWrite(true);
    // } else {
    //   setRecommentWrite(false);
    // }
    console.log("ID!" + event.target.id);
  };
  console.log("STATE!!" + recommentWrite);
  return (
    <Wrapper>
      <ProductDetail>
        <Row1>
          <Seller>{data?.fetchUseditem.seller.name}</Seller>
          <CreatedAt>DATE: {data?.fetchUseditem.createdAt}</CreatedAt>
        </Row1>
        <Name>{data?.fetchUseditem.name}</Name>
        <Img
          src={
            "https://storage.googleapis.com/" + data?.fetchUseditem.images[0]
          }
        />
        {typeof window !== "undefined" && (
          <Contents
            dangerouslySetInnerHTML={{
              __html: Dompurify.sanitize(data?.fetchUseditem.contents),
            }}
          ></Contents>
        )}
        <Row2>
          <Price>( {data?.fetchUseditem.price} ₩ )</Price>
          <Remarks>REMARKS: {data?.fetchUseditem.remarks}</Remarks>
        </Row2>

        {/* 해쉬태그 */}
        <span>
          {data?.fetchUseditem.tags.map((el, index) => (
            <span key={index}>{el}</span>
          ))}
        </span>

        {/* 찜 */}
        <div>
          <span>{data?.fetchUseditem.pickedCount}</span>
          <button onClick={onClickPick}>찜하기</button>
        </div>

        {data?.fetchUseditem?.useditemAddress ? (
          <KakaoMap
            lat={data?.fetchUseditem?.useditemAddress.lat}
            lng={data?.fetchUseditem?.useditemAddress.lng}
          />
        ) : (
          ""
        )}
        <BtnWrapper>
          {loginData?.fetchUserLoggedIn.email ===
            data?.fetchUseditem.seller.email && (
            <Btn>
              <Edit onClick={onClickMoveProductEdit}>수정하기</Edit>
              <Delete onClick={onClickMoveProductDelete}>삭제하기</Delete>
            </Btn>
          )}
          {data?.fetchUseditem.soldAt === null ? (
            <PayBtn onClick={onClickBuy}>구매하기</PayBtn>
          ) : (
            <div></div>
          )}
        </BtnWrapper>
        {/* ------- */}
        <CommentTitle>댓글</CommentTitle>
        {/* 댓글 작성창 */}
        <CommentComponent useditemId={router.query.productId} />
        {comments?.fetchUseditemQuestions.map((el, index) => (
          <Comment key={index}>
            <Row1>
              <C_Main>
                <C_Profile></C_Profile>
                <C_Name>{el.user.name}</C_Name>
              </C_Main>
              <C_Btns>
                <C_Edit onClick={onClickCommentEdit(index)} id={el._id}>
                  수정
                </C_Edit>
                <C_Delete onClick={onClickCommentDelete} id={el._id}>
                  삭제
                </C_Delete>
                <button onClick={onClickRecommentWrite} id={el._id}>
                  대댓글작성
                </button>
              </C_Btns>
            </Row1>
            <Row2>
              <C_Contents>{el.contents}</C_Contents>
              {/* 얘는 대댓글작성버튼 누르면 보이는 애 입니다. */}
              <RecommentWriterPage
                recommentWrite={recommentWrite}
                qId={el._id}
              />
              {/* 대댓글리스트 */}
              <RecommentListPage
                el={el}
                // ---
              />
            </Row2>
            {/* 댓글 수정창 */}
            {commentEdit === true && isEditComment === el._id && (
              <CommentComponent
                commentEdit={commentEdit}
                useditemId={router.query.productId}
                commentsId={el._id}
                editContents={comments?.fetchUseditemQuestions[index].contents}
              />
            )}
          </Comment>
        ))}
        {/* ------- */}
      </ProductDetail>
    </Wrapper>
  );
}
