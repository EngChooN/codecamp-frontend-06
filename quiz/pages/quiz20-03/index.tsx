import { useState } from "react";

export default function Quiz20_03() {
  const [state, setState] = useState(0);

  const onClickCount = () => {
    setState((qwer) => qwer + 1);
  };
  return (
    <div>
      <div>{state}</div>
      <button onClick={onClickCount}>count++</button>
    </div>
  );
}
