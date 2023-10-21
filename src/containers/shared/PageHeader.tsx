interface Props {
  title: string;
  size?: "small" | "large";
  image?: string;
}

function ImageBackground(props: { children: React.ReactNode; image?: string }) {
  if (!props.image) {
    return <div>{props.children}</div>;
  }

  return (
    <div
      style={{
        backgroundImage: `url(${props.image})`,
        backgroundSize: "cover",
      }}
      className="w-full h-full flex flex-col justify-end"
    >
      {props.children}
    </div>
  );
}

function MockBackground(props: { children: React.ReactNode; image?: string }) {
  return (
    <div className="bg-primary-300 w-full h-full flex flex-col justify-end">
      {props.children}
    </div>
  );
}

export default function PageHeader(props: Props) {
  const Background = props.image ? ImageBackground : MockBackground;

  return (
    <div className="container">
      <div className="rounded-lg mb-2 overflow-hidden shadow max-h-[50vh] h-full w-full aspect-video">
        <Background image={props.image}>
          {props.title && (
            <div className="bottom-0 w-full h-1/2 bg-gradient-to-t from-black flex flex-col justify-end items-start">
              <h1 className="py-4 px-8 bottom-0 font-bold text-white text-center">
                <span
                  className={props.size === "small" ? "text-2xl" : "text-4xl"}
                >
                  {props.title}
                </span>
              </h1>
            </div>
          )}
        </Background>
      </div>
    </div>
  );
}
