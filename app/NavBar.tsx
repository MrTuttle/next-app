import Link from "next/link";
import React from "react";
import { number } from "zod";

const NavBar = () => {
  const routes = [
    { label: "Users", path: "/users" },
    { label: "Users api", path: "/api/users" },
    { label: "Products", path: "/products" },
  ];
  return (
    <>
      <div className="flex justify-between bg-slate-200 dark:bg-gray-800 p-5 text-slate-900 dark:text-slate-400">
        <div>
          <Link href="/" className="mr-5">
            Mon logo
          </Link>
        </div>
        <div>
          {routes.map((r, index) => (
            <Link key={index} href={r.path} className="pl-5">
              {index + " " + r.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default NavBar;
