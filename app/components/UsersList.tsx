import prisma from "../lib/prisma";
import User from "../components/User";

export default async function Home() {
  const feed = await prisma.user.findMany({
    where: { isActive: true },
  });
  return (
    <>
      {feed.map((user) => (
        <div key={user.id}>
          <p>
            {user.name} | {user.email}
          </p>
          {/* <User user={ user: Postprops}/> */}
        </div>
      ))}
    </>
  );
}
