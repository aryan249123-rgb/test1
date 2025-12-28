import { ConnectMongoDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";
import User from "@/models/user";
export async function POST(req) {
  try {
    await ConnectMongoDB();
    const { name, email, password } = await req.json();
    const newUser=new User({name,email,password});
    await newUser.save();
    return NextResponse.json({message:"user registered"},{status:201})
  } catch (error) {
    return NextResponse.json({message:"an error occured while registering"},{status:500})
  }
}
