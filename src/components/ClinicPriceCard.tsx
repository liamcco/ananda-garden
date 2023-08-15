import { PageHeader } from "@/containers";
import { Card } from ".";

interface Props {
  name: string;
  image?: string;
  prices: { title: string; price: number }[];
  link?: string;
}

export default function ClinicPriceCard(props: Props) {
  return (
    <Card>
      <div className="flex flex-col m-2">
        {props.image ? (
          <PageHeader title={props.name} image={props.image} size="small" />
        ) : (
          <h3 className="font-bold text-xl mb-2">{props.name}</h3>
        )}

        <div className="flex flex-col gap-2">
          {props.prices.map((price) => (
            <div className="flex justify-between" key={price.title}>
              <p>{price.title}</p>
              <p>{price.price} kr</p>
            </div>
          ))}
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
