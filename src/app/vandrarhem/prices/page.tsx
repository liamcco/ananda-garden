import HostelPriceCard from "@/components/HostelPriceCard";
import { ContactInformation } from "@/containers";
import { contactOve } from "@/mockdata/contacts";
import { lakshmi, hanuman, ganesha } from "@/mockdata/images";

export default function Page() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-center">Priser - vandrarhem</h1>
      <HostelPriceCard
        name="Lakshmi"
        image={lakshmi.src}
        price={500}
        link="/vandrarhem/room/lakshmi"
      />

      <HostelPriceCard
        name="Ganesha"
        image={ganesha.src}
        price={500}
        link="/vandrarhem/room/ganesha"
      />

      <HostelPriceCard
        name="Hanuman"
        image={hanuman.src}
        price={500}
        link="/vandrarhem/room/hanuman"
      />
      <hr />
      <ContactInformation contact={contactOve} />
    </div>
  );
}
