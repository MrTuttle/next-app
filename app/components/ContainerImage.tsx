// import React from "react";
import Image, { ImageProps, StaticImageData } from "next/image";
import "./ContainerImage.css";
import { motion, useScroll, useInView, useSpring } from "framer-motion";
// to touch css class properties
import { useRef, useEffect } from "react";
interface Props {
  src: string | StaticImageData;
  alt: string;
}

const ContainerImage = ({ src, alt }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const { scrollYProgress } = useScroll();
  const alonge = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    console.log(`Element is in view: ${ref.current}`, isInView);
  }, [isInView]);

  const x = 8.7;
  const y = 8.7;
  const w = 400;
  const h = 33.2;
  const zoom = 0.5;

  return (
    <>
      <motion.div
        className="imgBloc"
        initial={{ width: 0 }}
        whileInView={{ width: 400 }}

        // style={{ width: scrollYProgress }}
        // style={{ width: `${w}vw`, height: `${h}vh` }}
        // style={{
        //   width: isInView ? 400 : 0,
        //   height: `${h}`,
        //   transition: "all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
        // }}
        // style={{
        //   width: `${w}vw`,
        //   height: `${h}vh`,

        //   opacity: isInView ? 1 : 0,
        //   transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        // }}
      >
        <Image
          ref={ref}
          src={src}
          alt={alt}
          width="300"
          height="100"
          style={{
            transform: isInView
              ? "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 10, 0, 0, 0.9)"
              : "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0.9)",
            // opacity: isInView ? 1 : 0,
            transition: "all 3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
          // style={{
          //   transform: `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, ${y}, ${x}, 0, ${zoom})`,
          // }}
          /////////////
          // className="object-cover"
          // sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
          // priority
        />
      </motion.div>
    </>
  );
};

export default ContainerImage;
