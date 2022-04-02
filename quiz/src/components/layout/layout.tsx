import { OmitProps } from "antd/lib/transfer/ListBody";
import LayoutFooter from "./footer";
import LayoutHeader from "./header";
import LayoutSidebar from "./sidebar";
import styled from "@emotion/styled";
import LayoutBanner from "./banner";
import LayoutNavigation from "./navigation";

const BodyWrapper = styled.div`
  display: flex;
`;

export default function Layout(props) {
  return (
    <>
      <LayoutHeader />
      <LayoutBanner />
      <LayoutNavigation />
      <BodyWrapper>
        <LayoutSidebar />
        <div>{props.children}</div>
      </BodyWrapper>
      <LayoutFooter />
    </>
  );
}
