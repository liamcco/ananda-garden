interface Props {
  content: string;
}

export default function Article(props: Props) {
  return (
    <div className="container">
      <p className="px-4">{props.content}</p>
    </div>
  );
}
