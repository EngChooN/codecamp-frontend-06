import Head from "next/head";

export default function OpengraphPage() {
  return (
    <div>
      <Head>
        <meta property="og:title" content="나만의 사이트" />
        <meta property="og:description" content="사이트에 들어온걸 환영" />
        <meta property="og:image" content="" />
      </Head>
      <h1>오픈그래프 연습 페이지</h1>
    </div>
  );
}
