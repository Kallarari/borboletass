import { NowRequest, NowResponse } from "@vercel/node";
import { connectToDatabase } from "../DBConect";
import { ObjectId } from "mongodb";

// use querry params para buscar com a propriedade id ex: id=_id e o atributo a ser editado podendo ele ser title, name e date
export default async (request: NowRequest, response: NowResponse) => {
  if (
    request.query.id &&
    (request.body.title || request.body.name || request.body.date)
  ) {
    const db = await connectToDatabase(process.env.MONGODB_URI!);
    const collection = db.collection("indications");
    let keyToModify = Object.keys(request.body);
    const result = await collection.updateOne(
      { _id: new ObjectId(request.query.id as string) },
      {
        $set: request.body
      }
    );
    return response.json({ read: true, result });
  } else {
    return {
      erro: "A requisição não tem ID ou uma das propriedades necessárias",
    };
  }
};
