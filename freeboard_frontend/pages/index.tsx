import styled from "@emotion/styled";
import axios from "axios";
import { useEffect, useState } from "react";

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
  border: 1px solid black;
  width: 100%;
  object-fit: cover;
`;

const Photo2 = styled.div`
  display: flex;
  width: 100%;
`;

const Photo2Img = styled.img`
  height: 300px;
  border: 1px solid black;
  width: 100%;
  object-fit: cover;
`;

const Photo3 = styled.div`
  display: flex;
  width: 100%;
`;

const Photo3Img = styled.img`
  height: 300px;
  border: 1px solid black;
  width: 100%;
  object-fit: cover;
`;

export default function Home() {
  const [loadImg, setLoadImg] = useState("");

  useEffect(() => {
    const imgfunction = async () => {
      const result = await axios.get("https://dog.ceo/api/breeds/image/random");
      setLoadImg(result.data.message);
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
        <Photo2Img src={loadImg} />
        <Photo2Img src={loadImg} />
        <Photo2Img src={loadImg} />
      </Photo2>
      <Photo3>
        <Photo3Img src={loadImg} />
        <Photo3Img src={loadImg} />
      </Photo3>
    </Wrapper>
  );
}
