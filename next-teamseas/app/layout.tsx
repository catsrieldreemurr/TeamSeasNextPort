import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserratFont = Montserrat({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "#GoTeamSeas NEXT",
  description: "Official #TeamSeas Project Ported to Next.JS. Written in Norwegian for a school project, Not affiliated with actual #TeamSeas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={montserratFont.className}
      >
        {children}
      </body>
    </html>
  );
}
