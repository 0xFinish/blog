import { useRouter } from "next/router";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getOnePostRequest, deletePostRequest } from "../../requests/requests";
import { SinglePost } from "../../components/SinglePost";
import { UpdatePost } from "../../components/UpdatePost";
import { Footer } from "../../components/Footer";

import React from "react";
import { Navbar } from "../../components/Navbar";
import { DropdownAuthors } from "../../components/DropdownAuthors";
import { Dialog, Transition } from "@headlessui/react";
import { DropdownPosts } from "../../components/DropdownPosts";

export default function DetailedPost() {
  const router = useRouter();
  const [ready, setReady] = React.useState(false);
  const [updatePost, setUpdatePost] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);

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
    setIsOpen(true);
    // deleteTodoMutation.mutate({ _id: data.data._id });
  }

  function handleEdit(e) {
    e.preventDefault();
    setUpdatePost((prev) => !prev);
  }

  if (isLoading) {
    return (
      <div className="grid grid-cols-12 ml-16">
        <Navbar></Navbar>
        <div>Loading...</div>
        <div>
        <Footer></Footer>
        <DropdownAuthors></DropdownAuthors>
      </div>
      </div>
    );
  }

  function checkOpen() {
    if (isOpen || updatePost) {
      return false;
    }
    else {
      return true;
    }
  }

  return (
    <div className={checkOpen() ? "grid grid-cols-12 ml-16 mr-4 h-full divide-x-2" : "grid grid-cols-12 ml-16 mr-4 h-full"}>
      <div className="col-start-2 col-span-8 flex flex-col h-screen">
        <Navbar></Navbar>
        {isSuccess && (
          <SinglePost
            text={data.data.text}
            author={data.data.author}
            date={data.data.date}
            title={data.data.title}
            _id={data.data._id}
          ></SinglePost>
        )}

        <div className="flex py-4 col-start-2 col-span-4">
          <button
            onClick={handleEdit}
            className="w-32 h-10 rounded-lg rounded-r-none border-4 border-r-0 border-orange"
          >
            <p className="text-black">Edit</p>
          </button>
          <button
            onClick={handleDelete}
            className="w-32 h-10 rounded-lg rounded-l-none border-4 border-violetDark"
          >
            Delete
          </button>
        </div>
      </div>
      <Transition appear show={isOpen}>
        <Dialog className="z-10 col-start-1" open={isOpen} onClose={() => setIsOpen(false)}>
          <Transition.Child
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/40 col-start-1" aria-hidden="true" />
            <Dialog.Panel className="p-4 bg-blueLight col-start-1 fixed top-20 right-2/4 translate-x-1/2 rounded-lg w-2/6">
              <Dialog.Title className="text-xl font-semibold text-center my-2">Delete Post</Dialog.Title>
              <Dialog.Description>
                This will permanently delete the Post!
              </Dialog.Description>

              <p>You sure you want to delete your account?</p>
              <div className="flex justify-between mt-6 mb-2">
                <button
                  className="px-6 bg-latteWhite py-2 rounded-lg border-fuchsia-400"
                  onClick={() => setIsOpen(false)}
                >
                  Cancel
                </button>
                <button
                  className="px-6 bg-orange py-2 rounded-lg"
                  onClick={() => {
                    setIsOpen(false);
                    deleteTodoMutation.mutate({ _id: data.data._id });
                  }}
                >
                  Delete
                </button>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
      <Transition appear show={updatePost}>
        <Dialog
          open={updatePost}
          className="z-10"
          onClose={() => setUpdatePost(false)}
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
            <Dialog.Panel className="p-4 bg-blueLight text-black fixed top-20 right-2/4 translate-x-1/2 rounded-lg w-6/12">
              <UpdatePost
                setUpdatePost={setUpdatePost}
                formData={{
                  text: data.data.text,
                  author: data.data.author,
                  date: data.data.date,
                  title: data.data.title,
                }}
                _id={{ _id: data.data._id }}
              ></UpdatePost>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
      <div>
        <Footer></Footer>
        <DropdownAuthors></DropdownAuthors>
      </div>
    </div>
  );
}
