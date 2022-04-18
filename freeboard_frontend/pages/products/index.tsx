import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

const FETCH_PRODUCTS = gql`
  query fetchUseditems($isSoldout: Boolean) {
    fetchUseditems(isSoldout: $isSoldout) {
      _id
      name
      price
      seller {
        name
      }
    }
  }
`;

export default function ProductListPage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_PRODUCTS, {
    variables: {
      isSoldout: false,
    },
  });

  const onClickMoveProductWrite = () => {
    router.push("/products/new");
  };

  const onClickMoveProductDetail = (event) => {
    router.push("/products/" + event.target.id);
  };

  return (
    <>
      <button onClick={onClickMoveProductWrite}>상품등록</button>
      {data?.fetchUseditems.map((el, index) => (
        <div key={index}>
          <div id={el._id} onClick={onClickMoveProductDetail}>
            상품명:{el.name}
          </div>
          <div>가격:{el.price}</div>
          <div>판매자:{el.seller.name}</div>
          <hr></hr>
        </div>
      ))}
    </>
  );
}
