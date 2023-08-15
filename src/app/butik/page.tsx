import {
  Workshops,
  ShopNews,
  PageHeader,
  ShopItemsCatalogue,
  OpeningHours,
} from "@/containers";
import { openingHours } from "@/mockdata/openingHours";
import { store } from "@/mockdata/images";

export default function Butik() {
  return (
    <div className="flex flex-col gap-8">
      <PageHeader title="Butik" image={store.src} />
      <OpeningHours hours={openingHours} />
      <ShopNews />
      <ShopItemsCatalogue />
      <Workshops />
    </div>
  );
}
