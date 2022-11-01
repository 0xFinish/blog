import Link from "next/link";
import { BiAddToQueue } from "react-icons/bi";
import { FiGithub } from "react-icons/fi";
import { Form } from "./Form";
import React from "react";

export function Navbar() {
  let [isOpen, setIsOpen] = React.useState(false);

  return (
    <div>
      <div className="flex flex-col bg-blueLight fixed left-0 h-full w-16 items-center justify-between">
        <Link href="/">
          <div className="flex flex-col items-center cursor-pointer">
            <p className="font-navbar text-3xl text-latteWhite">B</p>
            <p className="font-navbar text-3xl text-darkgreen">L</p>
            <p className="font-navbar text-3xl text-violetDark">O</p>
            <p className="font-navbar text-3xl text-orange">G</p>
          </div>
        </Link>
        {/* <h2 className="font-bold text-xl text-left px-4">Blog</h2> */}
        <span className="flex flex-col align-middle">
          <Link href="https://github.com/fi9ish/blog">
            <button className="my-4 items-center flex justify-center text-darkgreen">
              <FiGithub size={35}></FiGithub>
            </button>
          </Link>

          <button
            className="w-16 h-16 items-center flex justify-center text-latteWhite"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <BiAddToQueue size={35} color=""></BiAddToQueue>
          </button>
        </span>
      </div>
      <Form isOpen={isOpen} setIsOpen={setIsOpen}></Form>
    </div>
  );
}
