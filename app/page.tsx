// app/page.tsx

import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";
import FloComponent from "./components/FloComponent";
import UsersList from "./components/UsersList";
import GetUser from "./components/GetUser";

export default function Home() {
  return (
    <main>
      <h1>Hello world</h1>
      <FloComponent></FloComponent>
      <UsersList></UsersList>
      <Link href="/users">Users</Link>
      <ProductCard />
      <GetUser url="http://localhost:3000/api/users/5" />
      {/* <a href="/users">Users</a> */}
    </main>
  );
}
