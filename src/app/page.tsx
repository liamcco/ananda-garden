import {
  BookNow,
  Header,
  NewsPreview,
  NewsletterBanner,
  Services,
} from "@/containers";

const Home = () => (
  <div className="flex flex-col gap-4">
    <Header />
    <BookNow />
    <NewsletterBanner />
    <NewsPreview />
    <Services />
  </div>
);

export default Home;
