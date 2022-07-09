import styled from "@emotion/styled";
import Zoom from "react-reveal/Zoom";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  margin-top: -465px;
`;

export const Box1 = styled.div`
  background-image: url("https://gobooki.net/wp-content/uploads/2021/07/what-is-coding-1.jpg");
  background-size: cover;
  width: 100%;
  height: 500px;
`;

export const Box1_Zoom = styled(Zoom)``;

export const Box1_Zoom_Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Box1_Title = styled.h1`
  margin-top: 150px;
  font-size: 50px;
`;

export const Box1_Content = styled.p`
  font-size: 25px;
`;
