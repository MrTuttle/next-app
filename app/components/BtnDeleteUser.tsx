"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function DeleteUser() {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  const [id, setId] = useState();
  const router = useRouter();

  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      const body = { id };
      await fetch(`/api/users`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
        cache: "no-cache",
      });

      router.push("/");
    } catch (error) {
      console.log("jjjjjjj");

      console.error(error);
    }
  };

  return (
    <>
      <button onClick={submitData} id={id}>
        Delete User
      </button>
      {/* <div>
        <form onSubmit={submitData}>
          <h1>Create User</h1>
          <input
            autoFocus
            onChange={(e) => setName(e.target.value)}
            placeholder="name"
            type="text"
            value={name}
            className="p-2 bg-slate-100 rounded-lg mr-4 border-none transition duration-200 ease-[cubic-bezier(0,0,0.2,1)] focus:scale-110 focus:outline-none"
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Author (email address)"
            type="text"
            value={email}
            className="p-2 bg-slate-100 rounded-lg mr-4 border-none transition duration-200 ease-[cubic-bezier(0,0,0.2,1)] focus:scale-110 focus:outline-none"
          />

          <input
            disabled={!name || !email}
            type="submit"
            value="Create"
            className="btn btn-primary mr-2"
          />
          <a className="btn btn-secondary" href="/">
            or Cancel
          </a>
        </form>
      </div> */}
    </>
  );
}
