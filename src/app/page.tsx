import {
  BookNow,
  Hero,
  NewsletterBanner,
  Services,
  ShopNews,
} from "@/containers";

const Home = () => (
  <div className="flex flex-col gap-8">
    <Hero />
    <BookNow />
    <NewsletterBanner />
    <ShopNews />
    <Services />
  </div>
);

export default Home;
