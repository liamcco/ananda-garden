import { Logo } from "@/components";
import PlaceholderImage from "@/mockdata/PlaceholderImage";

function Header() {
  return (
    <div className="container">
      <PlaceholderImage />
      <div className="flex items-center py-4 justify-around">
        <Logo size="title" />
        <h1 className="text-4xl font-extrabold text-right">
          Hanuman Ananda Garden
        </h1>
      </div>
    </div>
  );
}

export default Header;
