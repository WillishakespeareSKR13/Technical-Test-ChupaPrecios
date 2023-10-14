import type { ReactNode } from "react";
import "../css/vars.css";
import "../css/globals.css";
import "../css/animations.css";
import "../css/icons.css";

import type { Metadata } from "next";
import Theme from "@/theme";
import { inter } from "@/fonts/google";

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

export const metadata: Metadata = {
  title: "ChupaPrecios",
  description:
    "Entrega en Toda la República Mexicana; Paga en Pesos Mexicanos; Más de 300 Millones de Productos. Toggle Nav Chupaprecios. Seleccionar Tienda. HOME DEPOT.",
  applicationName: "ChupaPrecios",
  referrer: "no-referrer-when-downgrade",
  keywords: ["ChupaPrecios", "Chupa", "Precios", "ChupaPrecios.com"],
  authors: [{ name: "ChupaPrecios" }, { name: "willskr.com" }],
  colorScheme: "light dark",
  creator: "WillSkr",
  publisher: "WillSkr",
  formatDetection: {
    email: true,
    telephone: true,
    address: true,
  },
  openGraph: {
    images: "/api/og",
  },
};
