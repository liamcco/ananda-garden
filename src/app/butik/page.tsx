import { Workshops, NewsPreview } from "@/containers";
import PageHeader from "@/containers/PageHeader";
import ShopItemCatalogue from "@/containers/ShopItemsCatalogue";

export default function Butik() {
  return (
    <div className="flex flex-col gap-8">
      <PageHeader title="Butik" />
      <NewsPreview />
      <Workshops />
      <ShopItemCatalogue />
    </div>
  );
}
