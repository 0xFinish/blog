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
    <Menu className="fixed top-0 right-0 w-3/12 flex flex-col justify-center items-center" as="menu">
      <Menu.Button className="h-10 w-11/12 rounded-md font-bold ">
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
        <Menu.Items className="flex flex-col bg-blueLight rounded-md justify-center my-2 divide-y-2 divide-latteWhite">
          {isSuccess && data.map((val, i) => {
            return (
              <div key={i} className="px-8">
              <Menu.Item key={i}>
                <Link
                  href={{
                    pathname: `/authors/${val}`,
                  }}
                >
                  <p className="font-extrabold p-1 ">{val}</p>
                </Link>
              </Menu.Item></div>
            );
          })}
          
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
