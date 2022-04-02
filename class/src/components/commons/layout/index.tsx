import LayoutNavigation from "./banner";
import LayoutHeader from "./header";
import LayoutBanner from "./navigation";
import styled from "@emotion/styled";
import LayoutFooter from "./footer";
import { ReactNode } from "react";
import { useRouter } from "next/router";

const Body = styled.div``;

interface ILayoutProps {
  children: ReactNode;
}
const BodyWrapper = styled.div`
  display: flex;
`;
const LayoutSidebar = styled.div`
  height: 1200px;
  width: 100px;
  background-color: orange;
`;

const HIDDEN_HEADERS = [
  // 헤더를 숨기고 싶은 주소
  "/12-05-modal-refactoring",
];
export default function Layout(props: ILayoutProps) {
  const router = useRouter;
  const isHidden = HIDDEN_HEADERS.includes(router.asPath);
  console.log(router);
  return (
    <>
      {!isHidden && <LayoutHeader />}
      <LayoutBanner />
      <LayoutNavigation />
      <BodyWrapper>
        <LayoutSidebar>여기는 사이드바</LayoutSidebar>
        <Body>{props.children}</Body>
      </BodyWrapper>
      <LayoutFooter />
    </>
  );
}
