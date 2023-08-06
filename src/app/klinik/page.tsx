import {
  PageHeader,
  ClinicOverview,
  ClinicInformation,
  ContactInformation,
  ClinicNews,
} from "@/containers";
import { contactShiming } from "@/mockdata/contacts";
import koppning from "@/mockdata/images/koppning.webp";

export default function Page() {
  return (
    <div className="flex flex-col gap-8">
      <PageHeader title="Klinik" image={koppning.src} />
      <ClinicOverview />
      <ClinicNews />
      <hr />
      <ClinicInformation />

      <ContactInformation contact={contactShiming} />
    </div>
  );
}
