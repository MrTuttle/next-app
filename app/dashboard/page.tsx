import Link from "next/link";
import React from "react";

const dashboard = () => {
  return (
    <div>
      <h1>dashboard page</h1>
      <p>config on middleware with :id+ </p>
      <p>Log access only after /dashboard/something</p>
      <p>put :id* if you want dashboard page launch authentication too</p>
      <h3>Pay attention :</h3>
      <p>
        Test all redirections when we are logged or not. When where I redirected
        when i logged, when I unlogged. Where will I go if I unlogged and relogg
        (be carefull of cache navigation). See NextAuth doc.
      </p>

      <ul className="list-disc pt-5">
        <li>
          <Link href="/dashboard/1">Dashboard 1 (for logged users)</Link>
        </li>
        <li>
          <Link href="/dashboard/2">Dashboard 2 (for logged users)</Link>
        </li>
      </ul>
    </div>
  );
};

export default dashboard;
