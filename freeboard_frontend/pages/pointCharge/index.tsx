import styled from "@emotion/styled";
import { useState } from "react";
import PaymentPage from "../../src/components/units/product/Payment";

const Wrapper = styled.div`
  margin-top: 500px;
`;
export default function PointChargePage() {
  const [point, setPoint] = useState(0);

  const onChangePoint = (event) => {
    setPoint(event.target.value);
  };

  return (
    <Wrapper>
      <select name="point" id="point-select" onChange={onChangePoint}>
        <option value="">--충전하실 포인트를 골라주세요--</option>
        <option value="100">100</option>
        <option value="1000">1000</option>
        <option value="5000">5000</option>
        <option value="10000">10000</option>
        <option value="20000">20000</option>
        <option value="50000">50000</option>
      </select>
      <PaymentPage point={point} />
    </Wrapper>
  );
}
