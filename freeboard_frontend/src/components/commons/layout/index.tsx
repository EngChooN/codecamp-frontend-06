import styled from "@emotion/styled";
import Banner from "./banner";
import Header from "./header";
import Navigation from "./navigation";

const Body = styled.div`
  height: 100vh;
`;

export default function Layout(props) {
  return (
    <>
      <Header />
      <Banner />
      <Navigation />
      <Body>{props.children}</Body>
    </>
  );
}
