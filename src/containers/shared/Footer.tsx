import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaAirbnb } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-auto">
      <div className="p-8 bg-primary-400 rounded-t-md border-t-1 border-slate-400">
        <div className="w-full flex flex-col items-center p-4 mb-4">
          <h3>Vet du vad en orgonit är?</h3>
          <a href="/butik">
            <p>Besök vår butik!</p>
          </a>
        </div>

        <div className="m-auto max-w-sm flex justify-between gap-2 mb-4 p-4">
          <a href="https://www.facebook.com/hanumananandagarden/">
            <FaFacebookSquare size="3em" />
          </a>
          <a href="https://www.instagram.com/hanumananandagarden/">
            <FaInstagramSquare size="3em" />
          </a>
          <a href="">
            <FaAirbnb size="3em" />
          </a>
        </div>

        <div className="w-full flex justify-center">
          <p>@2023 Hanunman Ananda Garden</p>
        </div>
      </div>
    </footer>
  );
}
