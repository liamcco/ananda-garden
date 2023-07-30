import { Workshops, NewsPreview } from "@/containers";
import ShopItemCatalogue from "@/containers/ShopItemsCatalogue";
import PlaceholderImage from "@/mockdata/PlaceholderImage";

export default function Butik() {
  return (
    <div className="flex flex-col gap-4">
      <div className="max-w-7xl m-auto px-4 my-4 w-full">
        <PlaceholderImage />
        <h1 className="text-4xl font-bold text-center">Butik</h1>
      </div>
      <NewsPreview />
      <Workshops />
      <ShopItemCatalogue />
    </div>
  );
}
