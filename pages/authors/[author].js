import React from "react";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import { getAuthorPostsRequest } from "../../requests/requests";
import { Post } from "../../components/Post";

export default function AuthorPosts() {
  const router = useRouter();
  const [ready, setReady] = React.useState(false);
  
  const { isLoading, isError, isSuccess, data, error } = useQuery(
    ["AuthorPosts", router.query.author],
    getAuthorPostsRequest,
    {
      enabled: ready,
    }
  );

  React.useEffect(() => {
    if (router.isReady) {
      setReady(true);
    }
  }, [router.isReady]);

  return (
    <div className="flex flex-col bg-gray-300 rounded-md p-4 col-start-2 col-end-5">
      {isSuccess && data.data.map((val, i) => (
        <Post
          key={i}
          text={val.text}
          author={val.author}
          date={val.date}
          title={val.title}
          _id={val._id}
        ></Post>
      ))}
   </div>
  );
}
