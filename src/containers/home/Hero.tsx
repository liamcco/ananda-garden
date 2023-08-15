import { Logo } from "@/components";
import PlaceholderImage from "@/mockdata/PlaceholderImage";
import PageHeader from "../shared/PageHeader";
import { scout } from "@/mockdata/images";

function Header() {
  return (
    <div className="container">
      <PageHeader title="" image={scout.src} />
      <div className="flex items-center p-2 justify-around">
        <Logo size="title" />
        <h1 className="text-4xl lg:text-7xl font-extrabold text-right">
          Hanuman Ananda Garden
        </h1>
      </div>
    </div>
  );
}

export default Header;
