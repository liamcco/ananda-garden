import News from "../templates/News";

export default function HostelNews() {
  return (
    <News>
      <h3 className="text-center font-bold">Erbjudande</h3>
      <p className="p-2">
        Våra gäster får <span className="font-bold">5% rabatt</span> på alla
        behandlingar i kliniken! Passa på att kombinera en vistelse hos oss med
        en massage eller akupunktur.
      </p>
    </News>
  );
}
