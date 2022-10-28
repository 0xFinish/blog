import Link from 'next/link'
import { CreateNewPost } from '../components/CreateNewPost'

export default function addPost() {
    return(
        <div>
            <Link href="/">Back to the Posts!</Link>
            <CreateNewPost></CreateNewPost>
        </div>
    )
  }