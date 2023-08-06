interface Props {
  name?: string;
  image?: string;
}

export default function BallWithText(props: Props) {
  const background = props.image ? (
    <div
      style={{
        backgroundImage: `url(${props.image})`,
        backgroundSize: "cover",
      }}
      className="w-full h-full flex flex-col justify-end"
    />
  ) : (
    <div className="bg-primary-600 w-full h-full" />
  );
  return (
    <div className="flex flex-col items-center gap-1 p-2">
      <div className="w-32 aspect-square rounded-full overflow-hidden">
        {background}
      </div>

      {props.name && (
        <div className="py-1 px-2 bg-primary-900 text-white rounded-md w-min">
          <h3 className="inline">{props.name}</h3>
        </div>
      )}
    </div>
  );
}
