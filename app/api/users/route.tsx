// app/api/users/route.tsx
import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import prisma from "@/prisma/client";

export async function GET(request: NextRequest) {
  const users = prisma.user.findMany({
    // where: {email: ''} look at documentation, many conditions are possibles here
  });
  return NextResponse.json(users);
}
export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = schema.safeParse(body);

  // if validation doesn't success we return error 400
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 404 });

  const user = await prisma.user.findUnique({
    where: { email: body.email },
  });
  if (user)
    return NextResponse.json({ error: "User already exist" }, { status: 400 });

  // otherwise, we create a user object and store it in the database
  // so here in our database, we call prisma.user.create and give it an object
  const newUser = await prisma.user.create({
    // in this object we set data to the data we want to store

    // we can set data to body data: body but it isn't safe way cause a malicious user can supply additional properties in the body of the request
    // so a better way is to explicitly set properties in the data object where we should set the name: to body.name and email: to body.email
    // other properties are defined with default values in the schema, so we don't need to declare here
    data: {
      name: body.name,
      email: body.email,
    },
  });

  // dont forget to export const user instead our previous hard code
  return NextResponse.json(newUser, { status: 201 });
}
