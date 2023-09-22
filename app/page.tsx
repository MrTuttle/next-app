// app/page.tsx

import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";
import FloComponent from "./components/FloComponent";

export default function Home() {
  return (
    <main>
      <h1>Hello world</h1>
      <FloComponent></FloComponent>
      <Link href="/users">Users</Link>
      <ProductCard />
      {/* <a href="/users">Users</a> */}
    </main>
  );
}
