import React from "react";
import { useMutation, useQueryClient,  } from "@tanstack/react-query";
import { updatePostRequest } from "../requests/requests";

export function UpdatePost(props) {

    const queryClient = useQueryClient()
  const [formData, setFormData] = React.useState({
    title: "",
    author: "",
    date: "",
    text: "",
  });

  React.useEffect(() => {
    setFormData(props.formData)
  }, [])

  const updatePostMutation = useMutation(updatePostRequest, {
    onSuccess: () => {
      console.log("Invalidating...");
      queryClient.invalidateQueries(["onePost"])
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
    updatePostMutation.mutate({formData: formData, _id: props._id});
    setFormData({
      title: "",
      author: "",
      date: "",
      text: "",
    });
  }

  return (
    <div className="bg-red-300">
      <p className="text-center font-bold text-xl py-4">Update Post</p>
      <form onSubmit={handleSubmit} className="flex gap-5 flex-col">
        <input
        className="rounded-md"
          name="title"
          placeholder="Title"
          type="text"
          onChange={handleChange}
          value={formData.title}
        ></input>
        <input
        className="rounded-md"
          name="author"
          placeholder="Author"
          type="text"
          onChange={handleChange}
          value={formData.author}
        ></input>
        <input
        className="rounded-md"
          name="date"
          placeholder="Date"
          type="date"
          onChange={handleChange}
          value={formData.date}
        ></input>
        <textarea
          className="rounded-md"
          name="text"
          placeholder="Blog"
          onChange={handleChange}
          value={formData.text}
        ></textarea>
        <button className="my-2 p-2 bg-latteWhite rounded-lg">Update Post</button>
      </form>
    </div>
  );
}