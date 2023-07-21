interface Props {
  title: string;
  text: string;
}

function Feature(props: Props) {
  return (
    <div className="m-4">
      <div className="mb-4">
        <h1>{props.title}</h1>
      </div>
      <div className="w-max-lg">
        <p>{props.text}</p>
      </div>
    </div>
  );
}

export default Feature;
