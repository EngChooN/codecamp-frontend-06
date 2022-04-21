import { useState } from "react";

// 스크립트 구문 사용하는법!!!
import Head from "next/head";
import { useRouter } from "next/router";

declare const window: typeof globalThis & {
  IMP: any;
};

export default function PaymentPage() {
  const router = useRouter();
  const [amount, setAmount] = useState(100);
  const requestPay = () => {
    if (amount === 100) {
      return alert("결제금액을 선택해 주세요!");
    }
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp35933072"); // Example: imp00000000
    // IMP.request_pay(param, callback) 결제창 호출
    IMP.request_pay(
      {
        // param
        pg: "html5_inicis",
        pay_method: "card",
        // merchant_uid: "ORD20180131-0000011",
        name: amount + "원 충전",
        amount: amount,
        buyer_email: "gildong@gmail.com",
        buyer_name: "곽두팔",
        buyer_tel: "010-2828-2828",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
        // m_redirect_url: "", => 결제 후 리다이렉트 할 페이지
      },
      (rsp: any) => {
        // callback
        if (rsp.success) {
          // 결제 성공 시 로직,
          console.log(rsp);
          alert("결제성공");
          router.push("/quiz06/payment/complete");
          // 백엔드에 결제 관련 데이터를 넘겨주기 (=> 즉 뮤테이션 실행),
          // ex) createPointTransactionOfLoading
        } else {
          // 결제 실패 시 로직,
          alert("결제실패");
        }
      }
    );
  };

  const onChangePrice = (event) => {
    setAmount(event.target.value);
  };

  return (
    <>
      <Head>
        {/* <!-- jQuery --> */}
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        {/* <!-- iamport.payment.js --> */}
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>
      <select name="price" onChange={onChangePrice}>
        <option value="">충전 금액을 선택해 주세요.</option>
        <option value="500">500원</option>
        <option value="1000">1000원</option>
        <option value="2000">2000원</option>
        <option value="5000">5000원</option>
      </select>
      <button onClick={requestPay}>결제하기</button>
    </>
  );
}
