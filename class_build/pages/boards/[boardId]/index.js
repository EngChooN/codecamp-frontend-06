import { useRouter } from "next/router";
import Head from "next/head";

export default function BoardDetailPage() {
  const router = useRouter();

  return (
    <div>
      <Head>
        <meta property="og:title" content={} />
        <meta property="og:description" content={} />
        <meta property="og:image" content={} />
      </Head>
      <div>
        안녕하세요 게시글 상세페이지입니다, 게시글 ID는 {router.query.boardId}
      </div>
    </div>
  );
}


const getServerSideProps = () => {

}