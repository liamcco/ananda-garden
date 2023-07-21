interface Props {
  text: string;
  link: string;
}

function Article(props: Props) {
  return (
    <a href={props.link}>
      <div className="rounded-md">
        <div className="p-4">
          <div>
            <h3 className="mb-4">{props.text}</h3>
          </div>
          <p>Läs mer!</p>
        </div>
      </div>
    </a>
  );
}

export default Article;
