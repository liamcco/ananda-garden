import PlaceholderImage from "@/mockdata/PlaceholderImage";
import Card from "./Card";
import { GrFormNextLink } from "react-icons/gr";
import { PageHeader } from "@/containers";

interface Props {
  title: string;
  image?: string;
}
export default function ServiceCard(props: Props) {
  return (
    <Card>
      <div className="flex flex-col">
        <PageHeader title={props.title} image={props.image} size="small" />
        <a href="" className="self-end flex items-center">
          Anmäl dig här <GrFormNextLink />
        </a>
      </div>
    </Card>
  );
}
