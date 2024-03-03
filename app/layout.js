import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Script from "next/script";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  alternates: {
    canonical: `https://empirecanalhomes.ca`,
  },
  keywords:
    "Empire Canals, Empire Communities, Empire, Pre-Construction, Towns, Townhouses, Townhomes, Detached, Detached Homes, Welland Canals, Welland Canals Homes, Empire Canals in Welland, Master-Planned Community, Coming Soon, Towns and Detached, Townhomes and Detached Homes, Coming to Dain City, Towns and Detached Coming Soon, Towns Coming Soon, Townhomes Coming Soon, Townhouses Coming Soon, Detached Coming Soon, Detached Homes Coming Soon, Detached Houses Coming Soon, Coming Soon to Welland, Coming to Welland, Coming Soon to Dain City, Towns for Sale, Detached Homes for Sale, Townhomes for Sale, Homes for Sale, Welland Towns, Welland Homes, Welland Real Estate, Ontario Towns, Ontario Homes, GTA Homes, GTA Towns, Register Here, Register Now",
  title: "Empire Canals - NOW SELLING NEW PHASE FROM $589,990",
  description:
    "New Towns & Detached In Welland From $589,990. Family-friendly streetscapes, on-site schools, community amenities and scenic trails, creeks and parks",
  icons: {
    icon: "/favicon.ico",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  openGraph: {
    images: "/rendering1.jpeg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
    },
  },
  category: "real estate",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>

      <Script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"></Script>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js"></Script>
    </html>
  );
}
