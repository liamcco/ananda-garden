import PlaceholderImage from "@/mockdata/PlaceholderImage";
import Card from "./shared/Card";

interface Props {
  title: string;
  description: string;
}
export default function ServiceCard(props: Props) {
  return (
    <Card>
      <h3 className="text-xl font-bold text-center">{props.title}</h3>
      <PlaceholderImage />
      <p className="p-2">{props.description}</p>
    </Card>
  );
}
