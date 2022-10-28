// import { getPostsRequest, deletePostRequest, updatePostRequest, postPostRequest  } from "../../requests/requests"
import { getPosts, postPost, deletePost, updatePost } from "../../database/mongodb"

export default function handler(req, res) {
  if (req.method === "GET") {
    getPosts(req, res);
  }
  if (req.method === "POST") {
    postPost(req, res);
  }
  if (req.method === "DELETE") {
    deletePost(req, res);
  }
  if (req.method === "PUT") {
    updatePost(req, res);
  }
}
