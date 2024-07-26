import { NowRequest, NowResponse } from "@vercel/node";
import { connectToDatabase } from "../DBConect";

//cria um novo usuário com atributos não nuláveis do tipo IUser
export default async (request: NowRequest, response: NowResponse) => {
  if (
    request.body.userName &&
    request.body.name &&
    request.body.password &&
    request.body.type
  ) {
    const db = await connectToDatabase(process.env.MONGODB_URI!);
    const collection = db.collection("users");
    const result = await collection.insertOne(request.body);
    return response.json({ read: true, result });
  } else {
    return {
      erro: "O corpo da requisição não tem os dados completos de um usuário",
    };
  }
};
