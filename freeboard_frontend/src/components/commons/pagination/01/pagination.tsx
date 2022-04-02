import styled from "@emotion/styled";
import { useState } from "react";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid black;
`;

const PageInfo = styled.div`
  margin-top: 15px;
  font-size: 17px;
`;

const PrevBtn = styled.button`
  margin-right: 10px;
`;

const NextBtn = styled.button`
  margin-left: 10px;
`;

export default function Pagination(props) {
  const [startPage, setStartPage] = useState(1);
  const [selectId, setSelectId] = useState(1);
  const Page = styled.span`
    color: ${(props) => (props.current === props.id ? "blue" : "black")};
    font-weight: ${(props) => (props.current === props.id ? "1000" : "none")};
    font-size: ${(props) => (props.current === props.id ? "20px" : "none")};
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
    <Wrapper>
      <PageInfo>
        <PrevBtn
          onClick={onClickPrevPage}
          disabled={startPage === 1 ? true : false}
        >
          이전페이지
        </PrevBtn>
        {new Array(10).fill(1).map((_, index) =>
          index + startPage <= props.lastPage ? (
            <Page
              key={index + startPage}
              onClick={() => {
                onClickPage(event);
                props.onClickPageId(Number(startPage + index));
              }}
              id={index + 1}
              current={selectId}
            >
              {" "}
              {index + startPage}
            </Page>
          ) : (
            <span></span>
          )
        )}
        <NextBtn
          onClick={onClickNextPage}
          disabled={startPage + 10 <= props.lastPage ? false : true}
        >
          다음페이지
        </NextBtn>
      </PageInfo>
    </Wrapper>
  );
}
