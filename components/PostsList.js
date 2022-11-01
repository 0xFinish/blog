import React from "react";
// import { AddNewPostButton } from "./AddNewPostButton";
import { Post } from "./Post";
import { useQuery } from "@tanstack/react-query";
import { getPostsRequest } from "../requests/requests";

export function PostsList() {

    const { isLoading, isError, isSuccess, data, error } = useQuery(
        ["posts"],
        getPostsRequest
      );

  return (
    <div className="flex col-start-1 col-span-9 flex-col-reverse divide-y-2 divide-y-reverse border-b-2 h-full">
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
      {/* <AddNewPostButton></AddNewPostButton> */}
    </div>
  );
}
