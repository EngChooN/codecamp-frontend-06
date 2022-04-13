import { useRouter } from "next/router";
import { useEffect } from "react";

// 타입스크립트 제외!!
// @ts-ignore
export const withAuth = (Component) => (props) => {
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      alert("PLEASE, DO LOGIN!!");
      router.push("/login");
    }
  }, []);

  return <Component {...props} />;
};
