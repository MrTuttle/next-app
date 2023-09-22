import React from "react";
import { NextRequest, NextResponse } from "next/server";
import schema from "../api/users/schema";
import prisma from "@/prisma/client";
import { Http2ServerRequest } from "http2";
import { json } from "node:stream/consumers";

interface Props {
  params: { id: number };
  allUsers: [];
}

interface User {
  name: string;
  id: number;
  email: string;
}

const FloComponent = () => {
  const getNom = () => {
    const toto = "toto";
    const tata = "tata";
    const nom = " " + toto + " " + tata;

    return nom;
  };
  const getUser = async () => {
    // const res = await fetch("http://localhost:3000/api/users/2").then((res) =>
    //   res.json().then((json) => console.log(`LOG datas : ${json}`))
    // );
    const res = await fetch("http://localhost:3000/api/users");

    const users: User[] = await res.json();
    // const data = await res.json();
    // const unUser = users.filter((user) => user.id === 2);

    console.log(`LOG dataa : ${users}`);
  };
  getUser();

  const displayUser = () => {
    console.log();
  };

  return (
    <>
      <div>
        <h1>FloComponent </h1>
        <p className="text-slate-800 dark:text-slate-200">{getNom()}</p>
        <p></p>
      </div>
    </>
  );
};

export default FloComponent;
