// app/api/auth/[...nextAuth].route.ts
import NextAuth from "next-auth";

const handler = NextAuth({});

export { handler as GET, handler as POST };
