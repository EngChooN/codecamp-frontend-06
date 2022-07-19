import styled from "@emotion/styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Wrapper = styled.div`
  margin-top: -465px;
  width: 100vw;
  height: 100vh;
  display: flex;
  background: url("/images/rending/rending1.jpg") fixed;
  background-size: cover;
  display: flex;
`;

export const SideBar = styled.div`
  padding-top: 20px;
  /* height: 100vh; */
  width: 380px;
  display: flex;
  flex-direction: column;
`;

export const Sidebar_Title1 = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  font-size: 20px;
  font-weight: 300;
  padding-left: 20px;
  border-bottom: 1px solid #d9d9d9;
  cursor: pointer;
  :hover {
    background-color: #d9d9d9;
  }
  background-color: ${(props) => (props.one ? "#e4e4e4" : "none")};
`;

export const Sidebar_Title2 = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  font-size: 20px;
  font-weight: 300;
  padding-left: 20px;
  border-bottom: 1px solid #d9d9d9;
  cursor: pointer;
  :hover {
    background-color: #d9d9d9;
  }
  background-color: ${(props) => (props.two ? "#e4e4e4" : "none")};
`;

export const Sidebar_Title3 = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  font-size: 20px;
  font-weight: 300;
  padding-left: 20px;
  border-bottom: 1px solid #d9d9d9;
  cursor: pointer;
  :hover {
    background-color: #d9d9d9;
  }
  background-color: ${(props) => (props.three ? "#e4e4e4" : "none")};
`;

export const Sidebar_Title4 = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  font-size: 20px;
  font-weight: 300;
  padding-left: 20px;
  border-bottom: 1px solid #d9d9d9;
  cursor: pointer;
  :hover {
    background-color: #d9d9d9;
  }
  background-color: ${(props) => (props.four ? "#e4e4e4" : "none")};
`;

export const Sidebar_Title5 = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  font-size: 20px;
  font-weight: 300;
  padding-left: 20px;
  border-bottom: 1px solid #d9d9d9;
  cursor: pointer;
  :hover {
    background-color: #d9d9d9;
  }
  background-color: ${(props) => (props.five ? "#e4e4e4" : "none")};
`;

export const MenuTitle = styled.div`
  padding-top: 130px;
  font-size: 40px;
  margin-left: 30px;
`;

export const SideBar_Wrapper = styled.section`
  border-right: 1px solid #d9d9d9;
`;

export const NewsWrapper = styled.section`
  width: 100%;
  padding-top: 100px;
`;

export const Title = styled.h1`
  font-size: 40px;
  padding-left: 20px;
`;

export const Content = styled.p`
  margin-top: 20px;
  padding: 20px;
  background-color: white;
  border: 2px solid #e0e0e0;
  font-size: 19px;
  font-weight: 200;
  border-radius: 15px;
`;

export const News = styled.article`
  width: 100%;
  padding: 30px;
`;

export const Carousel_Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const Slider1 = styled(Slider)`
  width: 750px;
  height: 80px;
  display: flex;
`;

export const SliderChild = styled(Slider)`
  padding: 20px;
  width: 700px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 15px;
  margin-left: 25px;
  background-color: #e0e0e0;
`;

export const Review = styled.div`
  font-size: 15px;
  font-weight: 350;
`;
