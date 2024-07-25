import { NowRequest, NowResponse } from "@vercel/node";
import { MongoClient, Db, ObjectId } from "mongodb";
import url from "url";

let cachedDb: Db;

async function connectToDatabase(uri: string) {
  if (cachedDb) {
    return cachedDb;
  }
  const client = await MongoClient.connect(uri);
  const dbName = url.parse(uri).pathname?.substr(1);
  const db = client.db(dbName);
  cachedDb = db;
  return db;
}
export default async (request: NowRequest, response: NowResponse) => {
  const db = await connectToDatabase(process.env.MONGODB_URI!);
  const collection = db.collection("subscribers");
  const result = await collection.find().toArray();
  return response.json({ read: true, result });
};
