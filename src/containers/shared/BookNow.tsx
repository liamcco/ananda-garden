export default function BookNow() {
  return (
    <div className="container">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-extrabold">Boka</h2>
        <div>
          <a
            href="/klinik/prices"
            className="p-2 m-1 bg-primary-300 rounded-md"
          >
            Behandling
          </a>
          <a
            href="/vandrarhem/prices"
            className="p-2 m-1 bg-primary-300 rounded-md"
          >
            Boende
          </a>
        </div>
      </div>
    </div>
  );
}
