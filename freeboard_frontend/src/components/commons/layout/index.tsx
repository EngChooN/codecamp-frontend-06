import styled from "@emotion/styled";
import { useRouter } from "next/router";
import Banner from "./banner";
import Header from "./header";
import Navigation from "./navigation";
import Navigation2 from "./navigation2";
import Sidebar from "./sidebar";

const Body = styled.div`
  height: 100%;
  margin-top: 465px;
`;

const Wrapper = styled.div``;

export default function Layout(props) {
  const router = useRouter();
  const currentUrl = router.asPath;
  console.log(currentUrl);
  return (
    <Wrapper>
      {currentUrl === "/" ? (
        <Navigation2 />
      ) : (
        <>
          <Header />
          <Banner />
          <Navigation />
          <Sidebar />
        </>
      )}
      <Body>{props.children}</Body>
    </Wrapper>
  );
}
