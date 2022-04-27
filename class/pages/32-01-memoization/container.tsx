import { useCallback, useMemo, useState } from "react";
import MemoizationPresenterPage from "./presenter";

export default function MemoizationConteinerPage() {
  console.log("컨테이너가 렌더링 됩니다");
  let countLet = 0;
  const [countState, setCountState] = useState(0);

  const aaa = useMemo(() => {
    return Math.random();
  }, []);
  console.log(aaa);

  const onClickCountLet = () => {
    // countLet = countLet + 1
    console.log(countLet + 1);
    countLet += 1;
  };

  // const onClickCountState = useCallback(() => {
  //   // console.log(countState + 1);
  //   setCountState((prev) => prev + 1);
  // }, []);

  const onClickCountState = useCallback(() => {
    // console.log(countState + 1);
    setCountState(countState + 1);
  }, []);

  // useMemo로 useCallback 만들어보기!!!
  const bbb = useMemo(() => {
    return () => {
      setCountState((prev) => prev + 1);
    };
  }, []);

  return (
    <div>
      <div>===============================</div>
      <h1>이것은 컨테이너입니다</h1>

      <div>카운트(let): {countLet}</div>
      <button onClick={onClickCountLet}>카운트(let) + 1 올리기</button>

      <div>카운트(state): {countState}</div>
      <button onClick={onClickCountState}>카운트(state) + 1 올리기</button>
      <div>===============================</div>
      <MemoizationPresenterPage countState={countState} />
    </div>
  );
}
