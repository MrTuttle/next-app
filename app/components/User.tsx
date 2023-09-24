"use client";
import React from "react";
// import ReactMarkdown from "react-markdown";
import Link from "next/link";
import type { User } from "@prisma/client";

export type PostProps = User & {
  author: User | null;
};

export default function User({ user }: { user: PostProps }) {
  return (
    <Link href={`/p/${user.id}`}>
      <h2>{user.name}</h2>
      {/* @ts-ignore */}
    </Link>
  );
}
