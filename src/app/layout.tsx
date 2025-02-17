import { Roboto } from "next/font/google";
import { NavBar } from "@/components";
import "./globals.css";

interface RootLayoutProps {
  children: React.ReactNode;
}

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});
export const metadata = {
  title: "Sumeya's Portfolio",
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${roboto.variable}`}>
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
