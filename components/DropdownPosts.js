import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { getPostsRequest } from "../requests/requests";

export function DropdownPosts() {
  const { isLoading, isError, isSuccess, data, error } = useQuery(
    ["posts"],
    getPostsRequest
  );

  return (
    <Menu className="" as="menu">
      <Menu.Button className="h-10 w-full bg-red-300 rounded-md mx-2 font-bold text-lg">
        Posts
      </Menu.Button>
      <Transition
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="flex flex-col bg-blue-300 rounded-md w-full mx-2 mt-2">
          {isSuccess && data.map((val, i) => {
            return (
              <Menu.Item key={i}>
                <Link
                  href={{
                    pathname: `/posts/${val._id}`,
                  }}
                >
                  <p className="font-extrabold p-1 ">{val.title}</p>
                </Link>
              </Menu.Item>
            );
          })}
          
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
