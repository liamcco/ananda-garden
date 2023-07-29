import { Navbar, Footer } from "@/containers";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hanuman Ananda Garden",
  description: "Butik, Klinik, Vandrarhem",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-primary-400">
        <div className="bg-primary-50 flex flex-col min-h-screen">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
