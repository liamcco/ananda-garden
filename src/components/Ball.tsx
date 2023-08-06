interface Props {
  name?: string;
}

export default function BallWithText(props: Props) {
  return (
    <div className="flex flex-col items-center gap-1 p-2">
      <div className="w-32 aspect-square rounded-full bg-primary-600"></div>

      {props.name && (
        <div className="py-1 px-2 bg-primary-900 text-white rounded-md w-min">
          <h3 className="inline">{props.name}</h3>
        </div>
      )}
    </div>
  );
}
