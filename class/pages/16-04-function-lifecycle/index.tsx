import { useRouter } from "next/router";
import { Component, createRef, useEffect, useRef, useState } from "react";

interface Istate {
  count: number;
}

export default function CounterPage() {
  // inputRef = createRef<HTMLInputElement>();
  // state = {
  //   count: 0,
  // };

  const [count, setCount] = useState(99);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  // componentDidMount() {
  //   console.log("마운트됨!!!");
  //   // 포커스 깜빡깜빡
  //   this.inputRef.current?.focus();
  // }

  // componentDidMount
  // useEffect(() => {
  //   console.log("마운트됨!!!");
  //   inputRef.current?.focus();
  // }, []);

  // componentDidUpdate() {
  //   console.log("수정되고 다시그려짐!!!");
  // }

  // componentDidUpdate
  // useEffect(() => {
  //   console.log("수정되고 다시그려짐!!!");
  // });

  // componentWillUnmount() {
  //   console.log("컴포넌트 사라짐!!!");
  //   // 채팅방 나가기!!!
  // }

  // componentDidMount + componentWillUnmount
  useEffect(() => {
    console.log("마운트됨!!!");
    inputRef.current?.focus();
    return () => {
      console.log("컴포넌트 사라짐!!!");
    };
  }, []); // 왼쪽의 []는 의존성 배열을 뜻함 (한번만 실행되고 끝난다는 뜻)

  // useEffect의 잘못된 사용 예(1. 추가렌더링, 2. 무한루프)
  // useEffect(() => {
  //   setCount(prev => prev + 1);
  // }, [count]);

  const onClickCounter = () => {
    // this.setState((prev: Istate) => ({
    //   count: prev.count + 1,
    // }));
    setCount((prev) => prev + 1);
  };

  const onClickMove = () => {
    router.push("/");
  };

  console.log("나는 언제 실행될까요??");

  return (
    <div>
      <input type="text" ref={inputRef} />
      <div>{count}</div>
      <button onClick={onClickCounter}>키운트올리기</button>
      <button onClick={onClickMove}>나가기!!!</button>
    </div>
  );
}
