import PlaceholderImage from "@/mockdata/PlaceholderImage";
import Card from "./Card";
import { PageHeader } from "@/containers";

interface Props {
  title: string;
  description: string;
  image?: string;
}
export default function ServiceCard(props: Props) {
  return (
    <Card>
      <PageHeader title={props.title} image={props.image} />
      <p className="p-2">{props.description}</p>
    </Card>
  );
}
