import type { Metadata } from "next";
import { Oswald, Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Burhani Associates | Industrial Components Hyderabad",
  description: "Authorized Dealer for Clamptek, Swiftin, and industrial machinery parts in Hyderabad. Toggle Clamps, Handwheels, Vibration Mounts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${oswald.variable} ${roboto.variable} antialiased font-sans`}
      >
        <Header />
        <main className="min-h-screen bg-slate-50">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
