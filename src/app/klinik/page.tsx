import { NewsPreview } from "@/containers";
import PlaceholderImage from "@/mockdata/PlaceholderImage";

function Klinik() {
  return (
    <div className="flex flex-col gap-4">
      <div className="max-w-7xl m-auto px-4 my-4 w-full">
        <PlaceholderImage />
        <h1 className="text-4xl font-bold text-center">Klinik</h1>
      </div>
      <NewsPreview />
    </div>
  );
}

export default Klinik;
