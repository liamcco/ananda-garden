import { Ball } from "@/components";
import massage from "@/mockdata/images/massage.webp";

export default function ClinicOverview() {
  return (
    <div className="container">
      <div className="flex flex-wrap mb-8 justify-around">
        <a href="/klinik/akupunktur">
          <Ball name="Akupunktur" />
        </a>

        <a href="/klinik/akupunktur">
          <Ball name="Skönhets&shy;akupunktur" />
        </a>

        <a href="/klinik/massage">
          <Ball name="Massage" image={massage.src} />
        </a>

        <a href="/klinik/terapi">
          <Ball name="Terapi" />
        </a>
      </div>
      <div className="flex justify-center">
        <a
          href="/klinik/prices"
          className="py-2 px-8 bg-primary-400 rounded-lg center"
        >
          Priser & Bokning
        </a>
      </div>
    </div>
  );
}
