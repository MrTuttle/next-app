// app / users / page.tsx;

import Link from "next/link";
import UserTable from "./UserTable";
import { Suspense } from "react";
import Image from "next/image";
import portrait from "@/public/images/16.jpg";

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
          src={portrait}
          alt="portrait"
          fill
          className="object-cover"
          sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
          // 480px = standart mobiles, 768 = standard tablets, 33vw other width devices -> seem not working on dev tools, see in real mobile device
          quality="100" // default = 75 percent
          priority // boolean, set priority to images above the fold
        />
      </div>
    </>
  );
};

export default UsersPage;
