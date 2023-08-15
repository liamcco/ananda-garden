import { PageHeader, ContactInformation } from "@/containers";
import { contactShiming } from "@/mockdata/contacts";
import {
  antiagetreatment,
  doubletreatment,
  wrinkletreatment,
  paintreatment,
  massagetreatment,
  guidancetreatment,
  chakratreatment,
  tarottreatment,
} from "@/mockdata/treatments";
import ClinicPriceCard from "@/components/ClinicPriceCard";

export default function Page() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-center">Priser - kliniken</h1>

      <div className="space-y-4">
        <h2 className="text-center font-bold text-2xl">Akupunktur</h2>

        <ClinicPriceCard
          name={paintreatment.name}
          prices={paintreatment.prices}
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-center font-bold text-2xl">Skönhetsakupunktur</h2>

        <ClinicPriceCard
          name={antiagetreatment.name}
          prices={antiagetreatment.prices}
        />
        <ClinicPriceCard
          name={doubletreatment.name}
          prices={doubletreatment.prices}
        />
        <ClinicPriceCard
          name={wrinkletreatment.name}
          prices={wrinkletreatment.prices}
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-center font-bold text-2xl">Massage</h2>

        <ClinicPriceCard
          name={massagetreatment.name}
          prices={massagetreatment.prices}
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-center font-bold text-2xl">Hanumans utbud</h2>

        <ClinicPriceCard
          name={guidancetreatment.name}
          prices={guidancetreatment.prices}
        />
        <ClinicPriceCard
          name={chakratreatment.name}
          prices={chakratreatment.prices}
        />
        <ClinicPriceCard
          name={tarottreatment.name}
          prices={tarottreatment.prices}
        />
      </div>

      <hr />
      <ContactInformation contact={contactShiming} />
    </div>
  );
}
