import { ServicePreview } from "@/components";

import {
  butikData,
  klinikData,
  vandrarhemData,
} from "@/mockdata/servicesPreviewData";

//import prev1 from "@/assets/prev1.JPG";
//import prev2 from "@/assets/prev2.JPG";
//import prev3 from "@/assets/prev3.JPG";

function ServicesPreview() {
  return (
    <div className="section services-container">
      <ServicePreview data={butikData} img={""} />
      <ServicePreview data={klinikData} img={""} />
      <ServicePreview data={vandrarhemData} img={""} />
    </div>
  );
}

export default ServicesPreview;
