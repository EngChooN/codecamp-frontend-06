import styled from "@emotion/styled";

export default function ResponsiveDesignPage() {
  const Wrapper = styled.div`
    /* width: 1000px; */
    width: 62.5rem;
    height: 1000px;
    background-color: red;

    @media (min-width: 768px) and (max-width: 991px) {
      width: 500px;
      height: 500px;
      background-color: green;
    }

    @media (max-width: 767px) {
      width: 100px;
      height: 100px;
      background-color: blue;
      display: none;
    }
  `;

  return (
    <div>
      <Wrapper>상자</Wrapper>
    </div>
  );
}
