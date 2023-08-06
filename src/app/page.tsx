import {
  BookNow,
  Hero,
  NewsletterBanner,
  Services,
  ShopNews,
} from "@/containers";

export default function Page() {
  <div className="flex flex-col gap-8">
    <Hero />
    <BookNow />
    <NewsletterBanner />
    <ShopNews />
    <Services />
  </div>;
}
