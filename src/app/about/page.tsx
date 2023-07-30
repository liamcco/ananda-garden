export default function About() {
  return (
    <div className="flex flex-col gap-4">
      <div className="max-w-7xl m-auto px-4 my-4 w-full">
        <h1 className="text-4xl font-bold text-center">Om oss</h1>
        <div className="my-8">
          <div className="flex items-center justify-between my-8">
            <div className="aspect-square h-40 rounded-full bg-primary-950"></div>
            <h2 className="text-4xl font-bold">Ove</h2>
          </div>
          <p className="px-4">
            Hej! Jag heter Ove, här kommer en lååååång text om mig och min
            historia, mina intressen och mycket annat skoj.
          </p>
        </div>
        <hr className="border border-primary-800" />
        <div className="my-8">
          <div className="flex items-center justify-between my-8">
            <div className="aspect-square h-40 rounded-full bg-primary-950"></div>
            <h2 className="text-4xl font-bold">Shiming</h2>
          </div>
          <p className="px-4">
            Hej! Jag heter Shiming, här kommer en lååååång text om mig och min
            historia, mina intressen och mycket annat skoj.
          </p>
        </div>
      </div>
    </div>
  );
}
