import { BookNow, NewsPreview } from "@/containers";
import PageHeader from "@/containers/PageHeader";

function Vandrarhem() {
  return (
    <div className="flex flex-col gap-8">
      <PageHeader title="Vandrarhem" />
      <BookNow />
      <NewsPreview />
    </div>
  );
}

export default Vandrarhem;
