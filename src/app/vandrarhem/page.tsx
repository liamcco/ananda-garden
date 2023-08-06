import {
  HostelOverview,
  HostelSummary,
  HostelInformation,
  HostelNews,
} from "@/containers";
import PageHeader from "@/containers/shared/PageHeader";

function Vandrarhem() {
  return (
    <div className="flex flex-col gap-8">
      <PageHeader title="Vandrarhem" />
      <HostelSummary />
      <HostelOverview />
      <HostelNews />
      <HostelInformation />
    </div>
  );
}

export default Vandrarhem;
