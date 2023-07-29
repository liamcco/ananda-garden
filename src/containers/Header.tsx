import { Logo } from "@/components";
import PlaceholderImage from "@/mockdata/PlaceholderImage";

function Header() {
  return (
    <div className="max-w-7xl m-auto px-4 my-4 w-full">
      <PlaceholderImage />
      <div className="flex items-center px-4">
        <Logo size="title" />
        <h1 className="text-4xl font-extrabold text-right">
          Hanuman Ananda Garden
        </h1>
      </div>
    </div>
  );
}

export default Header;
