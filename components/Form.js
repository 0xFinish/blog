import React from "react";
import { useMutation, useQueryClient,  } from "@tanstack/react-query";
import { postPostRequest } from "../requests/requests";

export function Form() {

    const queryClient = useQueryClient()
  const [formData, setFormData] = React.useState({
    title: "",
    author: "",
    date: "",
    text: "",
  });

  const createPostMutation = useMutation(postPostRequest, {
    onSuccess: () => {
      console.log("Invalidating...");
      queryClient.invalidateQueries("posts")
    },
  });

  function handleChange(event) {
    setFormData((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
    console.log(formData);
  }

  function handleSubmit(event) {
    event.preventDefault();
    createPostMutation.mutate(formData);
    setFormData({
      title: "",
      author: "",
      date: "",
      text: "",
    });
  }

  return (
    <div className="bg-red-300">
      <form onSubmit={handleSubmit} className="flex gap-5 flex-col">
        <input
          name="title"
          placeholder="Title"
          type="text"
          onChange={handleChange}
          value={formData.title}
        ></input>
        <input
          name="author"
          placeholder="Author"
          type="text"
          onChange={handleChange}
          value={formData.author}
        ></input>
        <input
          name="date"
          placeholder="Date"
          type="date"
          onChange={handleChange}
          value={formData.date}
        ></input>
        <textarea
          name="text"
          placeholder="Blog"
          onChange={handleChange}
          value={formData.text}
        ></textarea>
        <button className="bg-blue-300 m-2 p-2">Add Post</button>
      </form>
    </div>
  );
}
