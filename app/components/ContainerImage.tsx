// import React from "react";
import Image, { ImageProps, StaticImageData } from "next/image";
import "./ContainerImage.css";
import { motion, useScroll } from "framer-motion";
// to touch css class properties
// import { useRef, useEffect } from "react";
interface Props {
  src: string | StaticImageData;
  alt: string;
}

const ContainerImage = ({ src, alt }: Props) => {
  // const ref = useRef(null);

  // useEffect(() => {
  //   const element2 = ref.current;
  //   console.log(`log : ${element2}`);
  //   const element = document.querySelector(".imgBloc");
  //   console.log(`log Element : ${element}`);
  // }, []);

  const x = 8.7;
  const y = 8.7;
  const w = 30;
  const h = 33.2;
  const zoom = 0.5;

  return (
    <>
      <div className="imgBloc" style={{ width: `${w}vw`, height: `${h}vh` }}>
        <Image
          src={src}
          alt={alt}
          width="300"
          height="100"
          style={{
            transform: `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, ${y}, ${x}, 0, ${zoom})`,
          }}
          // className="object-cover"
          // sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
          // priority
        />
      </div>
    </>
  );
};

export default ContainerImage;
