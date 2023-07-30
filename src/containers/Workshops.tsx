import { WorkshopCard } from "@/components";

export default function Workshops() {
  return (
    <section className="max-w-7xl m-auto px-4 my-4 w-full">
      <h2 className="text-xl font-bold">Workshops</h2>
      <p className="italic">Denna månad erbjuder vi följande workshops</p>

      <div className="flex flex-col gap-4 my-2">
        <WorkshopCard title="Smyckestillverkning" />
        <WorkshopCard title="Tarotläsning" />
        <WorkshopCard title="Drömfångare" />
      </div>
      <p className="text-red-800">
        (Workshopen kommer startas när det blir minst 3 deltagare, så tar gärna
        med en eller flera vänner om ni är intresserade.)
      </p>
    </section>
  );
}
