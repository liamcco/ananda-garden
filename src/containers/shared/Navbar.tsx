import { Logo } from "@/components";
import { FaChevronDown } from "react-icons/fa";
export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full">
      <div className="p-3 bg-primary-400 flex justify-between">
        <ul className="flex gap-4 items-center font-bold">
          <li>
            <a href="/">
              <Logo size="icon" />
            </a>
          </li>
          <li>
            <a href="/butik">Butik</a>
          </li>
          <li>
            <a href="/klinik">Klinik</a>
          </li>
          <li>
            <a href="/vandrarhem">Vandrarhem</a>
          </li>
        </ul>
        <button className="mx-1">
          <FaChevronDown />
        </button>
      </div>
    </nav>
  );
}
