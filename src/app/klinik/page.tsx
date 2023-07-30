import { BookNow, NewsPreview } from "@/containers";
import ContactInformation from "@/containers/ContactInformation";
import PageHeader from "@/containers/PageHeader";
import { contactShiming } from "@/mockdata/contacts";

function Klinik() {
  return (
    <div className="flex flex-col gap-8">
      <PageHeader title="Klinik" />
      <BookNow />
      <NewsPreview />
      <ContactInformation contact={contactShiming} />
    </div>
  );
}

export default Klinik;
