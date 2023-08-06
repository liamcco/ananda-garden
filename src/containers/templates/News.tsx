import { Card } from "@/components";

interface Props {
  children: React.ReactNode;
}

export default function News(props: Props) {
  return (
    <div className="container">
      <h2 className="text-xl font-bold mb-2">Nyheter och erbjudanden</h2>
      <Card>{props.children}</Card>
    </div>
  );
}
