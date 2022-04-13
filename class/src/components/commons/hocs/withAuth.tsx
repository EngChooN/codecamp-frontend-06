import { useRouter } from "next/router";
import { useEffect } from "react";

// @ts-ignore
export const withAuth = (Component) => (props) => {
  const router = useRouter();

  // 권한분기 로직 추가하기
  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      alert("로그인 후 이용 가능");
      router.push("/23-05-login-check-success");
    }
  }, []);

  return <Component {...props} />;
};
