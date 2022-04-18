import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { visitedPageState } from "../../src/commons/store";
import { useMoveToPage } from "../../src/components/commons/hooks/useMoveToPage";

export default function CustomHooksUseMoveToPage() {
  //   const router = useRouter();
  //   const [visitedPage, setVisitedPage] = useRecoilState(visitedPageState);

  //   const onClickMoveToPage = (url) => () => {
  //     setVisitedPage(url);
  //     router.push(url);
  //   };

  const { onClickMoveToPage } = useMoveToPage();

  return (
    <div>
      <button onClick={onClickMoveToPage("/board")}>게시판으로</button>
      <button onClick={onClickMoveToPage("/market")}>마켓으로</button>
      <button onClick={onClickMoveToPage("/mypage")}>마이페이지로</button>
    </div>
  );
}
