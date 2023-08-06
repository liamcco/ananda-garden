import { notFound } from "next/navigation";
import { getMockRoomData } from "@/sanity/sanity-utils";
import Image from "next/image";

type Params = {
  room: string;
};

interface Props {
  params: Params;
}

export default async function Page(props: Props) {
  const roomData = await getMockRoomData(props.params.room);
  if (roomData === null) return notFound();

  return (
    <main>
      <h2 className="text-3xl font-bold text-center">{roomData.name}</h2>
      <p>{roomData.description}</p>
    </main>
  );
}
