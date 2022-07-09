import styled from "@emotion/styled";
import axios from "axios";
import { useEffect, useState } from "react";
import Zoom from "react-reveal/Zoom";
import {
  Box1,
  Box1_1,
  Box1_Content,
  Box1_Title,
  Box1_Zoom,
  Box1_Zoom_Wrapper,
  Wrapper,
} from "../src/components/units/Home.styles";

// const Wrapper = styled.div`
//   width: 1200px;
//   display: flex;
//   flex-direction: column;
//   margin: auto;
//   margin-top: 500px;
// `;

// const Photo1 = styled.div`
//   display: flex;
//   width: 100%;
// `;

// const Photo1Img = styled.img`
//   height: 300px;
//   border-radius: 15px;
//   width: 100%;
//   object-fit: cover;
//   margin: 10px;
// `;

// const Photo2 = styled.div`
//   display: flex;
//   width: 100%;
// `;

// const Photo2Img = styled.img`
//   height: 300px;
//   border-radius: 15px;
//   width: 100%;
//   object-fit: cover;
//   margin: 10px;
// `;

// const Photo3 = styled.div`
//   display: flex;
//   width: 100%;
// `;

// const Photo3Img = styled.img`
//   height: 300px;
//   border-radius: 15px;
//   width: 100%;
//   object-fit: cover;
//   margin: 10px;
// `;

export default function Home() {
  // const [loadImg, setLoadImg] = useState("");
  // const [loadImg2, setLoadImg2] = useState("");
  // const [loadImg3, setLoadImg3] = useState("");
  // const [loadImg4, setLoadImg4] = useState("");
  // const [loadImg5, setLoadImg5] = useState("");
  // const [loadImg6, setLoadImg6] = useState("");

  // useEffect(() => {
  //   const imgfunction = async () => {
  //     const result = await axios.get("https://dog.ceo/api/breeds/image/random");
  //     setLoadImg(result.data.message);
  //     console.log(result);
  //   };
  //   imgfunction();
  // }, []);

  // useEffect(() => {
  //   const imgfunction = async () => {
  //     const result = await axios.get("https://dog.ceo/api/breeds/image/random");
  //     setLoadImg2(result.data.message);
  //     console.log(result);
  //   };
  //   imgfunction();
  // }, []);

  // useEffect(() => {
  //   const imgfunction = async () => {
  //     const result = await axios.get("https://dog.ceo/api/breeds/image/random");
  //     setLoadImg3(result.data.message);
  //     console.log(result);
  //   };
  //   imgfunction();
  // }, []);

  // useEffect(() => {
  //   const imgfunction = async () => {
  //     const result = await axios.get("https://dog.ceo/api/breeds/image/random");
  //     setLoadImg4(result.data.message);
  //     console.log(result);
  //   };
  //   imgfunction();
  // }, []);

  // useEffect(() => {
  //   const imgfunction = async () => {
  //     const result = await axios.get("https://dog.ceo/api/breeds/image/random");
  //     setLoadImg5(result.data.message);
  //     console.log(result);
  //   };
  //   imgfunction();
  // }, []);

  // useEffect(() => {
  //   const imgfunction = async () => {
  //     const result = await axios.get("https://dog.ceo/api/breeds/image/random");
  //     setLoadImg6(result.data.message);
  //     console.log(result);
  //   };
  //   imgfunction();
  // }, []);

  return (
    <Wrapper>
      {/* <Photo1>
          <Photo1Img src={loadImg} />
      </Photo1>
      <Photo2>
        <Photo2Img src={loadImg2} />
        <Photo2Img src={loadImg3} />
        <Photo2Img src={loadImg4} />
      </Photo2>
      <Photo3>
        <Photo3Img src={loadImg5} />
        <Photo3Img src={loadImg6} />
      </Photo3> */}
      <Box1>
        <Box1_Zoom>
          <Box1_Zoom_Wrapper>
            <Box1_Title style={{ color: "white" }}>안녕하세요</Box1_Title>
            <Box1_Content style={{ color: "white" }}>
               사용자의 입장에서 코드를 작성하는 프론트엔드 개발자 조준영
              입니다!
            </Box1_Content>
          </Box1_Zoom_Wrapper>
        </Box1_Zoom>
      </Box1>
    </Wrapper>
  );
}
