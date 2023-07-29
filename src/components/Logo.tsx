import logo from "@/assets/logo.png";
import Image from "next/image";

interface Props {
  size?: "icon" | string;
}

export default function Logo(props: Props) {
  const width = ((size) => {
    switch (props.size) {
      case "icon":
        return "48px";
      default:
        return "100%";
    }
  })(props.size);

  return (
    <div style={{ width: width }}>
      <div className="bg-white rounded-full flex justify-center items-center aspect-square w-full">
        <Image src={logo} alt="logo" className="w-3/4" />
      </div>
    </div>
  );
}
