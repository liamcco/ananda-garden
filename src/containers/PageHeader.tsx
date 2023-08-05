import PlaceholderImage from "@/mockdata/PlaceholderImage";

interface Props {
  title: string;
}

export default function PageHeader(props: Props) {
  return (
    <div className="container">
      <div className="rounded-lg mb-2 h-[200px] bg-primary-300 overflow-hidden flex flex-col justify-end shadow">
        <div className="bottom-0 w-full h-1/2 bg-gradient-to-t from-black flex flex-col justify-end items-start">
          <h1 className="py-4 px-8 text-4xl bottom-0 font-bold text-white text-center">
            {props.title}
          </h1>
        </div>
      </div>
    </div>
  );
}
