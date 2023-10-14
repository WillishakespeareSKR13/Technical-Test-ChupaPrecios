import AtomButton from "@/components/atoms/AtomButton";
import LayoutHome from "@/components/layouts/Home";
import { Metadata } from "next";

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

const Home = () => (
  <LayoutHome>
    <AtomButton>This is a button</AtomButton>
  </LayoutHome>
);

export default Home;
