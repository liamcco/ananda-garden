import {
  PageHeader,
  ClinicOverview,
  ClinicInformation,
  ContactInformation,
} from "@/containers";
import { contactShiming } from "@/mockdata/contacts";

function Klinik() {
  return (
    <div className="flex flex-col gap-8">
      <PageHeader title="Klinik" />
      <ClinicOverview />
      <hr />
      <ClinicInformation />

      <ContactInformation contact={contactShiming} />
    </div>
  );
}

export default Klinik;
