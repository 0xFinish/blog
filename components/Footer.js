import { BsTwitter } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import Link from "next/link";

export function Footer() {
  return (
    <div className="fixed bottom-0 right-10 w-2/12 ml-4 flex flex-col justify-center items-center py-4">
      <span className="flex">
        <p className="text-xl opacity-75 mr-2">Made</p>
        <p className="text-xl opacity-75 mr-2">by</p>
        <p className="text-xl opacity-75 text-orange">@</p>
        <p className="text-xl opacity-75 text-blueLight">f</p>
        <p className="text-xl opacity-75 text-darkgreen">i</p>
        <p className="text-xl opacity-75 text-violetDark">9</p>
        <p className="text-xl opacity-75 text-darkgreen">i</p>
        <p className="text-xl opacity-75 text-orange">s</p>
        <p className="text-xl opacity-75 text-darkgreen">h</p>
      </span>
      <span className="flex gap-2 ">
        <Link href="https://github.com/fi9ish">
          <BsGithub
            size={20}
            className="opacity-50 hover:opacity-100 hover:text-blueLight"
          ></BsGithub>
        </Link>
        <Link href="https://twitter.com/FinishMee">
          <BsTwitter
            size={20}
            className="opacity-50 hover:opacity-100  hover:text-orange"
          ></BsTwitter>
        </Link>
        <Link href="https://t.me/fi9ish">
          <FaTelegramPlane
            size={20}
            className="opacity-50 hover:opacity-100  hover:text-darkgreen"
          ></FaTelegramPlane>
        </Link>
      </span>
    </div>
  );
}
