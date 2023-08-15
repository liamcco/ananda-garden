import {
  PageHeader,
  ContactInformation,
  AkupunkturInformation,
} from "@/containers";
import { contactShiming } from "@/mockdata/contacts";
import aku from "@/mockdata/images/aku.webp";

export default function Page() {
  return (
    <div className="flex flex-col gap-8">
      <PageHeader title="Akupunktur" image={aku.src} />
      <AkupunkturInformation />
      <ContactInformation contact={contactShiming} />
    </div>
  );
}
