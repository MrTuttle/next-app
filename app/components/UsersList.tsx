import prisma from "../lib/prisma";
import User from "../components/User";
import SortUsers from "../users/SortUsers";
import Link from "next/link";

interface User {
  name: string;
  id: number;
  email: string;
}
interface Props {
  sortOrder: string;
}

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
      <>
        <table className="table table-bordered border-slate-300">
          <thead>
            <tr>
              <th>
                <Link href="/users?sortOrder=name">Name</Link>
              </th>
              <th>
                <Link href="/users?sortOrder=email">Email</Link>
              </th>
              <SortUsers label="Name" />
              <th>Email</th>
            </tr>
          </thead>
          <tbody className="text-slate-800 dark:text-slate-400">
            {/* on ne mappe plus Users mais sortedUsers */}
            {feed.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    </>
  );
}
