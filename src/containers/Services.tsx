import ServiceCard from "../components/ServiceCard";
import { shopService, clinicService, hostelService } from "@/mockdata/services";

export default function Services() {
  return (
    <section className="container">
      <h2 className="text-3xl font-extrabold mb-4">Våra tjänster</h2>
      <div className="flex flex-col items-center gap-4">
        <ServiceCard
          title={shopService.title}
          description={shopService.description}
        />
        <ServiceCard
          title={clinicService.title}
          description={clinicService.description}
        />
        <ServiceCard
          title={hostelService.title}
          description={hostelService.description}
        />
      </div>
    </section>
  );
}
