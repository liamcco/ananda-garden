import {
  BookNow,
  Hero,
  NewsPreview,
  NewsletterBanner,
  Services,
} from "@/containers";

const Home = () => (
  <div className="flex flex-col gap-4">
    <Hero />
    <BookNow />
    <NewsletterBanner />
    <NewsPreview />
    <Services />
  </div>
);

export default Home;
