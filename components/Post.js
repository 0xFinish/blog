import Link from "next/link";

export function Post(props) {


  return (
    <div className="flex flex-col gap-4 m-4">
      <Link
        href={{
          pathname: `/posts/${props._id}`,
        }}
      >
        <p className="font-extrabold text-xl">{props.title}</p>
      </Link>
      <p className="font-bold">
        {props.author} {props.date}
      </p>
      <p className="">{props.text}</p>
    </div>
  );
}
