import prisma from "../lib/prisma";
import User from "../components/User";
import SortUsers from "../users/SortUsers";
import Link from "next/link";
import BtnDeleteUser from "./BtnDeleteUser";

interface User {
  name: string;
  id: number;
  email: string;
}
interface Props {
  sortOrder: string;
}

interface PropsDelete {
  user: User[];
  onDelete: (id: number) => void;
}

export default async function UserList() {
  const feed = await prisma.user.findMany({
    where: { isActive: true },
  });
  const onDelete = () => {
    console.log("loog onDelete");
  };

  return (
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
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="text-slate-800 dark:text-slate-400">
          {/* on ne mappe plus Users mais sortedUsers */}
          {feed.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <BtnDeleteUser id={user.id}></BtnDeleteUser>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
