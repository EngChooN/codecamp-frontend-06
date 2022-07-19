import { useRouter } from "next/router";
import Fade from "react-reveal/Fade";

import {
  Bounce_Wrapper,
  Box1,
  Box1_Btns,
  Box1_Btn_Github,
  Box1_Btn_Velog,
  Box1_Content,
  Box1_SubContent,
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
  Box5_Slide,
  Box6,
  Box6_Content,
  Box6_Content_Wrapper,
  Box6_Slide,
  HelloLottie,
  Pencil_Lottie,
  ReactLottie,
  Review_Content,
  Review_Content_Wrapper,
  Review_Name,
  Review_Tile,
  StudyLottie,
  ThinkLottie,
  Wrapper,
} from "../src/components/units/Home.styles";
import { Tooltip } from "antd";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  // useEffect(() => {
  //   const imgfunction = async () => {
  //     const result = await axios.get("https://dog.ceo/api/breeds/image/random");
  //     setLoadImg(result.data.message);
  //     console.log(result);
  //   };
  //   imgfunction();
  // }, []);
  const wheel = useRef(null);
  const [scroll, setScroll] = useState(0);

  const scrollFunction = () => {
    if (scroll > 0 && scroll < 833) {
      wheel.current.scrollIntoView({ behavior: "smooth" });
    } else {
      return;
    }
  };

  useEffect(() => {
    scrollFunction();
  }, [scroll]);

  const onClickGithub = () => {
    window.open("https://github.com/EngChooN");
  };

  const onClickVelog = () => {
    window.open("https://velog.io/@aimzero9303");
  };

  const onScrollFunction = () => {
    // setScroll(window.scrollY);
  };

  return (
    <Wrapper onWheel={onScrollFunction}>
      <Box1>
        <Fade>
          <Box1_Zoom_Wrapper>
            <HelloLottie src="https://embed.lottiefiles.com/animation/76787"></HelloLottie>
            {/* <Box1_Zoom> */}
            <Box1_Content>
               사용자의 입장에서 코드를 작성하는 프론트엔드 개발자 조준영
              입니다.
            </Box1_Content>
            {/* </Box1_Zoom> */}
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
            <Box1_SubContent>
              ⚙️ 해당 페이지는 MacBook Pro 14-inch의 Chrome환경에서
              제작되었습니다.
            </Box1_SubContent>
          </Box1_Zoom_Wrapper>
        </Fade>
      </Box1>
      <Box2 ref={wheel}>
        <Box2_Content_Wrapper>
          <Box2_Slide bottom>
            <Box2_Content>
              React, Next.js, Recoil, Emotion, Apollo-Client, Graphql을 사용한
              웹 개발 경험이 있습니다.
            </Box2_Content>
          </Box2_Slide>
          <Box2_Slide bottom>
            <Box2_Content>
              비록 신입이지만 1-2년 경력의 개발자 역량을 갖췄다고 생각합니다.
            </Box2_Content>
          </Box2_Slide>
        </Box2_Content_Wrapper>
        <Fade>
          <ReactLottie src="https://embed.lottiefiles.com/animation/93699"></ReactLottie>
        </Fade>
      </Box2>
      <Box3>
        <Fade>
          <ThinkLottie src="https://embed.lottiefiles.com/animation/89660"></ThinkLottie>
        </Fade>
        <Box3_Content_Wrapper>
          <Box3_Slide right>
            <Box3_Content>
              평상시 웹서비스를 이용하면서 개인이 콘텐츠를 생산해 양방향으로
              소통하는 페이스북의 등장과, 소셜로그인과 같이 기존의 로그인 보다
              한층 더 편해진 서비스들을 접하면서, 이 분야의 전망과 관심이
              생겼고, 첫 코딩으로 국비지원 자바스프링 풀스텍을 배웠습니다.
            </Box3_Content>
          </Box3_Slide>
          <Box3_Slide right>
            <Box3_Content>
              처음으로 웹개발을 접하면서, 내가 어떻게 코드를 작성하는지에 따라
              사용자에게 직접적인 경험을 주는 프론트엔드가 저와 맞는다고 생각이
              들었고 확신이 섰습니다.
            </Box3_Content>
          </Box3_Slide>
        </Box3_Content_Wrapper>
      </Box3>
      <Box4>
        <Box4_Content_Wrapper>
          <Box4_Slide left>
            <Box4_Content>
              졸업을 하고 프론트엔드 개발자가 되어야겠다고 마음을 먹은 후,
              리액트 훅스 등 최신 기술 스택을 이용한 12주 과정 프론트엔드
              부트캠프 코드캠프를 수료했습니다.
            </Box4_Content>
          </Box4_Slide>
          <Box4_Slide left>
            <Box4_Content>(2022. 03. 14 ~ 2022. 06. 03)</Box4_Content>
          </Box4_Slide>
        </Box4_Content_Wrapper>
        <Fade>
          <StudyLottie src="https://embed.lottiefiles.com/animation/90714"></StudyLottie>
        </Fade>
      </Box4>
      <Box6>
        <Fade>
          <Pencil_Lottie src="https://embed.lottiefiles.com/animation/40991"></Pencil_Lottie>
        </Fade>
        <Box6_Content_Wrapper>
          <Box6_Slide bottom>
            <Box6_Content>
              수료 이후 멈추지 않고 발전하기 위해 매일 공부한 것을 블로그로
              작성중이고,
            </Box6_Content>
          </Box6_Slide>
          <Box6_Slide bottom>
            <Box6_Content>
              팀프로젝트 리팩토링을 했으며 공유 오피스를 구해 수료생들과의
              스터디를 진행하고 있습니다.
            </Box6_Content>
          </Box6_Slide>
        </Box6_Content_Wrapper>
      </Box6>
      <Box5>
        <Box5_Slide>
          <Box5_Content_Wrapper>
            <Box5_Content>
              부트캠프 중 매주 랜덤으로 페어가 바뀌었고, 매번 한 주의 평가를
              각각의 페어에게 받았습니다.
            </Box5_Content>
          </Box5_Content_Wrapper>
        </Box5_Slide>
        <Box5_Review_Wrapper>
          <Bounce_Wrapper>
            <Box5_Review>
              <Review_Name>우** 님의 PF-Review 🙋🏻‍♂️</Review_Name>
              <Review_Content_Wrapper>
                <Review_Tile>🎙 커뮤니케이션 평가 </Review_Tile>
                <Review_Content>
                  의사소통시 상대방 또는 본인의 문제와 상황에 대해서 제대로
                  인지를 하고 소통하시는 것 같습니다. 제가 조준영님께 질문을
                  하거나, 조준영님이 저에게 질문을 할때 질문의 포인트를 정확하게
                  잘 잡아내시는것 같습니다. 그리고 상대방의 감정에 대해서도 잘
                  공감하고 배려와 매너있는 자세가 좋은 것 같습니다.
                </Review_Content>
                <Review_Tile>👍🏻 잘했던 부분</Review_Tile>
                <Review_Content>
                  자신이 모르는 부분을 정확히 집어내어 질문을 하고 상대방의
                  질문의 요지를 잘 집어내는 능력이 있습니다 - 또 다른 PF인
                  문주현님이 첫날부터 학습과정에 어려움이 있었는데 그때 마다
                  도움을 많이 주는 모습이 인상적이었습니다.
                </Review_Content>
                <Review_Tile>🤔 개선하면 좋을 부분 </Review_Tile>
                <Review_Content>
                  1주일의 짧은 시간을 지내면서는 단점보다 장점이 많이 보였기에
                  개선할 부분은 딱히 보이지 않았습니다.
                </Review_Content>
              </Review_Content_Wrapper>
            </Box5_Review>
            <Box5_Review>
              <Review_Name>문** 님의 PF-Review 🙋🏻‍♂️</Review_Name>
              <Review_Content_Wrapper>
                <Review_Tile>🎙 커뮤니케이션 평가 </Review_Tile>
                <Review_Content>
                  첫날부터 되게 차분하고 점잖다는 느낌을 받았습니다. 마치 잔잔한
                  해수면 같아 보였습니다. 수업 진행 중에 막히는 부분을 본 적 이
                  없었습니다. 전공자이며 이미 프로젝트를 해본 사람으로써 여유가
                  느껴졌습니다.
                </Review_Content>
                <Review_Tile>👍🏻 잘했던 부분</Review_Tile>
                <Review_Content>
                  남의 일에도 발 벗고 열정적으로 도와주려는 모습이 인상
                  깊었습니다.
                </Review_Content>
                <Review_Tile>🤔 개선하면 좋을 부분 </Review_Tile>
                <Review_Content>
                  코로나 때문에 같이 있었던 시간이 적어서 또한 본인이 여유가
                  없어서 상대방의 개선할 부분을 찾지 못했습니다.
                </Review_Content>
              </Review_Content_Wrapper>
            </Box5_Review>
            <Box5_Review>
              <Review_Name>윤** 님의 PF-Review 🙋🏻‍♂️</Review_Name>
              <Review_Content_Wrapper>
                <Review_Tile>🎙 커뮤니케이션 평가 </Review_Tile>
                <Review_Content>
                  일주일중 처음으로 페어프렌즈가 되었지만 커뮤니케이션도
                  잘되었고 이런저런 얘기도 할 수 있어서 좋았습니다
                </Review_Content>
                <Review_Tile>👍🏻 잘했던 부분</Review_Tile>
                <Review_Content>
                  오류가 생기면 즉각적으로 해결하려하시고 이런저런 방법으로
                  도전하시는 모습이 보기 좋았고 제가 생각도 하지 못했던 방법으로
                  코드를 작성하시는 창의력도 잘한 부분인것 같습니다
                </Review_Content>
                <Review_Tile>🤔 개선하면 좋을 부분 </Review_Tile>
                <Review_Content>
                  하루본거라 개선할 부분은 잘 모르겠습니다...! 지금처럼 계속
                  오류 개선을 위한 적극적인 모습과 창의적인 코딩을 보여주신다면
                  좋은 결과가 있을것 이라고 생각합니다!!
                </Review_Content>
              </Review_Content_Wrapper>
            </Box5_Review>
            <Box5_Review>
              <Review_Name>박** 님의 PF-Review 🙋🏻‍♂️</Review_Name>
              <Review_Content_Wrapper>
                <Review_Tile>🎙 커뮤니케이션 평가 </Review_Tile>
                <Review_Content>
                  커뮤니케이션에 있어 털털하고 적극적입니다. 처음엔 살짝
                  부담스러운 감이 있었지만 그 성향 덕분에 오히려 금방 편하고
                  여러 문제를 도움 받을 수 있었던 것 같습니다. 다수와 대화를
                  하는 상황 에서는 여럿과 두루 잘 어울리는 점도 인상 깊었습니다.
                </Review_Content>
                <Review_Tile>👍🏻 잘했던 부분</Review_Tile>
                <Review_Content>
                  본인의 컨디션 조절이 굉장히 좋았던 것 같습니다. 기복이 없고
                  정신력이 좋아 여러 상황에서도 평정심이 잘 유지 되어 있는 것
                  같습니다. 코딩에 있어선 자신의 독창성을 지키려고 하는 모습이
                  인상적 이였습니다. 큰 틀을 벗어나지 않으며 자신의 생각을
                  더하는 모습이 좋았습니다.
                </Review_Content>
                <Review_Tile>🤔 개선하면 좋을 부분 </Review_Tile>
                <Review_Content>
                  한 가지에 빠지면 끝을 보고 싶어하는 경향이 있었던 것 같습니다.
                  좋은 습관 이라 생각하지만 빠르게 배워가는 이 시점 에서는
                  자칫하면 독으로 받아들여 질 수 도 있을 것 같습니다.
                </Review_Content>
              </Review_Content_Wrapper>
            </Box5_Review>
            <Box5_Review>
              <Review_Name>김** 님의 PF-Review 🙋🏻‍♂️</Review_Name>
              <Review_Content_Wrapper>
                <Review_Tile>🎙 커뮤니케이션 평가 </Review_Tile>
                <Review_Content>
                  너무 편하고 좋았습니다. 일단 성격 자체가 너무 유쾌하신 분이라
                  말을 걸기 너무 편했고, 힘들때 긍정적인 에너지를 많이
                  받았습니다.
                </Review_Content>
                <Review_Tile>👍🏻 잘했던 부분</Review_Tile>
                <Review_Content>
                  코드의 창의성이 있습니다. 저는 보통 남을 따라하는 코딩을 많이
                  하는데 준영님은 자기의 머리로 떠오르는 코드를 치시는 부분이
                  잘했던 것 같습니다.
                </Review_Content>
                <Review_Tile>🤔 개선하면 좋을 부분 </Review_Tile>
                <Review_Content>
                  저 개인적으로는 개선해야 할 부분을 찾지 못했습니다.
                </Review_Content>
              </Review_Content_Wrapper>
            </Box5_Review>
            <Box5_Review>
              <Review_Name>윤** 님의 PF-Review 🙋🏻‍♂️</Review_Name>
              <Review_Content_Wrapper>
                <Review_Tile>🎙 커뮤니케이션 평가 </Review_Tile>
                <Review_Content>
                  준영님과의 커뮤니케이션은 저에겐 정말 즐거운 시간이었습니다
                  제가 문제가 발생했을때 적극적으로 도와주시고 준영님이
                  창의적으로 작성하신 코드를 보며 같이 얘기나누는 시간이
                  저에게는 굉장한 발전의 시간이었다고 생각합니다. 커뮤니케이션이
                  활발하다보니 너무 즐거운 한주를 보낸것 같아 준영님께 감사한
                  마음입니다
                </Review_Content>
                <Review_Tile>👍🏻 잘했던 부분</Review_Tile>
                <Review_Content>
                  코드를 굉장히 창의적으로 작성하시고 문제가 생겼을 때
                  적극적으로 문제를 해결하시려 하시며 pf의 문제까지 해결을 위해
                  노력하시는 모습이 너무 좋았습니다 게시물 번호 부여하는 로직
                  작성했던 시간은 정말 너무 즐거웠던 경험입니다ㅎㅎ 저와같이
                  과제도 아닌것을 구현했을 때 정말 즐거웠고 해결했을 때 너무
                  뿌듯했습니다 다 준영님 덕분이라고 생각합니다!!
                </Review_Content>
                <Review_Tile>🤔 개선하면 좋을 부분 </Review_Tile>
                <Review_Content>
                  사실 개선할 부분은 없다고 생각합니다 지금도 충분히 노력하고
                  계시고 창의적이고 적극적으로 코딩에 임하시고 계셔서 지금처럼
                  쭈욱하신다면 정말 좋은 개발자가 되실거라고 생각합니다.
                  한주동안 감사했어요ㅎㅎ
                </Review_Content>
              </Review_Content_Wrapper>
            </Box5_Review>
          </Bounce_Wrapper>
        </Box5_Review_Wrapper>
      </Box5>
    </Wrapper>
  );
}
