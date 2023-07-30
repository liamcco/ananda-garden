import PlaceholderImage from "@/mockdata/PlaceholderImage";

interface Props {
  title: string;
}

export default function PageHeader(props: Props) {
  return (
    <div className="container">
      <PlaceholderImage />
      <h1 className="text-4xl font-bold text-center">{props.title}</h1>
    </div>
  );
}
