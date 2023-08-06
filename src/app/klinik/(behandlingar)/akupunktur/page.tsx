import { PageHeader, ContactInformation } from "@/containers";
import { contactShiming } from "@/mockdata/contacts";
import aku from "@/mockdata/images/aku.webp";

export default function Page() {
  return (
    <div className="flex flex-col gap-8">
      <PageHeader title="Akupunktur" image={aku.src} />
      <hr />
      <ContactInformation contact={contactShiming} />
    </div>
  );
}
