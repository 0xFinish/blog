import { DropdownAuthors } from "./DropdownAuthors"
import { DropdownPosts } from "./DropdownPosts"
import { Friends } from "./Friends"
import { Navbar } from "./Navbar"
import { OtherPost } from "./OtherPosts"
import { PostList } from "./PostsList"

export function Blog() {
    return(
        <div className="flex">
            <Navbar></Navbar>
            {/* <DropdownPosts></DropdownPosts> */}
            <PostList></PostList>
            {/* <DropdownAuthors></DropdownAuthors> */}
        </div>
    )
}