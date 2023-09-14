// app/api/users/route.tsx
import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

export function GET(request: NextRequest) {
  // in a real world, fetch database here
  return NextResponse.json([
    { id: 1, name: "John" },
    { id: 2, name: "Paul" },
  ]);
}
export async function POST(request: NextRequest) {
  // read the body of the request
  const body = await request.json();

  // Validate
  // If invalid, return 400
  // Else Return the body

  if (!body.name)
    return NextResponse.json({ error: "name is required" }, { status: 404 });

  // return the body
  return NextResponse.json({ id: 1, name: body.name }, { status: 201 });
}
