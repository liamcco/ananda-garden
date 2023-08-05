import { PageHeader, ContactInformation } from "@/containers";
import { contactShiming } from "@/mockdata/contacts";

function Prices() {
  return (
    <div className="flex flex-col gap-8">
      <PageHeader title="Prices" />
      <hr />
      <ContactInformation contact={contactShiming} />
    </div>
  );
}

export default Prices;
