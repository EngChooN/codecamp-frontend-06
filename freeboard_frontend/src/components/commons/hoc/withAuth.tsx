import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { getAccessToken } from "../../../commons/libraries/getAccessToken";
import { accessTokenState } from "../../../commons/libraries/Recoil";

// 타입스크립트 제외!!
// @ts-ignore
export const withAuth = (Component) => (props) => {
  const [accessToken] = useRecoilState(accessTokenState);
  const router = useRouter();

  useEffect(() => {
    async function aaa() {
      if (!accessToken) {
        const newAccessToken = await getAccessToken();
        if (!newAccessToken) {
          alert("PLEASE, DO LOGIN!!");
          router.push("/login");
        }
      }
    }
  }, []);

  return <Component {...props} />;
};
