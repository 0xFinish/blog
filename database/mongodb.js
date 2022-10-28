import { MongoClient, ObjectId } from "mongodb";
require("dotenv").config();

const url = process.env.MONGODB;

const client = new MongoClient(url);
const collection = client.db("blog").collection("posts");

export async function getPosts(req, res) {
  console.log(process.env.MONGODB);

  const result = await collection.find().toArray();
  await res.status(200).json(result);
}

export async function getOnePost(req, res) {
  console.dir("req.query in getOnePost");
  console.dir(req.query);
  console.dir(req.query._id);

  // console.log("Getting one post from api/post request!")
  // console.dir(req)
  const data = await collection.findOne({ _id: ObjectId(req.query._id) });
  await res.status(200).json(data);
}

export async function postPost(req, res) {
  console.dir(req.body);
  await collection.insertOne(req.body);
  res.status(200).json(req.body);
}

export async function deletePost(req, res) {
  console.log("deleting the post!");
  console.dir(req.body);
  await collection.deleteOne({ _id: ObjectId(req.body._id) });
  res.status(200).json(req.body._id);
}

export async function updatePost(req, res) {
  console.log("updating the post!");
  console.dir(req.body.data._id);
  console.dir(req.body.data.formData);
  await collection.updateOne(
    { _id: ObjectId(req.body.data._id._id) },
    { $set: req.body.data.formData }
  );
  res.status(200).json(req.body);
}

export async function getDistinctAuthors(req, res) {
  console.log("getDistinctAuthors");
  console.log(req.body);
  const result = await collection.distinct("author");
  await res.status(200).json(result);
}

export async function getAuthorPosts(req, res) {
  const result = await collection.find(req.query).toArray();
  await res.status(200).json(result);
}
