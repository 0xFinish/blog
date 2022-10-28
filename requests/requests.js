import axios from "axios";

export async function getPostsRequest() {
  const response = await axios.get("/api");
  return response.data;
}

export async function getUniquePostsRequest() {
  const response = await axios.get("/api/authors/")
  return response.data
}

export async function getOnePostRequest(req) {
  console.log("Request to getOnePostRequest");
  console.dir(req.queryKey[1]);
  const id = req.queryKey[1];
  return await axios.get(`/api/post?_id=${id}`);
}

export async function postPostRequest(req, res) {
  console.log("Req.body");
  console.log(req);
  return await axios.post("/api", req);
}

export async function deletePostRequest(req, res) {
  console.log("deletepostrequest")
  console.log(req)
  return await axios.delete("/api", {data: req})
}

export async function updatePostRequest(req, res) {
  console.log("updatePostRequest")
  console.log(req)
  return await axios.put("/api", {data: req})
}

export async function getAuthorPostsRequest(req, res) {
  console.log("getAuthorPostsRequest")
  // console.log(author)
  return await axios.get(`/api/authors?author=${req.queryKey[1]}`)
}
