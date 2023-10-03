// app / users / page.tsx;

import Link from "next/link";
import { Suspense } from "react";
import Image from "next/image";
import maison from "@/public/images/bardage-bois.jpg";
import piscine from "@/public/images/piscine-bardage.jpg";
import piscine2 from "@/public/images/piscine-mickael.jpg";
import piscine3 from "@/public/images/piscine-saone.jpg";

import Card from "../components/Card";

const madma = ({ searchParams: { sortOrder } }: Props) => {
  console.log(sortOrder);
  // log return "email" or "name"

  return (
    <>
      <main>
        <div className="relative">
          <div
            style={{
              border: "1px solid white",
              position: "fixed",
              mixBlendMode: "difference",
              color: "white",
              zIndex: 200,
            }}
            className="bloc relative m-5 flex"
          >
            <p
              style={{ border: "1px solid white", padding: "0.5rem" }}
              className=" bloc text-9x font-bold"
            >
              M D M A : <span className="font-light">artisan ébèniste</span>
            </p>
            <p
              style={{ border: "1px solid white", padding: "0.5rem" }}
              className="bloc text-9x font-bold"
            >
              <span className="font-light">Option | option </span>
            </p>
          </div>
        </div>

        <div className="">
          <div className="h-screen relative">
            <Image
              src={maison}
              alt="portrait"
              fill
              className="object-cover"
              sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
              // 480px = standart mobiles, 768 = standard tablets, 33vw other width devices -> seem not working on dev tools, see in real mobile device
              quality="100" // default = 75 percent
              priority // boolean, set priority to images above the fold
            />
          </div>
        </div>
        <div className="lg:container lg:mx-auto 2xl:w-5/6 grid lg:grid-cols-2 2xl:grid-cols-3 gap-4 mt-8 xl:gap-5 xl:mt-10 lg:mt-12 2xl:mt-20">
          <Card
            heading="category"
            title="Incredible accommodation for your team"
            summary="Looking to take your team away on a retreat to enjoy awesome food
          and take in some sunshine? We have a list of places to do just
          that."
            link={"string"}
            src={piscine}
          ></Card>
          <Card
            heading="category"
            title="Incredible accommodation for your team"
            summary="Looking to take your team away on a retreat to enjoy awesome food
          and take in some sunshine? We have a list of places to do just
          that."
            link={"string"}
            src={piscine2}
          ></Card>
          <Card
            heading="category"
            title="Incredible accommodation for your team"
            summary="Looking to take your team away on a retreat to enjoy awesome food
          and take in some sunshine? We have a list of places to do just
          that."
            link={"string"}
            src={piscine3}
          ></Card>
          <Card
            heading="category"
            title="Incredible accommodation for your team"
            summary="Looking to take your team away on a retreat to enjoy awesome food
          and take in some sunshine? We have a list of places to do just
          that."
            link={"string"}
            src={maison}
          ></Card>
        </div>
      </main>
    </>
  );
};

export default madma;
