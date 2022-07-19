import { useState } from "react";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
// import { Document, Page, pdfjs } from "react-pdf";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  Carousel_Wrapper,
  Content,
  MenuTitle,
  News,
  NewsWrapper,
  Review,
  SideBar,
  Sidebar_Title1,
  Sidebar_Title2,
  Sidebar_Title3,
  Sidebar_Title4,
  Sidebar_Title5,
  SideBar_Wrapper,
  Slider1,
  SliderChild,
  Title,
  Wrapper,
} from "../../../src/components/units/About.styles";

export default function AboutPage() {
  // workerSrc 정의 하지 않으면 pdf 보여지지 않습니다.
  // pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

  const [aboutOne, setAboutOne] = useState(true);
  const [aboutTwo, setAboutTwo] = useState(false);
  const [aboutThree, setAboutThree] = useState(false);
  const [aboutFour, setAboutFour] = useState(false);
  const [aboutFive, setAboutFive] = useState(false);

  const onClickOne = () => {
    setAboutOne(true);
    setAboutTwo(false);
    setAboutThree(false);
    setAboutFour(false);
    setAboutFive(false);
  };

  const onClickTwo = () => {
    setAboutOne(false);
    setAboutTwo(true);
    setAboutThree(false);
    setAboutFour(false);
    setAboutFive(false);
  };

  const onClickThree = () => {
    setAboutOne(false);
    setAboutTwo(false);
    setAboutThree(true);
    setAboutFour(false);
    setAboutFive(false);
  };

  const onClickFour = () => {
    setAboutOne(false);
    setAboutTwo(false);
    setAboutThree(false);
    setAboutFour(true);
    setAboutFive(false);
  };

  const onClickFive = () => {
    setAboutOne(false);
    setAboutTwo(false);
    setAboutThree(false);
    setAboutFour(false);
    setAboutFive(true);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
  };

  return (
    <Wrapper>
      <SideBar_Wrapper>
        <Fade>
          <MenuTitle>About</MenuTitle>
          <SideBar>
            <Sidebar_Title1 onClick={onClickOne} one={aboutOne}>
              소통하는 개발자입니다.
            </Sidebar_Title1>
            <Sidebar_Title2 onClick={onClickTwo} two={aboutTwo}>
              유저친화적인 경험을 선사하고 싶습니다.
            </Sidebar_Title2>
            <Sidebar_Title3 onClick={onClickThree} three={aboutThree}>
              현재 상태에 만족하지 않습니다.
            </Sidebar_Title3>
            <Sidebar_Title4 onClick={onClickFour} four={aboutFour}>
              문제에 직면해도 맞서는 개발자입니다.{" "}
            </Sidebar_Title4>
            <Sidebar_Title5 onClick={onClickFive} five={aboutFive}>
              저는 이러한 성장을 하고 싶습니다.
            </Sidebar_Title5>
          </SideBar>
        </Fade>
      </SideBar_Wrapper>
      <NewsWrapper>
        {aboutOne && (
          <Slide right>
            <News>
              <Title>소통하는 개발자입니다.</Title>
              <Content>
                개발자에게 있어서 소통은 중요한 요소 중 하나라고 생각합니다.
                <br />
                <br />
                부트캠프를 수강하면서 백엔드, 디자이너님과 마지막 팀프로젝트를
                진행하게 되었습니다.
                <br />
                <br /> 첫 결과물이 나왔을 때, 각자 생각하는 추구하는 방향이 달라
                견해차이가 발생했습니다.
                <br />
                <br /> 그러한 상황에서 협업을 하는데 있어 소통의 중요성을
                느꼈습니다.
                <br />
                <br />그 이후에는 주기적인 회의를 통하여 서로의 의견을 소통하여
                프로젝트의 수정안을 타협했고, 각자의 작업 리스트와 작업 하면서
                일어났던 이슈사항들을 공유하는 시간들을 가졌습니다.
                <br />
                <br /> 앞선 노력 덕분인지, 그 이후의 팀프로젝트를 진행하면서
                견해차이로 인한 큰 문제는 없었습니다.
              </Content>
            </News>
          </Slide>
        )}
        {aboutTwo && (
          <Slide right>
            <News>
              <Title>유저친화적인 경험을 선사하고 싶습니다.</Title>
              <Content>
                매번 코드를 작성하고 테스트를 할 때, 내가 사용자의 입장이라면
                어떨까? 하는 생각을 한번도 안해본 적이 없습니다.
                <br />
                <br />
                팀프로젝트를 진행하면서 다양한 기능들도 좋지만, 내부 프로세스
                부분에서 세세하게 접근하려고 노력했습니다.
                <br />
                <br /> 글을 쓰고 어떤 페이지로 라우팅해야 다음 행동을 취할 때
                좀더 사용자 입장에서 번거롭지 않는지, 회원가입 인증 방식의
                단계화라던지, 어느 위치에 번역하는 버튼과 번역 텍스트를
                배치해야, 기존의 글과 어울리고 편하게 가독할 수 있는지 부분에
                대하여 많은 고민을 하였습니다.
                <br />
                <br /> 다음 코드캠프 기수에게 발표 후, 피드백을 받은 부분에서
                편의성과 깔끔한 디자인으로 좋은 평가를 받았습니다.
                <br />
                <br />
                {/* 캐러셀 */}
                <Carousel_Wrapper>
                  <Slider1 {...settings}>
                    <SliderChild>
                      <Review>
                        🙋🏻‍♂️ 페이지 UI 자체는 귀엽고 보기 쉽게 해주신 것 같습니다.
                        요즘 사람들의 성향에 맞춰 짤이나 영상같은 것들도 볼 수
                        있게 구현해 주신 점이 좋았습니다.
                      </Review>
                    </SliderChild>
                    <SliderChild>
                      <Review>
                        🙋🏻‍♂️ 깔끔한 UI가 영어권 사이트 보는 것 같았어요. 그리고
                        이름은 자동으로 골뱅이 앞에 있는 것 따서 만들어주는 것,
                        바로 촬영해서 올릴 수 있게 한 점, 번역을 넣어놓은 게
                        좋았습니다.
                      </Review>
                    </SliderChild>
                    <SliderChild>
                      <Review>
                        🙋🏻‍♂️ 좋아요와 북마크는 로그인 데이터에 남아있는 부분
                        구현이 좋았고 채팅방의 기존 대화 내용 저장도 좋았다
                      </Review>
                    </SliderChild>
                  </Slider1>
                </Carousel_Wrapper>
              </Content>
            </News>
          </Slide>
        )}
        {aboutThree && (
          <Slide right>
            <News>
              <Title>현재 상태에 만족하지 않습니다.</Title>
              <Content>
                앞서 말했듯이 팀 프로젝트 피드백에 좋은 평가가 있다면, 지적하는
                평가도 있습니다. 저는 현재 상태에 만족하지 않는다고 말할 수
                있습니다.
                <br />
                <br />
                피드백을 기반으로 각자 맡은 부분에 대해서 리팩토링을
                진행하였습니다. 프로젝트 기획 당시 시간적 문제로 반응형은
                염두하지 못했고, 따라서 그에 대한 지적도 많이 받았습니다.
                <br />
                <br /> 100명 중에 100명을 전부 만족 시킬 수는 없지만, 그렇다고
                현재 상태에서 만족해서는 안된다고 생각합니다.
                <br />
                <br /> 반응형과 스크롤 시 검색창이 같이 따라내려오지 않아서
                불편하다는 피드백을 최대한 수용하여 리팩토링을 진행했습니다.
                또한 디자인적으로도 좀더 통일 감을 주기 위하여 약간의 수정들을
                거쳤습니다.
                <br />
                <br />
                {/* Pdf 파일 뷰어 */}
                {/* <Document file={"/files/LangB_bad.pdf"}>
                  <Page height={600} pageNumber={1} />
                </Document> */}
                {/* 캐러셀 */}
                <Carousel_Wrapper>
                  <Slider1 {...settings}>
                    <SliderChild>
                      <Review>
                        🙅🏻‍♂️ 모바일 화면에서 비율 깨짐, 채팅 기능 사용시 포인트가
                        필요함. https를 하지않음. 로고를 클릭하면 메인페이지가
                        아닌 랜딩페이지로 이동함.
                      </Review>
                    </SliderChild>
                    <SliderChild>
                      <Review>
                        🙅🏻‍♂️ garden 화면에 무한스크롤 될 때 검색창까지 같이
                        내려가는 점 등 전체화면이 스크 롤 되는 것도 수정되었으면
                        좋겠습니다.
                      </Review>
                    </SliderChild>
                  </Slider1>
                </Carousel_Wrapper>
                <br />그 외에도, useEffect & useMemo & useCallback 등 기존의
                배웠던 Hooks에 대해서 부족한 부분을 현재 공부중이며, 매일매일
                블로그로 기록하고 있습니다. 또한 앞서 말했듯이, 마음이 맞는
                수료생들과 공유 오피스에서 스터디를 진행중입니다.
              </Content>
            </News>
          </Slide>
        )}
        {aboutFour && (
          <Slide right>
            <News>
              <Title>문제에 직면해도 맞서는 개발자입니다.</Title>
              <Content>
                어떠한 문제가 있더라도 포기보다는 계속 맞서보는 개발자라고 말할
                수 있습니다.
                <br />
                <br />
                팀프로젝트 당시에 socket.io를 이용해 채팅을 구현해야 하는
                상황이였습니다.
                <br />
                <br />
                발표까지 3일 남은 상황에서 socket.io가 처음인 데다가, 리액트로
                만들어진 소스가아니여서 이해를 하나도 못한채 2일이라는 시간이
                지났습니다.
                <br />
                <br />
                하지만 마지막날 계속 소스를 봐보고, 구글링하며 해석하려고
                노력해서 그런지 소스들이 눈에 보이기 시작했고, 다행히 채팅 기능
                구현에 성공했던 경험이 있습니다.
                <br />
                <br />
                저는 실력은 고통의 총합이라는 말에 동의합니다.
                <br />
                <br />
                문제 해결 과정에서 비록 힘들어도 끝까지 맞서서 마지막에
                해결하게된다면, 그것은 곧 저의 실력이 된다고 생각합니다.
              </Content>
            </News>
          </Slide>
        )}
        {aboutFive && (
          <Slide right>
            <News>
              <Title>저는 이러한 성장을 하고 싶습니다.</Title>
              <Content>
                매번 내가 짯던 코드에 대해서 왜?{"("}Why{")"}라는 의문을 가진
                상태로 더 나은 코드로 발전 시킬 수 있는 개발자가 되고 싶습니다.
                <br />
                <br />
                사용자 경험을 중요시하는 마음가짐과 유지보수가 가능한 코드를
                작성하는 능력을 키우고 싶습니다.
                <br />
                <br />
                새로운것에 대해 도전의식과 호기심을 잃지 않고, 동료들의 신뢰를
                얻을 수 있는 태도로 함께 일하고 싶은 동료가 되고싶습니다.
              </Content>
            </News>
          </Slide>
        )}
      </NewsWrapper>
    </Wrapper>
  );
}
