import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { getUniquePostsRequest } from "../requests/requests";

export function DropdownAuthors() {
  const { isLoading, isError, isSuccess, data, error } = useQuery(
    ["authors"],
    getUniquePostsRequest
  );

  return (
    <Menu className="col-start-1 col-end-2 row-start-2" as="menu">
      <Menu.Button className="h-10 w-11/12 bg-red-300 rounded-md mx-2 font-bold">
        Authors
      </Menu.Button>
      <Transition
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="flex flex-col bg-blue-300 rounded-md w-11/12 mx-2 mt-2">
          {isSuccess && data.map((val, i) => {
            return (
              <Menu.Item key={i}>
                <Link
                  href={{
                    pathname: `/authors/${val}`,
                  }}
                >
                  <p className="font-extrabold p-1 ">{val}</p>
                </Link>
              </Menu.Item>
            );
          })}
          
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
