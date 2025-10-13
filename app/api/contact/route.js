import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function POST(req) {
  try {
    const body = await req.json();
    const client = await clientPromise;
    const db = client.db("portfolio");

    const collection = db.collection("contacts");
    await collection.insertOne(body);

    return NextResponse.json({ message: "Message stored successfully!" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Error saving message" }, { status: 500 });
  }
}
