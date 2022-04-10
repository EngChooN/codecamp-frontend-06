import styled from "@emotion/styled";
import axios from "axios";
import { useEffect, useState } from "react";
import Mian1 from "../src/components/units/main/Main1.container";

const Wrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 120px;
`;

const Photo1 = styled.div`
  display: flex;
  width: 100%;
`;

const Photo1Img = styled.img`
  height: 300px;
  border-radius: 15px;
  width: 100%;
  object-fit: cover;
  margin: 10px;
`;

const Photo2 = styled.div`
  display: flex;
  width: 100%;
`;

const Photo2Img = styled.img`
  height: 300px;
  border-radius: 15px;
  width: 100%;
  object-fit: cover;
  margin: 10px;
`;

const Photo3 = styled.div`
  display: flex;
  width: 100%;
`;

const Photo3Img = styled.img`
  height: 300px;
  border-radius: 15px;
  width: 100%;
  object-fit: cover;
  margin: 10px;
`;

export default function Home() {
  const [loadImg, setLoadImg] = useState("");
  const [loadImg2, setLoadImg2] = useState("");
  const [loadImg3, setLoadImg3] = useState("");
  const [loadImg4, setLoadImg4] = useState("");
  const [loadImg5, setLoadImg5] = useState("");
  const [loadImg6, setLoadImg6] = useState("");

  useEffect(() => {
    const imgfunction = async () => {
      const result = await axios.get("https://dog.ceo/api/breeds/image/random");
      setLoadImg(result.data.message);
      console.log(result);
    };
    imgfunction();
  }, []);

  useEffect(() => {
    const imgfunction = async () => {
      const result = await axios.get("https://dog.ceo/api/breeds/image/random");
      setLoadImg2(result.data.message);
      console.log(result);
    };
    imgfunction();
  }, []);

  useEffect(() => {
    const imgfunction = async () => {
      const result = await axios.get("https://dog.ceo/api/breeds/image/random");
      setLoadImg3(result.data.message);
      console.log(result);
    };
    imgfunction();
  }, []);

  useEffect(() => {
    const imgfunction = async () => {
      const result = await axios.get("https://dog.ceo/api/breeds/image/random");
      setLoadImg4(result.data.message);
      console.log(result);
    };
    imgfunction();
  }, []);

  useEffect(() => {
    const imgfunction = async () => {
      const result = await axios.get("https://dog.ceo/api/breeds/image/random");
      setLoadImg5(result.data.message);
      console.log(result);
    };
    imgfunction();
  }, []);

  useEffect(() => {
    const imgfunction = async () => {
      const result = await axios.get("https://dog.ceo/api/breeds/image/random");
      setLoadImg6(result.data.message);
      console.log(result);
    };
    imgfunction();
  }, []);

  return (
    <Wrapper>
      <Photo1>
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
      </Photo3>
    </Wrapper>
  );
}
