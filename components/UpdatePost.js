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