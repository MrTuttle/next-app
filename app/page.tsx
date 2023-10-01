// app/page.tsx

import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";
import FloComponent from "./components/FloComponent";
import UsersList from "./components/UsersList";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import portrait from "@/public/images/16.jpg";
import bardage from "@/public/images/bardage-bois.jpg";
import plancher from "@/public/images/piscine-bardage.jpg";
import saone from "@/public/images/piscine-saone.jpg";
import mickael from "@/public/images/piscine-saone.jpg";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <main className="relative">
      <h1>Hello {session && <span>{session.user!.name}</span>}</h1>
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

      <div
        style={{ border: "red 1px solid", width: "100%" }}
        className="relative h-screen"
      >
        <Image
          src={bardage}
          alt="maison moderne bardage"
          fill
          className="object-cover"
          sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
          priority
        />
      </div>
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
      <div className="mt-10">
        <h1>Flo component</h1>
        <p>Code to uncomment when we'll have mysql in cloud</p>
        {/* <FloComponent></FloComponent>
        <UsersList></UsersList> */}
        <Link href="/users">Users</Link>
        <ProductCard />
      </div>
      <div
        style={{ border: "red 1px solid", width: "50%", margin: "200px" }}
        className="relative h-screen"
      >
        <Image
          src={plancher}
          alt="maison moderne bardage"
          fill
          className="object-cover"
          sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
        />
      </div>
      <div
        style={{ border: "red 1px solid", width: "75%" }}
        className="relative h-screen"
      >
        <Image
          src={saone}
          alt="maison moderne bardage"
          fill
          className="object-cover"
          sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
        />
      </div>
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
    </main>
  );
}
