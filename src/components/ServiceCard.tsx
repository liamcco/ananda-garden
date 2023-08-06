import PlaceholderImage from "@/mockdata/PlaceholderImage";
import Card from "./Card";
import { PageHeader } from "@/containers";

interface Props {
  title: string;
  description: string;
}
export default function ServiceCard(props: Props) {
  return (
    <Card>
      <PageHeader title={props.title} />
      <p className="p-2">{props.description}</p>
    </Card>
  );
}
