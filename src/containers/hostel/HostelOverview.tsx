import { Ball } from "@/components";

export default function HostelOverview() {
  return (
    <div className="container">
      <h2 className="text-3xl font-bold text-center">Våra rum</h2>
      <div className="flex flex-wrap mb-8 justify-around">
        <a href="/vandrarhem/room/lakshmi">
          <Ball name="Lakshmi" />
        </a>
        <a href="/vandrarhem/room/ganesha">
          <Ball name="Ganesha" />
        </a>
        <a href="/vandrarhem/room/hanuman">
          <Ball name="Hauman" />
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
