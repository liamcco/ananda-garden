import Image from "next/image";
import ImageFallback from "./ImageFallback";

interface Props {
  name?: string;
  image?: string;
}

export default function Ball(props: Props) {
  const background = <ImageFallback />;

  return (
    <div className="flex flex-col items-center gap-1 p-2">
      <div className="overflow-hidden w-32 h-32 rounded-full border-2">
        {background}
      </div>

      {props.name && (
        <div className="py-1 px-2 bg-primary-900 text-white rounded-md w-min relative -top-4">
          <h3 className="inline">{props.name}</h3>
        </div>
      )}
    </div>
  );
}
