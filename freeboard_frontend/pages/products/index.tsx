import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  WrapperPr,
  Wrapper,
  ProductList,
  Img,
  Name,
  Price,
  Seller,
  BasketBtn,
  ProductInfo,
  Btn,
  ProductNewBtn,
  ProductListHeader,
} from "../../src/components/units/product/ProductList.styles";
import InfiniteScroll from "react-infinite-scroller";

const FETCH_PRODUCTS = gql`
  query fetchUseditems($isSoldout: Boolean, $page: Int) {
    fetchUseditems(isSoldout: $isSoldout, page: $page) {
      _id
      name
      price
      seller {
        name
      }
      images
      soldAt
    }
  }
`;

export default function ProductListPage(props) {
  const router = useRouter();
  const { data, fetchMore } = useQuery(FETCH_PRODUCTS, {
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

  // 무한스크롤 (사실 쓰는법 모름ㅋ)
  const loadFunc = () => {
    if (!data) return;
    fetchMore({
      variables: { page: Math.ceil(data?.fetchUseditems.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchUseditems)
          return { fetchUseditems: [...prev.fetchUseditems] };
        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult.fetchUseditems,
          ],
        };
      },
    });
  };

  const onClickMoveSoldOutList = () => {
    router.push("/products/soldout");
  };

  const onClickMoveBasketsList = () => {
    router.push("/products/baskets");
  };

  return (
    <WrapperPr>
      <Wrapper>
        <ProductListHeader>
          <ProductNewBtn onClick={onClickMoveProductWrite}>
            + 상품등록
          </ProductNewBtn>
          <ProductNewBtn onClick={onClickMoveSoldOutList}>
            판매된 상품
          </ProductNewBtn>
          <ProductNewBtn onClick={onClickMoveBasketsList}>
            장바구니
          </ProductNewBtn>
        </ProductListHeader>
        <InfiniteScroll pageStart={0} loadMore={loadFunc} hasMore={true}>
          {data?.fetchUseditems.map((el, index) => (
            <ProductList
              key={index}
              soldAt={el.soldAt}
              id={el._id}
              onClick={onClickMoveProductDetail}
            >
              <ProductInfo>
                <Img src={"https://storage.googleapis.com/" + el.images} />
                <Name>{el.name}</Name>
                <Price>{el.price} ₩</Price>
              </ProductInfo>
              <Btn>
                <Seller>{el.seller.name}</Seller>
                <BasketBtn onClick={onClickBaskets(el)}>
                  장바구니에 담기
                </BasketBtn>
                {el.soldAt !== null ? <div>판매완료</div> : <div></div>}
              </Btn>
            </ProductList>
          )) || <div></div>}
        </InfiniteScroll>
      </Wrapper>
    </WrapperPr>
  );
}
