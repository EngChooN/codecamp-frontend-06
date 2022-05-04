import styled from "@emotion/styled";
import Banner from "./banner";
import Header from "./header";
import Navigation from "./navigation";
import Sidebar from "./sidebar";

const Body = styled.div`
  height: 100%;
  margin-top: 465px;
`;

const Wrapper = styled.div``;

export default function Layout(props) {
  return (
    <Wrapper>
      <Header />
      <Banner />
      <Navigation />
      <Sidebar />
      <Body>{props.children}</Body>
    </Wrapper>
  );
}
