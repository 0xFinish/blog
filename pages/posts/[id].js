import { useRouter } from "next/router";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getOnePostRequest, deletePostRequest } from "../../requests/requests";
import { Post } from "../../components/Post";
import { UpdatePost } from "../../components/UpdatePost";
import React from "react";

export default function DetailedPost() {
  const router = useRouter();
  const [ready, setReady] = React.useState(false);
  const [updatePost, setUpdatePost] = React.useState(false);

  const queryClient = useQueryClient();

  React.useEffect(() => {
    if (router.isReady) {
      setReady(true);
    }
  }, [router.isReady]);

  const { isLoading, isError, isSuccess, data, error } = useQuery(
    ["onePost", router.query.id],
    getOnePostRequest,
    {
      enabled: ready,
    }
  );

  const deleteTodoMutation = useMutation(deletePostRequest, {
    onSuccess: () => {
      router.push("/");
      console.log("Invalidating...");
      queryClient.invalidateQueries("onePost");
    },
  });

  function handleDelete(e) {
    e.preventDefault();
    deleteTodoMutation.mutate({ _id: data.data._id });
  }

  function handleEdit(e) {
    e.preventDefault();
    setUpdatePost(prev => !prev);
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {isSuccess && (
        <Post
          text={data.data.text}
          author={data.data.author}
          date={data.data.date}
          title={data.data.title}
          _id={data.data._id}
        ></Post>
      )}
      <button
        onClick={handleEdit}
        className="w-32 h-10 rounded-md m-10 bg-blue-400"
      >
        Edit
      </button>
      <button
        onClick={handleDelete}
        className="w-32 h-10 rounded-md m-10 bg-blue-400"
      >
        Delete
      </button>
      {updatePost && (
        <UpdatePost
          formData={{
            text: data.data.text,
            author: data.data.author,
            date: data.data.date,
            title: data.data.title,
          }}
          _id={{ _id: data.data._id }}
        ></UpdatePost>
      )}
    </div>
  );
}
