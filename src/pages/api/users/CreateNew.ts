import { NowRequest, NowResponse } from "@vercel/node";
import { connectToDatabase } from "../DBConect";
import { IUser } from "@/types/IUser";

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
    const allUsers = await collection.find().toArray();
    if (
      allUsers.find(
        (item) =>
          item.name == request.body.name ||
          item.userName == request.body.userName
      )
    )
     return response.status(400).json("Esse nome de usuário ja existe!" );
    const result = await collection.insertOne(request.body);
    return response.json({ read: true, result });
  } else {
    return response.status(400).json("O corpo da requisição não tem os dados completos de um usuário");
  }
};
