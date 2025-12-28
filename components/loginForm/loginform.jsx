"use client"

import Link from "next/link";

export default function LoginForm() {
  return (
    <div className="flex items-center justify-center h-full w-full bg-black">
      <div className="text-white flex flex-col gap-2 bg-black w-1/3 h-[40%] px-5 py-4 border-8 border-white rounded-2xl">
        <h1 className="text-xl text-white font-bold mt-4">Login</h1>
        <form className="flex flex-col gap-2 text-black">
            <input type="text" placeholder="Email"></input>
            <input type="password" placeholder="Password"></input>
            <button className="bg-blue-600  text-white p-2">Login</button>
        <div className="w-full flex justify-between">
          <div className="bg-red-500 w-[20%] rounded-2xl p-2 text-white"><h1>error msg</h1></div>
          <Link  className="mt-2 text-white" href="/register">Don't have an account? <span className="underline"> Register </span></Link>
        </div>
        </form>
      </div>
    </div>
  );
}
