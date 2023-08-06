type Params = {
  room: string;
};

interface Props {
  params: Params;
}

export default function Page(props: Props) {
  return (
    <main>
      <h2 className="text-3xl font-bold text-center">{props.params.room}</h2>
    </main>
  );
}
