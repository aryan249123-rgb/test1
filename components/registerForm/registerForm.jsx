"use client";
import Link from "next/link";
import { useState } from "react";

export default function LoginForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setError("All fields should be entered");
      return;
    }
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          password
        }),
      });
      if (res.ok) {
        const form = e.target;
        form.reset();
      } else {
        console.log("user registeration failled");
      }
    } catch (error) {
      console.log("error during registeration");
    }
  };
  return (
    <div className="flex items-center justify-center h-full w-full bg-black">
      <div className="text-white flex flex-col gap-2 bg-black w-1/3 h-[43%] px-5 py-4 border-8 border-white rounded-2xl">
        <h1 className="text-xl text-white font-bold mt-4">SignUp</h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-2 text-black"
        >
          <input
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="text"
            placeholder="Name"
          ></input>
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="text"
            placeholder="Email"
          ></input>
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            placeholder="Password"
          ></input>
          <button className="bg-blue-600  text-white p-2">Register</button>
          <div className="w-full flex justify-between">
            {error && (
              <div className="bg-red-500 w-auto rounded-2xl p-2 text-white">
                <h1>{error}</h1>
              </div>
            )}
            <Link className="mt-2 text-white" href="/">
              Have an account? <span className="underline">SignIn </span>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
