import Link from "next/link";

export function Post(props) {

  return (
    <div className="flex flex-col gap-4 p-2 h-full">
      <Link
        href={{
          pathname: `/posts/${props._id}`,
        }}
      >
        <p className="font-extrabold text-xl cursor-pointer hover:underline decoration-2 hover:text-darkgreen">{props.title}</p>
      </Link>
      <p className="font-bold">
        {props.author} {props.date}
      </p>
      <p className="">{props.text}</p>
    </div>
  );
}
