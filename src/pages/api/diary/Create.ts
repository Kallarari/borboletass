import { NowRequest, NowResponse } from "@vercel/node";
import { connectToDatabase } from "../DBConect";

//cria uma nova indicação e requer três atributos enviados via body, title, name e date
export default async (request: NowRequest, response: NowResponse) => {
  if (
    request.body.happiness &&
    request.body.content &&
    request.body.title &&
    request.body.data &&
    request.body.user
  ) {
    const db = await connectToDatabase(process.env.MONGODB_URI!);
    const collection = db.collection("diarys");
    const result = await collection.insertOne(request.body);
    return response.json({ read: true, result });
  } else {
    return { erro: "O corpo da requisição não tem os dados necessários" };
  }
};
