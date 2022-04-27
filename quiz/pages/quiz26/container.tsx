import { useState } from "react";
import PresenterPage from "./presenter";

export default function ContainerPage() {
  let countLet = 0;
  const [countState, setCountState] = useState(0);
  console.log("Container");

  const onClickCountLet = () => {
    countLet = countLet + 1;
    console.log(countLet);
  };

  const onClickCountState = () => {
    setCountState(countState + 1);
    console.log(countState);
  };
  return (
    <div>
      <h1>Continer</h1>
      <div>countLet: {countLet}</div>
      <button onClick={onClickCountLet}>countLet++</button>
      <div>countState: {countState}</div>
      <button onClick={onClickCountState}>countState++</button>
      <PresenterPage />
    </div>
  );
}
