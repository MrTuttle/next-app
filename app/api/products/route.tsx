// app/api/products/route.tsx

import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

export function GET(request: NextRequest) {
  return NextResponse.json([
    { id: 1, name: "Milk", price: 2.5 },
    { id: 2, name: "Bread", price: 3.5 },
  ]);
}

export async function POST(request: NextRequest) {
  // read body of the request
  const body = await request.json();
  // zod validation
  const validation = schema.safeParse(body);
  // if validation is not successful :
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  // return the object we are suposed to create
  return NextResponse.json(
    { id: 10, name: body.name, price: body.price },
    { status: 201 }
  );
}
