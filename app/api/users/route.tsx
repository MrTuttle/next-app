// app/api/users/route.tsx
import { NextRequest, NextResponse } from "next/server";

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
