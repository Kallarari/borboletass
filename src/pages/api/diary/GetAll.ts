import { NowRequest, NowResponse } from "@vercel/node";
import { connectToDatabase } from "../DBConect";

//retorna todas as indicações, não depende de nada
export default async (request: NowRequest, response: NowResponse) => {
  const db = await connectToDatabase(process.env.MONGODB_URI!);
  const collection = db.collection("diarys");
  const result = await collection.find().toArray();
  return response.json(result);
};
