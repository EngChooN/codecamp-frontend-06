export default function ProductWritePresenter(props) {
  return (
    <form onSubmit={props.handleSubmit(props.onClickProductWrite)}>
      <input type="text" placeholder="상품명" {...props.register("name")} />
      <input
        type="text"
        placeholder="상품설명"
        {...props.register("contents")}
      />
      <input type="text" placeholder="상품가격" {...props.register("price")} />
      <input type="text" placeholder="간단명" {...props.register("remarks")} />
      <button>상품등록</button>
    </form>
  );
}
