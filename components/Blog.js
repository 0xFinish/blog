import { DropdownAuthors } from "./DropdownAuthors"
import { DropdownPosts } from "./DropdownPosts"
import { Friends } from "./Friends"
import { Navbar } from "./Navbar"
import { OtherPost } from "./OtherPosts"
import { PostList } from "./PostsList"

export function Blog() {
    return(
        <div className="grid grid-cols-5 gap-4 mb-10">
            <Navbar></Navbar>
            <DropdownPosts></DropdownPosts>
            <PostList></PostList>
            <DropdownAuthors></DropdownAuthors>
        </div>
    )
}