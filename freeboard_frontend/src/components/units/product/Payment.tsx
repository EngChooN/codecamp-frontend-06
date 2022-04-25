// 스크립트 구문 사용하는법!!!
import Head from "next/head";

import { useQuery, gql } from "@apollo/client";

declare const window: typeof globalThis & {
  IMP: any;
};

// 로그인 정보
const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;

export default function PaymentPage(props) {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const requestPay = () => {
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp35933072"); // Example: imp00000000
    // IMP.request_pay(param, callback) 결제창 호출
    IMP.request_pay(
      {
        // param
        pg: "html5_inicis",
        pay_method: "card",
        // merchant_uid: "ORD20180131-0000011",
        name: props.name,
        amount: props.price,
        buyer_email: data?.fetchUserLoggedIn.email,
        buyer_name: data?.fetchUserLoggedIn.name,
        // buyer_tel: "010-2828-2828",
        // buyer_addr: "서울특별시 강남구 신사동",
        // buyer_postcode: "01181",
        // m_redirect_url: "", => 결제 후 리다이렉트 할 페이지
      },
      (rsp: any) => {
        // callback
        if (rsp.success) {
          // 결제 성공 시 로직,
          console.log(rsp);
          alert("결제성공");
          // 백엔드에 결제 관련 데이터를 넘겨주기 (=> 즉 뮤테이션 실행),
          // ex) createPointTransactionOfLoading
        } else {
          // 결제 실패 시 로직,
          alert("결제실패");
        }
      }
    );
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
      <button onClick={requestPay}>결제하기</button>
    </>
  );
}
