import React from "react";
import { AddNewPostButton } from "./AddNewPostButton";
import { Post } from "./Post";
import { useQuery } from "@tanstack/react-query";
import { getPostsRequest } from "../requests/requests";

export function PostList() {

    const { isLoading, isError, isSuccess, data, error } = useQuery(
        ["posts"],
        getPostsRequest
      );

  return (
    <div className="flex flex-col bg-gray-300 rounded-md p-4 col-start-2 col-end-5">
      {isSuccess && data.map((val, i) => (
        <Post
          key={i}
          text={val.text}
          author={val.author}
          date={val.date}
          title={val.title}
          _id={val._id}
        ></Post>
      ))}
      <AddNewPostButton></AddNewPostButton>
    </div>
  );
}
