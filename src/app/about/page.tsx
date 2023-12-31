import { Ball } from "@/components";
import { oveInfo, shimingInfo } from "@/mockdata/info";
import { ove, shiming } from "@/mockdata/images";

export default function About() {
  return (
    <div className="container">
      <h1 className="text-4xl font-bold text-center">Om oss</h1>
      <div className="space-y-8">
        <div className="my-8">
          <div className="float-right p-4">
            <Ball name="Ove" image={ove.src} />
          </div>

          <p className="px-4">{oveInfo}</p>
        </div>

        <hr />

        <div className="my-8">
          <div className="float-right p-4">
            <Ball name="Shiming" image={shiming.src} />
          </div>
          <p className="px-4">{shimingInfo}</p>
        </div>
      </div>
    </div>
  );
}
