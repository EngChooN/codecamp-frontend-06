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

  const onClickBaskets = (el) => () => {
    // console.log(el);
    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");

    // 이미등록한 장바구니 상품 또 등록을 할 시...
    const basketsOneMore = baskets.filter(
      (basketsEl) => basketsEl._id === el._id
    ); // 이부분은 잘 모르겠음츈!

    console.log(basketsOneMore);
    if (basketsOneMore.length === 1) {
      return alert("이미 등록한 상품이라구요~");
    }

    // 장바구니 등록...
    const { __typename, ...newEl } = el; // 이 부분은 잘 모르겠음츈!
    baskets.push(newEl);
    localStorage.setItem("baskets", JSON.stringify(baskets));
  };

  return (
    <>
      <button onClick={onClickMoveProductWrite}>상품등록</button>
      <hr />
      {data?.fetchUseditems.map((el, index) => (
        <div key={index}>
          <div id={el._id} onClick={onClickMoveProductDetail}>
            상품명:{el.name}
          </div>
          <div>가격:{el.price}</div>
          <div>판매자:{el.seller.name}</div>
          <button onClick={onClickBaskets(el)}>장바구니에 담기</button>
          <hr />
        </div>
      ))}
    </>
  );
}
