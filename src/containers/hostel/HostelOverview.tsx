import { Ball } from "@/components";
import { lakshmi, ganesha, hanuman } from "@/mockdata/images";

export default function HostelOverview() {
  return (
    <div className="container">
      <h2 className="text-3xl font-bold text-center">Våra rum</h2>
      <div className="flex flex-wrap mb-8 justify-around">
        <a href="/vandrarhem/room/lakshmi">
          <Ball name="Lakshmi" image={lakshmi.src} />
        </a>
        <a href="/vandrarhem/room/ganesha">
          <Ball name="Ganesha" image={ganesha.src} />
        </a>
        <a href="/vandrarhem/room/hanuman">
          <Ball name="Hauman" image={hanuman.src} />
        </a>
      </div>
      <div className="flex justify-center">
        <a
          href="/vandrarhem/prices"
          className="py-2 px-8 bg-primary-400 rounded-lg center"
        >
          Priser & Bokning
        </a>
      </div>
    </div>
  );
}
