import { getOnePost } from '../../database/mongodb'

export default function handler(req, res) {
    if (req.method === "GET") {
      getOnePost(req, res);
    }
  }