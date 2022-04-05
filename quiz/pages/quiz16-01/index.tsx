import { route } from "next/dist/server/router";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

export default function Quia16_01() {
  const [isChange, setIsChange] = useState(false);
  const router = useRouter();
  const inputRef = useRef(null);

  const onClickMove = () => {
    router.push("/");
  };

  const onClickIsChange = () => {
    if (isChange === false) {
      setIsChange(true);
    }
    if (isChange === true) {
      setIsChange(false);
    }
  };

  useEffect(() => {
    console.log("Rendered!");
    inputRef.current?.focus();
    return () => {
      console.log("Bye!!");
    };
  }, []);

  useEffect(() => {
    return () => {
      console.log("Changed!!");
    };
  }, [isChange]);

  return (
    <>
      <button onClick={onClickIsChange}>변경</button>
      <button onClick={onClickMove}>이동</button>
      <input type="password" placeholder="비밀번호" ref={inputRef} />
    </>
  );
}
