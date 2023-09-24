"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function Draft() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const router = useRouter();

  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      const body = { name, email };
      await fetch(`/api/users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      router.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div>
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
      </div>
    </>
  );
}
