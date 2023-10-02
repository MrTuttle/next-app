// app / users / page.tsx;

import Link from "next/link";
import UserTable from "./UserTable";
import { Suspense } from "react";
import Image from "next/image";
import portrait1 from "@/public/images/1.jpg";
import portrait3 from "@/public/images/3.jpg";
import portrait13 from "@/public/images/13.jpg";
import portrait16 from "@/public/images/16.jpg";

import Card from "../components/Card";

interface Props {
  searchParams: {
    sortOrder: string;
  };
}

const UsersPage = ({ searchParams: { sortOrder } }: Props) => {
  console.log(sortOrder);
  // log return "email" or "name"

  return (
    <>
      <h1>Users Page</h1>
      <div className="relative">
        <div
          style={{
            border: "1px solid white",
            position: "fixed",
            mixBlendMode: "difference",
            color: "white",
            zIndex: 200,
          }}
          className="bloc relative m-10 flex"
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
      <Link href="/users/new" className="btn ">
        New user
      </Link>
      <Suspense fallback={<p>Loading...</p>}>
        <UserTable sortOrder={sortOrder} />
      </Suspense>

      <div className="relative h-screen">
        <Image
          src={portrait16}
          alt="portrait"
          fill
          className="object-cover"
          sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
          // 480px = standart mobiles, 768 = standard tablets, 33vw other width devices -> seem not working on dev tools, see in real mobile device
          quality="100" // default = 75 percent
          priority // boolean, set priority to images above the fold
        />
      </div>
      <Card
        heading="category"
        title="Incredible accommodation for your team"
        summary="Looking to take your team away on a retreat to enjoy awesome food
              and take in some sunshine? We have a list of places to do just
              that."
        link={"string"}
        image={portrait1}
      ></Card>
      <Card
        heading="category"
        title="Incredible accommodation for your team"
        summary="Looking to take your team away on a retreat to enjoy awesome food
              and take in some sunshine? We have a list of places to do just
              that."
        link={"string"}
        image={portrait3}
      ></Card>
      <Card
        heading="category"
        title="Incredible accommodation for your team"
        summary="Looking to take your team away on a retreat to enjoy awesome food
              and take in some sunshine? We have a list of places to do just
              that."
        link={"string"}
        image={portrait13}
      ></Card>
      <Card
        heading="category"
        title="Incredible accommodation for your team"
        summary="Looking to take your team away on a retreat to enjoy awesome food
              and take in some sunshine? We have a list of places to do just
              that."
        link={"string"}
        image={portrait16}
      ></Card>
    </>
  );
};

export default UsersPage;
