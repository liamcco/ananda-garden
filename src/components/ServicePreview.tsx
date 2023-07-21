import Feature from "./Feature";
import Image from "next/image";

interface Props {
  data: {
    heading: string;
    features: {
      title: string;
      text: string;
    }[];
  };
  img: string;
}

const ServicePreview = (props: Props) => (
  <div className="w-5/6">
    <h1>{props.data.heading}</h1>
    <div className="flex items-center">
      <div className="flex justify-center mr-12">
        <Image src={props.img} alt="prev" />
      </div>
      <div className="flex flex-col items-center">
        {props.data.features.map((item, index) => (
          <Feature
            title={item.title}
            text={item.text}
            key={item.title + index}
          />
        ))}
      </div>
    </div>
  </div>
);

export default ServicePreview;
