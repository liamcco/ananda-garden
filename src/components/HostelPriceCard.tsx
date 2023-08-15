import { Ball, Card } from ".";

interface Props {
  name: string;
  image: string;
  price: number;
  link: string;
}

export default function ClinicPriceCard(props: Props) {
  return (
    <Card>
      <div className="flex flex-col m-2">
        <div className="flex items-center">
          <Ball image={props.image} />
          <div className="m-2">
            <h2 className="text-2xl font-bold">{props.name}</h2>
            <p className="italic">{props.price} kr/natt</p>
          </div>
        </div>
        {props.link && (
          <a href={props.link} className="self-end flex items-center">
            Läs mer
          </a>
        )}
      </div>
    </Card>
  );
}
