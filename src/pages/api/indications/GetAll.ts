import { NowRequest, NowResponse } from "@vercel/node";
import { connectToDatabase } from "../DBConect";

export default async (request: NowRequest, response: NowResponse) => {
  const db = await connectToDatabase(process.env.MONGODB_URI!);
  const collection = db.collection("indications");
  const result = await collection.find().project({_id:0}).toArray();
  return response.json(result);
};
