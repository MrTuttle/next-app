import Image, { ImageProps, StaticImageData } from "next/image";
import React from "react";
import { URL } from "url";
// import portrait from "@/public/images/16.jpg";

interface Props {
  heading: string;
  title: string;
  summary: string;
  link: string;
  //image: HTMLImageElement;
  src: string | StaticImageData;
}

const Card = (props: Props) => {
  return (
    <>
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mt-3.5">
        <div className="md:flex">
          <div className="md:shrink-0">
            <Image
              className="h-48 w-full object-cover md:h-full md:w-48"
              src={props.src}
              width="200"
              height="200"
              alt="Modern building architecture"
            />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              {props.heading}
            </div>
            <a
              href="#"
              className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
            >
              {props.title}
            </a>
            <p className="mt-2 text-slate-500">{props.summary}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
