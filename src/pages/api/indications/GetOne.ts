import { NowRequest, NowResponse } from "@vercel/node";
import { connectToDatabase } from "../DBConect";

// use querry params para buscar com a propriedade id ex: id=_id
export default async (request: NowRequest, response: NowResponse) => {
    if (request.query.id) {
    const db = await connectToDatabase(process.env.MONGODB_URI!);
    const collection = db.collection("indications");
    const result = await collection.insertOne(request.body);
    return response.json({ read: true, result });
  } else {
    return { erro: "O corpo da requisição não tem title ou name ou date" };
  }
};
