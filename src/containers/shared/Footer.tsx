import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaAirbnb } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-auto">
      <div className="p-8 bg-primary-400 rounded-t-md border-t-1 border-slate-400">
        <div className="w-full flex flex-col items-center p-4 mb-4">
          <div className="mt-4 text-center">
            <a href="tel:+46707256152">
              <p>
                Ring oss: <span className="font-bold p-2">070-725 61 52</span>
              </p>
            </a>
          </div>

          <div className="mt-4 text-center">
            <a href="https://goo.gl/maps/L5vNk5LPoF36CWPa6">
              <p>
                Hitta hit:{" "}
                <span className="font-bold p-2">Edsgatan 39, 66230 Åmål</span>
              </p>
            </a>
          </div>
        </div>

        <div className="m-auto max-w-sm flex justify-around gap-2 mb-4 p-4">
          <a href="https://www.facebook.com/hanumananandagarden/">
            <FaFacebookSquare size="3em" />
          </a>
          <a href="https://www.instagram.com/hanumananandagarden/">
            <FaInstagramSquare size="3em" />
          </a>
        </div>

        <div className="w-full flex justify-center">
          <p>@2023 Hanunman Ananda Garden</p>
        </div>
      </div>
    </footer>
  );
}
