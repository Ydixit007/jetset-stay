import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "JetSetStay - Your Ultimate Destination for Hassle-Free Travel Booking.",
  description:
    "JetSetStay is your one-stop destination for all your travel booking needs. Whether you're planning a quick getaway or an extended vacation, JetSetStay offers a seamless and hassle-free experience to find and book accommodations that suit your preferences and budget. With an extensive range of options worldwide, from luxurious resorts to cozy homestays, JetSetStay ensures that every journey is filled with comfort and convenience. Say goodbye to the stress of travel planning and embrace the adventure with JetSetStay by your side. Start exploring today and unlock a world of possibilities for your next unforgettable journey!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
