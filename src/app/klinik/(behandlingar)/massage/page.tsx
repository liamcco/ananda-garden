import { PageHeader, ContactInformation } from "@/containers";
import MassageInformation from "@/containers/clinic/MassageInformation";
import { contactShiming } from "@/mockdata/contacts";
import massage from "@/mockdata/images/massage.webp";

export default function Page() {
  return (
    <div className="flex flex-col gap-8">
      <PageHeader title="Massage" image={massage.src} />
      <MassageInformation />
      <ContactInformation contact={contactShiming} />
    </div>
  );
}
