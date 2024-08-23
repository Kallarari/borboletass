import { NowRequest, NowResponse } from "@vercel/node";
import { connectToDatabase } from "../DBConect";
import { ObjectId } from "mongodb";

// use querry params para buscar com a propriedade id ex: id=_id
export default async (request: NowRequest, response: NowResponse) => {
  if (request.query.id) {
    const db = await connectToDatabase(process.env.MONGODB_URI!);
    const collection = db.collection("users");
    const result = await collection.findOne({
      _id: new ObjectId(request.query.id as string),
    });
    if (result == null) {
      return response.status(500).json("Não encontrado");
    }
    return response.json(result);
  }
  return response
    .status(400)
    .json("O corpo da requisição não tem title ou name ou date");
};
