import { NowRequest, NowResponse } from "@vercel/node";
import { connectToDatabase } from "../DBConect";

//cria uma nova indicação e requer três atributos enviados via body, title, name e date
export default async (request: NowRequest, response: NowResponse) => {
  if (request.body.title && request.body.body && request.body.date) {
    const db = await connectToDatabase(process.env.MONGODB_URI!);
    const collection = db.collection("indications");
    let result;
    if (request.body.imageLink) {
      result = await collection.insertOne({ ...request.body });
    } else {
      result = await collection.insertOne({
        ...request.body,
        imageLink:
          "https://img.freepik.com/vetores-gratis/fundo-de-contorno-de-borboleta-desenhado-a-mao_23-2149029441.jpg?ga=GA1.1.1042171942.1715078900&semt=ais_hybrid",
      });
    }
    return response.json({ read: true, result });
  } else {
    return { erro: "O corpo da requisição não tem title ou name ou date" };
  }
};
