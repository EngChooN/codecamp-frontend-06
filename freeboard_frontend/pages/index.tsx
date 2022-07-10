import { useRouter } from "next/router";
import {
  Box1,
  Box1_Btns,
  Box1_Btn_Github,
  Box1_Btn_Velog,
  Box1_Content,
  Box1_Title,
  Box1_Zoom,
  Box1_Zoom_Wrapper,
  Box2,
  Box2_Content,
  Box2_Content_Wrapper,
  Box2_Slide,
  Box3,
  Box3_Content,
  Box3_Content_Wrapper,
  Box3_Slide,
  Box4,
  Box4_Content,
  Box4_Content_Wrapper,
  Box4_Slide,
  Box5,
  Box5_Content,
  Box5_Content_Wrapper,
  Box5_Review,
  Box5_Review_Wrapper,
  HelloLottie,
  ReactLottie,
  StudyLottie,
  ThinkLottie,
  Wrapper,
} from "../src/components/units/Home.styles";
import { Tooltip } from "antd";

export default function Home() {
  // useEffect(() => {
  //   const imgfunction = async () => {
  //     const result = await axios.get("https://dog.ceo/api/breeds/image/random");
  //     setLoadImg(result.data.message);
  //     console.log(result);
  //   };
  //   imgfunction();
  // }, []);
  const router = useRouter();

  const onClickGithub = () => {
    window.open("https://github.com/EngChooN");
  };

  const onClickVelog = () => {
    window.open("https://velog.io/@aimzero9303");
  };
  return (
    <Wrapper>
      <Box1>
        <Box1_Zoom>
          <Box1_Zoom_Wrapper>
            <HelloLottie src="https://embed.lottiefiles.com/animation/76787"></HelloLottie>
            {/* <Box1_Title>안녕하세요!</Box1_Title> */}
            <Box1_Content>
               사용자의 입장에서 코드를 작성하는 프론트엔드 개발자 조준영
              입니다.
            </Box1_Content>
            <Box1_Btns>
              <Tooltip placement="bottom" title={"Visit GitHub"}>
                <Box1_Btn_Github
                  src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                  onClick={onClickGithub}
                />
              </Tooltip>
              <Tooltip placement="bottom" title={"Visit Velog"}>
                <Box1_Btn_Velog
                  src="https://cdn-icons.flaticon.com/png/512/3669/premium/3669981.png?token=exp=1657452407~hmac=71b8479dbe68314d5d35e977743f13ab"
                  onClick={onClickVelog}
                />
              </Tooltip>
            </Box1_Btns>
          </Box1_Zoom_Wrapper>
        </Box1_Zoom>
      </Box1>
      <Box2>
        <Box2_Slide bottom>
          <Box2_Content_Wrapper>
            <Box2_Content>
              React, Next.js, Recoil, Emotion, Apollo-Client, Graphql을 사용한
              웹 개발 경험이 있습니다.
            </Box2_Content>
            <Box2_Content>
              비록 신입이지만 1-2년 경력의 개발자 역량을 갖췄다고 생각합니다.
            </Box2_Content>
          </Box2_Content_Wrapper>
        </Box2_Slide>
        <ReactLottie src="https://embed.lottiefiles.com/animation/93699"></ReactLottie>
      </Box2>
      <Box3>
        <ThinkLottie src="https://embed.lottiefiles.com/animation/89660"></ThinkLottie>
        <Box3_Slide>
          <Box3_Content_Wrapper>
            <Box3_Content>
              평상시 웹서비스를 이용하면서 개인이 콘텐츠를 생산해 양방향으로
              소통하는 페이스북의 등장과, 소셜로그인과 같이 기존의 로그인 보다
              한층 더 편해진 서비스들을 접하면서, 이 분야의 전망과 관심이
              생겼고, 첫 코딩으로 국비지원 자바스프링 풀스텍을 배웠습니다.
            </Box3_Content>
            <Box3_Content>
              처음으로 웹개발을 접하면서, 내가 어떻게 코드를 작성하는지에 따라
              사용자에게 직접적인 경험을 주는 프론트엔드가 저와 맞는다고 생각이
              들었고 확신이 섰습니다.
            </Box3_Content>
          </Box3_Content_Wrapper>
        </Box3_Slide>
      </Box3>
      <Box4>
        <Box4_Slide>
          <Box4_Content_Wrapper>
            <Box4_Content>
              졸업 후, 프론트엔드 개발자가 되어야겠다고 마음을 먹은 후, 리액트
              훅스 등 최신 기술 스택을 이용한 12주 과정 프론트엔드 부트캠프
              코드캠프를 수료했습니다.
            </Box4_Content>
            <Box4_Content>(2022. 03. 14 ~ 2022. 06. 03)</Box4_Content>
          </Box4_Content_Wrapper>
        </Box4_Slide>
        <StudyLottie src="https://embed.lottiefiles.com/animation/90714"></StudyLottie>
      </Box4>
      <Box5>
        <Box5_Content_Wrapper>
          <Box5_Content>
            부트캠프 중 매주 랜덤으로 페어가 바뀌었고, 한 주의 평가를 페어에게
            받았습니다.
          </Box5_Content>
          <Box5_Content>
            리뷰에서 코드가 창의적이라는 평가와 커뮤니케이션에서 긍정적인 평가는
            빠진적이 없습니다.
          </Box5_Content>
        </Box5_Content_Wrapper>
        <Box5_Review_Wrapper>
          <Box5_Review></Box5_Review>
          <Box5_Review></Box5_Review>
          <Box5_Review></Box5_Review>
        </Box5_Review_Wrapper>
      </Box5>
    </Wrapper>
  );
}
