import News from "../templates/News";

export default function ShopNews() {
  return (
    <News>
      <h3 className="text-center font-bold">Sommar-REA</h3>
      <p className="p-2">
        Köp <span className="font-bold">4</span> för{" "}
        <span className="font-bold">3</span> på allt i hela butiken
      </p>
    </News>
  );
}
