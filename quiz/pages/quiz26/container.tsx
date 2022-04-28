import { useCallback, useMemo, useState } from "react";
import PresenterPage from "./presenter";

export default function ContainerPage() {
  //   let countLet = 0;
  let countLet = 0;
  const [countState, setCountState] = useState(0);
  console.log("Container");

  const onClickCountLet = useCallback(() => {
    console.log(countLet + 1);
    countLet += 1; // countLet = countLet + 1
  }, []);

  //   const onClickCountState = () => {
  //     setCountState(countState + 1);
  //     console.log(countState);
  //   };

  //   const onClickCountState = useCallback(() => {
  //     console.log(countState + 1);
  //     // setCountState(countState + 1);
  //     setCountState((prev) => prev + 1);
  //   }, []);

  return (
    <div>
      <h1>Continer</h1>
      <div>countLet: {countLet}</div>
      <button onClick={onClickCountLet}>countLet++</button>
      <div>countState: {countState}</div>
      <button
        onClick={() => {
          setCountState((prev) => prev + 1);
        }}
      >
        countState++
      </button>
      <PresenterPage />
    </div>
  );
}
