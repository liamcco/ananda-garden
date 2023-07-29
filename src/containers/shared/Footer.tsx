import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaAirbnb } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-auto border-t-1 border-slate-400">
      <div className="p-8 bg-primary-400">
        <div className="w-full flex flex-col items-center p-4 mb-4">
          <h3>Vet du vad en orgonit är?</h3>
          <a href="/butik">
            <p>Besök vår butik!</p>
          </a>
        </div>

        <div className="flex justify-between gap-2 mb-4 p-4">
          <FaFacebookSquare size="3em" />
          <FaInstagramSquare size="3em" />
          <FaAirbnb size="3em" />
        </div>

        <div className="w-full flex justify-center">
          <p>@2023 Hanunman Ananda Garden</p>
        </div>
      </div>
    </footer>
  );
}
