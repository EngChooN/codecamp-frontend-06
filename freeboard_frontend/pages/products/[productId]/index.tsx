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
} from "../../../src/components/units/product/ProductDetail.styles";

const FETCH_PRODUCT = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      price
      seller {
        name
        email
      }
      createdAt
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

export default function ProductDetailPage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_PRODUCT, {
    variables: {
      useditemId: router.query.productId,
    },
  });
  const { data: loginData } = useQuery(FETCH_USER_LOGGED_IN);
  const [deleteUseditem] = useMutation(DELETE_PRODUCT);

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

  return (
    <Wrapper>
      <ProductDetail>
        <Row1>
          <Seller>{data?.fetchUseditem.seller.name}</Seller>
          <CreatedAt>DATE: {data?.fetchUseditem.createdAt}</CreatedAt>
        </Row1>
        <Name>{data?.fetchUseditem.name}</Name>
        <Img></Img>
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
        <BtnWrapper>
          {loginData?.fetchUserLoggedIn.email ===
            data?.fetchUseditem.seller.email && (
            <Btn>
              <Edit onClick={onClickMoveProductEdit}>수정하기</Edit>
              <Delete onClick={onClickMoveProductDelete}>삭제하기</Delete>
            </Btn>
          )}
        </BtnWrapper>
      </ProductDetail>
    </Wrapper>
  );
}
