import {
  Workshops,
  ShopNews,
  PageHeader,
  ShopItemsCatalogue,
  OpeningHours,
} from "@/containers";
import { openingHours } from "@/mockdata/openingHours";

export default function Butik() {
  return (
    <div className="flex flex-col gap-8">
      <PageHeader title="Butik" />
      <OpeningHours hours={openingHours} />
      <ShopNews />
      <ShopItemsCatalogue />
      <Workshops />
    </div>
  );
}
