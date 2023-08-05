export default function ClinicOverview() {
  return (
    <div className="container">
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col items-center gap-1">
          <a href="/klinik/akupunktur">
            <div className="w-32 aspect-square rounded-full bg-primary-600"></div>
          </a>
          <div className="py-1 px-2 bg-primary-900 text-white rounded-md w-min">
            <h3 className="inline">Akupunktur</h3>
          </div>
        </div>

        <div className="flex flex-col items-center gap-1">
          <a href="/klinik/akupunktur">
            <div className="w-32 aspect-square rounded-full bg-primary-600"></div>
          </a>
          <div className="py-1 px-2 bg-primary-900 text-white rounded-md w-min">
            <h3>Skönhets&shy;akupunktur</h3>
          </div>
        </div>

        <div className="flex flex-col items-center gap-1">
          <a href="/klinik/massage">
            <div className="w-32 aspect-square rounded-full bg-primary-600"></div>
          </a>
          <div className="py-1 px-2 bg-primary-900 text-white rounded-md w-min">
            <h3 className="inline">Massage</h3>
          </div>
        </div>

        <div className="flex flex-col items-center gap-1">
          <a href="/klinik/terapi">
            <div className="w-32 aspect-square rounded-full bg-primary-600"></div>
          </a>
          <div className="py-1 px-2 bg-primary-900 text-white rounded-md w-min">
            <h3 className="inline">Terapi</h3>
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
