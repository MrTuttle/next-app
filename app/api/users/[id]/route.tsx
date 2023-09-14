//api/users/[id]/route.tsx

import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

interface Props {
  params: { id: number };
}

export function GET(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  // fetch data from a db
  // If not found,return 404 error
  // Else return datas
  if (params.id > 10)
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  return NextResponse.json({ id: 1, name: "flo" });
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  // validate the request body
  const body = await request.json();
  if (!body.name)
    return NextResponse.json(
      // If invalid, return 400 error (bad request)
      { error: "invalid request, namer is required" },
      { status: 400 }
    );
  if (params.id > 10)
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  return NextResponse.json({ id: 1, name: body.name });

  // Fetch the user with the given id
  // If doesn't exist, return 404
  // Update the user
  // Return the updated user
}

export function DELETE(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  // fetch user from database
  // If not found return 404
  // otherwise, delete the user from database
  // return 200 response
  if (params.id > 10)
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  return NextResponse.json({});
}
