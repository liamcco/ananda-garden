import { WorkshopCard } from "@/components";
import { smycke, tarot, dröm } from "@/mockdata/images";

export default function Workshops() {
  return (
    <section className="container">
      <h2 className="text-xl font-bold">Workshops</h2>
      <p className="text-red-800">
        (Workshopen kommer hållas vid minst 3 intresseanmälningar, så ta gärna
        med en eller flera vänner.)
      </p>

      <div className="flex flex-col gap-4 my-2">
        <WorkshopCard title="Smyckestillverkning" image={smycke.src} />
        <WorkshopCard title="Tarotläsning" image={tarot.src} />
        <WorkshopCard title="Drömfångare" image={dröm.src} />
      </div>
    </section>
  );
}
