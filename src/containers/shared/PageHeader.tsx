interface Props {
  title: string;
  size?: "small" | "large";
}

export default function PageHeader(props: Props) {
  return (
    <div className="container">
      <div className="rounded-lg mb-2 h-[200px] bg-primary-300 overflow-hidden flex flex-col justify-end shadow">
        <div className="bottom-0 w-full h-1/2 bg-gradient-to-t from-black flex flex-col justify-end items-start">
          <h1 className="py-4 px-8 bottom-0 font-bold text-white text-center">
            <span className={props.size === "small" ? "text-2xl" : "text-4xl"}>
              {props.title}
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
}
