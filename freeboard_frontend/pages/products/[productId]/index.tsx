import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import Dompurify from "dompurify";

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

export default function ProductDetailPage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_PRODUCT, {
    variables: {
      useditemId: router.query.productId,
    },
  });

  const { data: loginData } = useQuery(FETCH_USER_LOGGED_IN);

  const onClickMoveProductEdit = () => {
    router.push("/products/" + router.query.productId + "/edit");
  };

  const onClickMoveProductDelete = () => {};

  return (
    <div>
      <div>상품명:{data?.fetchUseditem.name}</div>
      <div>회원이름:{data?.fetchUseditem.seller.name}</div>
      상품설명:
      {typeof window !== "undefined" && (
        <div
          dangerouslySetInnerHTML={{
            __html: Dompurify.sanitize(data?.fetchUseditem.contents),
          }}
        ></div>
      )}
      <div>REMARKS:{data?.fetchUseditem.remarks}</div>
      <div>{data?.fetchUseditem.createdAt}</div>
      <div>
        {loginData?.fetchUserLoggedIn.email ===
          data?.fetchUseditem.seller.email && (
          <>
            <button onClick={onClickMoveProductEdit}>수정하기</button>
            <button onClick={onClickMoveProductDelete}>삭제하기</button>
          </>
        )}
      </div>
    </div>
  );
}
