import Card from "../components/Card";

export default function NewsPreview() {
  return (
    <div className="max-w-7xl m-auto px-4 my-4 w-full">
      <h2 className="text-xl font-bold mb-2">Nyheter och erbjudanden</h2>
      <Card>
        <h3 className="text-xl font-bold text-center">Öppetider:</h3>
        <ul className="p-2">
          <li>
            <p>Måndag: 10:00 - 18:00</p>
          </li>
          <li>
            <p>Tisdag: 10:00 - 18:00</p>
          </li>
          <li>
            <p>Onsdag: 10:00 - 18:00</p>
          </li>
          <li>
            <p>Torsdag: 10:00 - 18:00</p>
          </li>
        </ul>
      </Card>
    </div>
  );
}
