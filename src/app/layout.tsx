import type { Metadata } from "next";
import localFont from "next/font/local";
import {JetBrains_Mono} from "next/font/google"
import "./globals.css";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["400", "500", "700"],
});

const generalSans = localFont({
  src: [
    { path: "../../public/fonts/GeneralSans/fonts/GeneralSans-BoldItalic.woff", weight: "700", style: "italic" },
    { path: "../../public/fonts/GeneralSans/fonts/GeneralSans-Bold.woff", weight: "700", style: "normal" },
    { path: "../../public/fonts/GeneralSans/fonts/GeneralSans-Italic.woff", weight: "400", style: "italic" },
    { path: "../../public/fonts/GeneralSans/fonts/GeneralSans-Regular.woff", weight: "400", style: "normal" },
    { path: "../../public/fonts/GeneralSans/fonts/GeneralSans-MediumItalic.woff", weight: "500", style: "italic" },
    { path: "../../public/fonts/GeneralSans/fonts/GeneralSans-Medium.woff", weight: "500", style: "normal" },

  ],
  variable: "--font-general-sans",
});
const tabular = localFont({
  src: [
    { path: "../../public/fonts/Tabular/Tabular-BoldItalic.woff", weight: "700", style: "italic" },
    { path: "../../public/fonts/Tabular/Tabular-Bold.woff", weight: "700", style: "normal" },
    { path: "../../public/fonts/Tabular/Tabular-Italic.woff", weight: "400", style: "italic" },
    { path: "../../public/fonts/Tabular/Tabular-Regular.woff", weight: "400", style: "normal" },
    { path: "../../public/fonts/Tabular/Tabular-MediumItalic.woff", weight: "500", style: "italic" },
    { path: "../../public/fonts/Tabular/Tabular-Medium.woff", weight: "500", style: "normal" },

  ],
  variable: "--font-tabular",
});
const zodiak = localFont({
  src: [
    { path: "../../public/fonts/Zodiak/fonts/Zodiak-BoldItalic.woff", weight: "700", style: "italic" },
    { path: "../../public/fonts/Zodiak/fonts/Zodiak-Bold.woff", weight: "700", style: "normal" },
    { path: "../../public/fonts/Zodiak/fonts/Zodiak-Italic.woff", weight: "400", style: "italic" },
    { path: "../../public/fonts/Zodiak/fonts/Zodiak-Regular.woff", weight: "400", style: "normal" },
    { path: "../../public/fonts/Zodiak/fonts/Zodiak-LightItalic.woff", weight: "300", style: "italic" },
    { path: "../../public/fonts/Zodiak/fonts/Zodiak-Light.woff", weight: "300", style: "normal" },
  ],
  variable: "--font-zodiak",
});
export const metadata: Metadata = {
  title: "Uzoukwu Divine — Software Engineer",
  description: "Software engineer building data pipelines, distributed systems, and intelligent infrastructure. Python, FastAPI, PostgreSQL.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${generalSans.variable} ${zodiak.variable} ${jetBrainsMono.variable} antialiased `} >

          {children}

      </body>
    </html>
  );
}
