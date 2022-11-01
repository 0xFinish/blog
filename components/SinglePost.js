export function SinglePost(props) {
  return (
    <div className="flex flex-col pt-4">
        <p className="text-2xl font-bold font-title">{props.title}</p>
        <div className="flex flex-row gap-2">
      <p className="font-bold">{props.author}</p>
      <p className="font-bold">{props.date}</p>
      </div>

      <p className="py-4">{props.text}</p>
    </div>
  );
}
