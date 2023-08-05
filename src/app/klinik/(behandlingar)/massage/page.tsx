import { PageHeader, ContactInformation } from "@/containers";
import { contactShiming } from "@/mockdata/contacts";

function Massage() {
  return (
    <div className="flex flex-col gap-8">
      <PageHeader title="Massage" />
      <hr />
      <ContactInformation contact={contactShiming} />
    </div>
  );
}

export default Massage;
