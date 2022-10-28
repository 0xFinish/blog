import { getAuthorPosts, getDistinctAuthors } from '../../database/mongodb'

export default function handler(req, res) {
    console.log(req.url)
    if (req.method === "GET" && req.url.length > 12) {
        console.dir(req.query)
        getAuthorPosts(req, res);
    }
    else if (req.method === "GET" && req.url.length <=12 ) {
        getDistinctAuthors(req, res)
    }
  }