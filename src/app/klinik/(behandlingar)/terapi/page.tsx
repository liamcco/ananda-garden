import { PageHeader, ContactInformation } from "@/containers";
import TerapiInformation from "@/containers/clinic/TerapiInformation";
import { contactShiming } from "@/mockdata/contacts";
import therapy from "@/mockdata/images/therapy.jpg";

export default function Page() {
  return (
    <div className="flex flex-col gap-8">
      <PageHeader title="Terapi" image={therapy.src} />
      <TerapiInformation />
      <ContactInformation contact={contactShiming} />
    </div>
  );
}
