import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import FireFliesBackground from "@/components/FireFliesBackground";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "KenjaminButton Portfolio",
  description: "CyberPunk 2025 San Francisco Software Engineer KenjaminButton",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body 
        className={clsx(
          inter.variable, 
          "bg-background text-foreground font-inter"
        )}
      >
        {children}
        <FireFliesBackground />
      </body>
    </html>
  );
}

