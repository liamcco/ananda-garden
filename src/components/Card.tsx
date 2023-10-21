import clsx from "clsx";

interface Props {
  children: React.ReactNode;
  freeSize?: boolean;
}

export default function Card(props: Props) {
  return (
    <div
      className={clsx(
        "border rounded-lg p-2 shadow bg-white",
        !props.freeSize && "max-w-md"
      )}
    >
      {props.children}
    </div>
  );
}
