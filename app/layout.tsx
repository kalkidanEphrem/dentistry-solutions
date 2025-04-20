import "./globals.css";
import { Inter, Poppins, Staatliches } from "next/font/google";
import type { Metadata } from "next";
import Footer from "./_components/(Footer)/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "500", "600"],
  variable: "--font-poppins",
  display: "swap",
});
const staatliches = Staatliches({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-staatliches",
  display: "swap",
});

export const metadata: Metadata = { title: "Dr. Kalkidan Dentistry", description: "Dr. Kalkidan Ephrem Dentistry, a dental solution with top quality services" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} ${staatliches.variable}`}
    >
      <head>
        <link
          type="image/png"
          sizes="16x16"
          rel="icon"
          href="/icons8-dental-filling-16.png"
        />
      </head>
      <body className="font-poppins">{children}
        <Footer />
      </body>
    </html>
  );
}




