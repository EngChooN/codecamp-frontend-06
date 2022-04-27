import { useEffect, useRef, useState } from "react";
import LazyLoad from "react-lazyload";

export default function ImagePreloadPage() {
  const [imgTag, setImgTag] = useState<HTMLImageElement>();
  const divRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = "https://wallpaperaccess.com/full/11737.jpg";
    img.onload = () => {
      setImgTag(img);
    };
  }, []);

  const onClickPreload = () => {
    if (imgTag) divRef.current?.appendChild(imgTag);
  };

  return (
    <div>
      <div ref={divRef}></div>
      <button onClick={onClickPreload}>이미지 보여주기</button>
      ========================================================
      <LazyLoad height={200}>
        <img src="https://wallpaperaccess.com/full/11737.jpg" />
      </LazyLoad>
      <LazyLoad height={500}>
        <img src="https://wallpaperaccess.com/full/11737.jpg" />
      </LazyLoad>
      <LazyLoad height={800}>
        <img src="https://wallpaperaccess.com/full/11737.jpg" />
      </LazyLoad>
      <LazyLoad height={900}>
        <img src="https://wallpaperaccess.com/full/11737.jpg" />
      </LazyLoad>
      <LazyLoad height={1200}>
        <img src="https://wallpaperaccess.com/full/11737.jpg" />
      </LazyLoad>
      <LazyLoad height={1500}>
        <img src="https://wallpaperaccess.com/full/11737.jpg" />
      </LazyLoad>
      <LazyLoad height={1800}>
        <img src="https://wallpaperaccess.com/full/11737.jpg" />
      </LazyLoad>
      <LazyLoad height={2100}>
        <img src="https://wallpaperaccess.com/full/11737.jpg" />
      </LazyLoad>
      <LazyLoad height={2400}>
        <img src="https://wallpaperaccess.com/full/11737.jpg" />
      </LazyLoad>
      <LazyLoad height={2700}>
        <img src="https://wallpaperaccess.com/full/11737.jpg" />
      </LazyLoad>
      =======================================================
      <img src="/images/gromit2.webp" />
    </div>
  );
}
