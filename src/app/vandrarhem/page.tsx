import {
  HostelOverview,
  HostelSummary,
  HostelInformation,
  HostelNews,
  PageHeader,
} from "@/containers";
import { kitchen } from "@/mockdata/images";

export default function Page() {
  return (
    <div className="flex flex-col gap-8">
      <PageHeader title="Vandrarhem" image={kitchen.src} />
      <HostelSummary />
      <HostelOverview />
      <HostelNews />
      <HostelInformation />
    </div>
  );
}
