import axios from "axios";
import { useEffect, useState } from "react";

export default function Quiz17() {
  const [loadImg, setLoadImg] = useState("");

  useEffect(() => {
    const imgfunction = async () => {
      const result = await axios.get("https://dog.ceo/api/breeds/image/random");
      setLoadImg(result.data.message);
    };
    imgfunction();
  }, []);

  return (
    <>
      <img src={loadImg} />
    </>
  );
}
