import { PageHeader, ContactInformation } from "@/containers";
import { contactShiming } from "@/mockdata/contacts";

function Akupunktur() {
  return (
    <div className="flex flex-col gap-8">
      <PageHeader title="Akupunktur" />
      <hr />
      <ContactInformation contact={contactShiming} />
    </div>
  );
}

export default Akupunktur;
