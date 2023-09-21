import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className="flex bg-slate-200 dark:bg-gray-800 p-5 text-slate-900 dark:text-slate-400">
      <Link href="/" className="mr-5">
        Mon logo
      </Link>
      <Link href="/users">Users</Link>
    </div>
  );
};

export default NavBar;
