import { BookNow, NewsPreview, Article } from "@/containers";
import PageHeader from "@/containers/PageHeader";
import { hostelInfo } from "@/mockdata/info";

function Vandrarhem() {
  return (
    <div className="flex flex-col gap-8">
      <PageHeader title="Vandrarhem" />
      <BookNow />
      <Article content={hostelInfo} />
      <NewsPreview />
    </div>
  );
}

export default Vandrarhem;
