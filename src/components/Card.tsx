interface Props {
  children: React.ReactNode;
}

export default function Card(props: Props) {
  return (
    <div className="border rounded-lg p-2 shadow bg-white max-w-md">
      {props.children}
    </div>
  );
}
