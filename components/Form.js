import React from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postPostRequest } from "../requests/requests";
import { Dialog, Transition } from "@headlessui/react";

export function Form({ isOpen, setIsOpen }) {
  const queryClient = useQueryClient();
  const [formData, setFormData] = React.useState({
    title: "",
    author: "",
    date: "",
    text: "",
  });

  const createPostMutation = useMutation(postPostRequest, {
    onSuccess: () => {
      console.log("Invalidating...");
      queryClient.invalidateQueries("posts");
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
    <div className="">
      <Transition appear show={isOpen}>
        <Dialog
          className="z-10"
          as="div"
          open={isOpen}
          onClose={() => setIsOpen(false)}
        >
          <Transition.Child
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/40" aria-hidden="true" />
            <Dialog.Panel className="fixed top-20 right-2/4 translate-x-1/2 w-6/12 rounded-xl bg-violetDark shadow-xl p-4">
              <form onSubmit={handleSubmit} className="flex gap-5 flex-col">
                <p className="text-center text-2xl font-bold text-white">Create Post</p>
                <input
                  className="rounded-md h-8"
                  name="title"
                  placeholder="  Title"
                  type="text"
                  onChange={handleChange}
                  value={formData.title}
                ></input>
                <div className="flex items-center gap-2">
                  <input
                    className="rounded-md h-8 w-1/2"
                    name="author"
                    placeholder="  Author"
                    type="text"
                    onChange={handleChange}
                    value={formData.author}
                  ></input>
                  <input
                    className="rounded-md w-1/2 h-8"
                    name="date"
                    placeholder="  Date"
                    type="date"
                    onChange={handleChange}
                    value={formData.date}
                  ></input>
                </div>
                <textarea
                  className="rounded-md"
                  name="text"
                  placeholder="  Text"
                  onChange={handleChange}
                  value={formData.text}
                ></textarea>
                <button className="my-2 bg-latteWhite p-2 rounded-md font-bold">
                  Add Post
                </button>
              </form>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </div>
  );
}
