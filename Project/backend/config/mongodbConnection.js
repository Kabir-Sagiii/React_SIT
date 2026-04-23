import { MongoClient } from "mongodb";
const client = new MongoClient("mongodb://localhost:27017");

export async function createMongodbConnection() {
  try {
    await client.connect();
    console.log("connected with Mongodb Server");
  } catch (error) {
    console.log("Failed to Connect");
  }
}

export function connectWithDB_Collection(dbName, collectionName) {
  return client.db(dbName).collection(collectionName);
}
