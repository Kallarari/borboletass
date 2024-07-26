import { NowRequest, NowResponse } from "@vercel/node";
import { connectToDatabase } from "../DBConect";
import { ObjectId } from "mongodb";

//deleta apenas um usuário e é necessário o id como querry params ex: ?id=_id
export default async (request: NowRequest, response: NowResponse) => {
  if (request.query.id) {
    const db = await connectToDatabase(process.env.MONGODB_URI!);
    const collection = db.collection("diarys")
    const result = await collection.deleteOne({_id:new ObjectId(request.query.id as string)});
    return response.json({ read: true, result });
  } else {
    return { erro: "Id não identificado!" };
  }
};
