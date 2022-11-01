import { DropdownAuthors } from "../components/DropdownAuthors";
import { DropdownPosts } from "../components/DropdownPosts";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { PostsList } from "../components/PostsList";

export default function Home() {
  return (
    // <div className="grid grid-cols-12 ml-16 divide-x-2 ">
    //     <Navbar></Navbar>
    //     <PostsList></PostsList>
    //   <div className="col-start-10 col-span-3 flex flex-col2 justify-between">
    //     <Footer></Footer>
    //     <DropdownAuthors></DropdownAuthors>
    //   </div>
    // </div>
    <div className="grid ml-16 grid-cols-12 divide-x-2 divide-indigo-800 h-full min-h-full mr-4">
      <div className="col-start-1 col-span-9">
        <Navbar></Navbar>
        <PostsList></PostsList>
      </div>
      <div className="col-start-10 col-span-3">
        <Footer></Footer>
        <DropdownAuthors></DropdownAuthors>
      </div>
    </div>
  );
}
