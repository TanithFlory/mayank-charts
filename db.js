import { MongoClient } from "mongodb";

const mongoConnection = async () => {
  try {
    const url = "mongodb+srv://alexster2005:g4AysVZ1wF0opENZ@cluster0.k3r1hkl.mongodb.net/";
    const client = new MongoClient(url);
    await client.connect();

    console.log("DB Connected");

    const db = client.db("assignment");
    const collection = db.collection("articleInsight");
    return collection;
  } catch (err) {
    console.log(err);
  }
};

export default mongoConnection;
