import PlaceholderImage from "@/mockdata/PlaceholderImage";
import Card from "./Card";
import { GrFormNextLink } from "react-icons/gr";

interface Props {
  title: string;
}
export default function ServiceCard(props: Props) {
  return (
    <Card>
      <div className="flex flex-col">
        <h3 className="text-xl font-bold text-center">{props.title}</h3>
        <PlaceholderImage />
        <a href="" className="self-end flex items-center">
          Anmäl dig här <GrFormNextLink />
        </a>
      </div>
    </Card>
  );
}
