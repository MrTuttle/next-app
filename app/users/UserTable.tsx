import SortUsers from "./SortUsers";

// app/users/UserTable.tsx

import Link from "next/link";
import { sort } from "fast-sort";

interface User {
  name: string;
  id: number;
  email: string;
}

interface Props {
  sortOrder: string;
}

const UserTable = async ({ sortOrder }: Props) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await res.json();

  const sortedUsers = sort(users).asc(
    sortOrder === "email" ? (user) => user.email : (user) => user.name
  );

  return (
    <>
      <div className="max-w-md overflow-hidden md:max-w-2xl">
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
            {sortedUsers.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UserTable;
