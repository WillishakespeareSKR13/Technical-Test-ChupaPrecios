import type { ReactNode } from "react";
import "../css/vars.css";
import "../css/globals.css";
import "../css/animations.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Theme from "@/theme";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"], variable: "--font-primary" });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

type Props = {
  children: ReactNode;
};

const RootLayout = (props: Props) => {
  const { children } = props;

  return (
    <html suppressHydrationWarning lang="en">
      <Script
        src="https://kit.fontawesome.com/f2d307713b.js"
        crossOrigin="anonymous"
        strategy="beforeInteractive"
      />
      <body className={inter.className}>
        {children}
        <Theme.setup />
      </body>
    </html>
  );
};

export default RootLayout;
