import type { ReactNode } from "react";
import "../css/vars.css";
import "../css/globals.css";
import "../css/animations.css";
import "../css/icons.css";

import type { Metadata } from "next";
import Theme from "@/theme";
import { inter } from "@/fonts/google";

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
      <script async src="https://kit.fontawesome.com/f2d307713b.js"></script>
      <body className={inter?.className}>
        {children}
        <Theme.setup />
      </body>
    </html>
  );
};

export default RootLayout;
