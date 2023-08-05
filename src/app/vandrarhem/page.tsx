import { BookNow, NewsPreview, Article, HostelOverview } from "@/containers";
import PageHeader from "@/containers/PageHeader";
import { hostelInfo } from "@/mockdata/info";

function Vandrarhem() {
  return (
    <div className="flex flex-col gap-8">
      <PageHeader title="Vandrarhem" />
      <HostelOverview />
      <Article content={hostelInfo} />
    </div>
  );
}

export default Vandrarhem;
