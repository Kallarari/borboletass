import { NowRequest, NowResponse } from "@vercel/node";
import { connectToDatabase } from "./DBConect";

export default async (request: NowRequest, response: NowResponse) => {
  const db = await connectToDatabase(process.env.MONGODB_URI!);
  const collection = db.collection("subscribers");
  const result = await collection.find().toArray();
  return response.json({ read: true, result });
};
