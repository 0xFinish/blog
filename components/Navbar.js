import Link from "next/link";

export function Navbar() {
  return (
    <div className="flex bg-slate-500 col-span-full row-span-1 h-12 justify-between items-center">
      <span className="flex">
        <h2 className="font-bold text-xl text-left px-4">Navbar</h2>
        <p>
          <button className="bg-red-300"><Link href="/addPost">Add new post</Link></button>
        </p>
      </span>
      <button>
        Source code
      </button>
    </div>
  );
}
