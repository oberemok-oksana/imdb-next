import "./globals.css";
import { Chakra_Petch } from "next/font/google";
import Header from "./components/header/Header";

const chakra = Chakra_Petch({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Omdb",
  description: "Developed by Oksana Oberemok",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={chakra.className}>
        <div className="bg">
          <Header />
          <div className="container"> {children}</div>
        </div>
      </body>
    </html>
  );
}
