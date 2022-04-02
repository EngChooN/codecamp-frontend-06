import styled from "@emotion/styled";
import { useState } from "react";

export default function Pagenation(props) {
  const [startPage, setStartPage] = useState(1);
  const [selectId, setSelectId] = useState(1);
  const Page = styled.span`
    color: ${(props) => (props.current === props.id ? "blue" : "black")};
  `;

  const onClickPage = (event) => {
    props.refetch({ page: Number(event.target.id) });
    setSelectId(Number(event.target.id));
  };

  const onClickPrevPage = () => {
    if (startPage === 1) return;
    setStartPage((prev) => prev - 10);
    props.refetch({ page: startPage - 10 });
  };

  const onClickNextPage = () => {
    if (!(startPage + 10 <= props.lastPage)) return;
    setStartPage((prev) => prev + 10);
    props.refetch({ page: startPage + 10 });
  };

  return (
    <div>
      <button
        onClick={onClickPrevPage}
        disabled={startPage === 1 ? true : false}
      >
        이전페이지
      </button>
      {new Array(10).fill(1).map((_, index) =>
        index + startPage <= props.lastPage ? (
          <Page
            key={index + startPage}
            onClick={onClickPage}
            id={index + 1}
            current={selectId}
          >
            {` `} {index + startPage}
          </Page>
        ) : (
          <span></span>
        )
      )}
      <button
        onClick={onClickNextPage}
        disabled={startPage + 10 <= props.lastPage ? false : true}
      >
        다음페이지
      </button>
    </div>
  );
}
