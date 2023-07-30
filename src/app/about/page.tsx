import { oveInfo, shimingInfo } from "@/mockdata/info";

export default function About() {
  return (
    <div className="flex flex-col gap-8">
      <div className="container">
        <h1 className="text-4xl font-bold text-center">Om oss</h1>
        <div className="my-8">
          <div className="flex items-center justify-between my-8">
            <div className="aspect-square h-40 rounded-full bg-primary-950"></div>
            <h2 className="text-4xl font-bold">Ove</h2>
          </div>
          <p className="px-4">{oveInfo}</p>
        </div>
        <hr className="border border-primary-800" />
        <div className="my-8">
          <div className="flex items-center justify-between my-8">
            <div className="aspect-square h-40 rounded-full bg-primary-950"></div>
            <h2 className="text-4xl font-bold">Shiming</h2>
          </div>
          <p className="px-4">{shimingInfo}</p>
        </div>
      </div>
    </div>
  );
}
