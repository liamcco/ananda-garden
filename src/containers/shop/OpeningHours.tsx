import { Card } from "@/components";
import type { OpeningHours } from "@/mockdata/openingHours";

interface Props {
  hours: OpeningHours;
}

export default function OpeningHours(props: Props) {
  return (
    <div className="container">
      <Card>
        <div className="flex flex-col gap-1 px-8 py-2">
          <h3 className="text-center font-bold">Öppetider</h3>
          {Object.entries(props.hours).map(([day, hours]) => (
            <div className="flex flex-row justify-between" key={day}>
              <span>{day}</span>
              <span>{hours}</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
