export default function HostelOverview() {
  return (
    <div className="container">
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col items-center gap-1">
          <a href="/vandrarhem/lakshmi">
            <div className="w-32 aspect-square rounded-full bg-primary-600"></div>
          </a>
          <div className="py-1 px-2 bg-primary-900 text-white rounded-md w-min">
            <h3 className="inline">Lakshmi</h3>
          </div>
        </div>

        <div className="flex flex-col items-center gap-1">
          <a href="/vandrarhem/ganesha">
            <div className="w-32 aspect-square rounded-full bg-primary-600"></div>
          </a>
          <div className="py-1 px-2 bg-primary-900 text-white rounded-md w-min">
            <h3>Ganesha</h3>
          </div>
        </div>

        <div className="flex flex-col items-center gap-1">
          <a href="/vandrarhem/hanuman">
            <div className="w-32 aspect-square rounded-full bg-primary-600"></div>
          </a>
          <div className="py-1 px-2 bg-primary-900 text-white rounded-md w-min">
            <h3 className="inline">Hanuman</h3>
          </div>
        </div>
      </div>
      <div className="mt-8 flex justify-center">
        <a
          href="/klinik/prices"
          className="py-2 px-8 bg-primary-400 rounded-lg center"
        >
          Priser & Bokning
        </a>
      </div>
    </div>
  );
}
