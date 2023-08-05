import logo from "@/assets/logo.png";
import Image from "next/image";

interface Props {
  size?: "icon" | "title" | string;
}

export default function Logo(props: Props) {
  const width = ((size) => {
    switch (size) {
      case "icon":
        return "38px";
      case "title":
        return "148px";
      default:
        return "100%";
    }
  })(props.size);

  return <Image src={logo} alt="logo" style={{ width: width }} />;
}
