import { Articles, Header, ServicesPreview, Subscribe } from "@/containers";

const Home = () => (
  <div>
    <div className="background">
      <Header />
    </div>

    <div className="flex flex-col items-center h-min-screen">
      <Articles />
      <Subscribe />
      <ServicesPreview />
    </div>
  </div>
);

export default Home;
