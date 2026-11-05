import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: "Eliza's Personal Portfolio",
  description: "Eliza Faith Pantalla's personal portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen w-full">
        <Navbar />
        <div className="w-full">
          {children}
        </div>
      </body>
    </html>
  );
}
