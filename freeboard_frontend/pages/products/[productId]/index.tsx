import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

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
      }
      createdAt
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

  return (
    <div>
      <div>상품명:{data?.fetchUseditem.name}</div>
      <div>회원이름:{data?.fetchUseditem.seller.name}</div>
      <div>상품설명:{data?.fetchUseditem.contents}</div>
      <div>REMARKS:{data?.fetchUseditem.remarks}</div>
      <div>{data?.fetchUseditem.createdAt}</div>
    </div>
  );
}
