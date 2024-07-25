import { MongoClient, Db, ObjectId } from "mongodb";
import url from "url";
let cachedDb: Db;

export async function connectToDatabase(uri: string) {
  if (cachedDb) {
    return cachedDb;
  }
  const client = await MongoClient.connect(uri);
  const dbName = url.parse(uri).pathname?.substr(1);
  const db = client.db(dbName);
  cachedDb = db;
  return db;
}
