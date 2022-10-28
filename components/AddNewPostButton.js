import Link from "next/link"

export function AddNewPostButton() {



    return(
        <div>
           <Link href="/addPost"><button className="rounded-md h-10 w-40 bg-blue-300 fixed right-1/4 bottom-12">Create Post</button></Link>
        </div>
    )
}