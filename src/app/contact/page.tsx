import { Card } from "@/components";
import { FaPhone } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { GrMapLocation } from "react-icons/gr";
import { OpeningHours } from "@/containers";
import { openingHours } from "@/mockdata/openingHours";

export default function Contact() {
  return (
    <div className="flex flex-col gap-8">
      <div className="container">
        <h1 className="text-4xl font-bold text-center">Kontakt</h1>
        <div className="my-4 space-y-4">
          <Card>
            <div className="p-4">
              <ul className="flex flex-col gap-2">
                <li className="flex items-center gap-4">
                  <FaPhone />
                  <a href="tel:+46707256152">070-725 61 52</a>
                </li>
                <li className="flex items-center gap-4">
                  <MdOutlineMail />
                  <a href="mailto:ove.holmstrom@gmail.com">
                    ove.holmstrom@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-4">
                  <GrMapLocation />{" "}
                  <a href="https://goo.gl/maps/L5vNk5LPoF36CWPa6">
                    Edsgatan 39, 66230 Åmål
                  </a>
                </li>
              </ul>
            </div>
          </Card>
          <OpeningHours hours={openingHours} />
        </div>
      </div>
    </div>
  );
}
