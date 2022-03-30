import { useState } from "react";

export default function StatePrevPage() {
  const [count, useCount] = useState(0);

  const onClickCount = () => {
    useCount((prev) => prev + 1);
  };
  return (
    <div>
      <div>현재카운트:{count}</div>
      <button onClick={onClickCount}>카운트 올리기!!!</button>
    </div>
  );
}
