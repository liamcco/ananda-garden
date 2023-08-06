import { PageHeader, ContactInformation } from "@/containers";
import { contactOve } from "@/mockdata/contacts";

export default function Page() {
  return (
    <div className="flex flex-col gap-8">
      <PageHeader title="Prices" />
      <hr />
      <ContactInformation contact={contactOve} />
    </div>
  );
}
