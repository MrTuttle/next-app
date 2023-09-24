import React from "react";
import { NextRequest, NextResponse } from "next/server";
import schema from "../api/users/schema";
import prisma from "@/prisma/client";
import { Http2ServerRequest } from "http2";
import { json } from "node:stream/consumers";
import { promise } from "zod";
import { PrismaClient } from "@prisma/client";

const getUsers = async function getStaticProps() {
  const prisma = new PrismaClient();
  const users = await prisma.user.findMany();
  return { users: { users } };
};
console.log(`LOOG :${getUsers}`);

const FloComponent = () => {
  return (
    <>
      <div>
        <h1>FloComponent </h1>
        {/* {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))} */}
        <p className="text-slate-800 dark:text-slate-200"></p>
        <p></p>
      </div>
    </>
  );
};

export default FloComponent;
