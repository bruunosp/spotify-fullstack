// Javascript Assincrono
// await async
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv'

dotenv.config()

const URI = process.env.MONG_URI;
const client = new MongoClient(URI)

export const db = client.db("project_spotify");

// const songCollection = await db.collection('songs').find({}).toArray();
// console.log(songCollection);