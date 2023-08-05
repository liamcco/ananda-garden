import { PageHeader, ContactInformation } from "@/containers";
import { contactShiming } from "@/mockdata/contacts";

function Terapi() {
  return (
    <div className="flex flex-col gap-8">
      <PageHeader title="Terapi" />
      <hr />
      <ContactInformation contact={contactShiming} />
    </div>
  );
}

export default Terapi;
