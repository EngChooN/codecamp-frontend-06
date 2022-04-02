import styled from "@emotion/styled";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Wrapper = styled.div`
  height: 400px;
  background-color: pink;
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Slider1 = styled(Slider)`
  width: 300px;
  height: 250px;
`;

const SliderChild1 = styled(Slider)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SliderChild2 = styled(Slider)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SliderChild3 = styled(Slider)`
  display: flex;
  justify-content: center;
  align-items: center;
`;
// const SliderWrapper = styled.div``;

// const S1 = styled.div`
//   background-color: red;
//   width: 300px;
//   height: 300px;
// `;

// const S2 = styled.div`
//   background-color: blue;
//   width: 300px;
//   height: 300px;
// `;

// const S3 = styled.div`
//   background-color: green;
//   width: 300px;
//   height: 300px;
// `;

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function LayoutBanner() {
  return (
    <Wrapper>
      여기는 배너영역
      {/* <Slider {...settings}>
          <SliderWrapper>
            <S1></S1>
          </SliderWrapper>
          <SliderWrapper>
            <S2></S2>
          </SliderWrapper>
          <SliderWrapper>
            <S3></S3>
          </SliderWrapper>
        </Slider> */}
      <Slider1 {...settings}>
        <SliderChild1>
          <img
            src={
              "https://item.kakaocdn.net/do/493188dee481260d5c89790036be0e666fb33a4b4cf43b6605fc7a1e262f0845"
            }
          />
        </SliderChild1>
        <SliderChild2>
          <img
            src={
              "https://item.kakaocdn.net/do/493188dee481260d5c89790036be0e66c37d537a8f2c6f426591be6b8dc7b36a"
            }
          />
        </SliderChild2>
        <SliderChild3>
          <img
            src={
              "https://item.kakaocdn.net/do/493188dee481260d5c89790036be0e66ba2da8249bd9ffef143efb890203e009"
            }
          />
        </SliderChild3>
      </Slider1>
    </Wrapper>
  );
}
