import ServiceCard from "../../components/ServiceCard";
import { shopService, clinicService, hostelService } from "@/mockdata/services";
import clinicImage from "@/mockdata/images/koppning.webp";
import { kitchen, store } from "@/mockdata/images";

export default function Services() {
  return (
    <section className="container">
      <h2 className="text-3xl font-extrabold mb-4">Våra tjänster</h2>
      <div className="flex justify-center flex-wrap items-center gap-4">
        <ServiceCard
          title={shopService.title}
          description={shopService.description}
          image={store.src}
        />
        <ServiceCard
          title={clinicService.title}
          description={clinicService.description}
          image={clinicImage.src}
        />
        <ServiceCard
          title={hostelService.title}
          description={hostelService.description}
          image={kitchen.src}
        />
      </div>
    </section>
  );
}
