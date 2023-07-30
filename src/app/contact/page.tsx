import { Card } from "@/components";
import { FaPhone } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { GrMapLocation } from "react-icons/gr";

export default function Contact() {
  return (
    <div className="flex flex-col gap-4">
      <div className="max-w-7xl m-auto px-4 my-4 w-full">
        <h1 className="text-4xl font-bold text-center">Kontakt</h1>
        <div className="my-4">
          <Card>
            <div className="p-4">
              <ul className="flex flex-col gap-2">
                <li className="flex items-center gap-4">
                  <FaPhone /> 070-123 45 67
                </li>
                <li className="flex items-center gap-4">
                  <MdOutlineMail /> info@företag.se
                </li>
                <li className="flex items-center gap-4">
                  <GrMapLocation /> Företagsvägen 1, 123 45 Stad
                </li>
              </ul>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
