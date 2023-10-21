import PageHeader from "../shared/PageHeader";
import { scout } from "@/mockdata/images";

function Header() {
  return (
    <div className="container">
      <div className="flex flex-col md:flex-row justify-around items-center">
        <div className="max-w-lg w-full">
          <PageHeader title="" image={scout.src} />
        </div>
        <div className="flex">
          <h1 className="text-4xl md:text-6xl font-extrabold flex flex-col">
            <span>Hanuman</span>
            <span>Ananda</span>
            <span>Garden</span>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Header;
