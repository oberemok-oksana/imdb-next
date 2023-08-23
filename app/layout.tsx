import "./globals.css";
import { Chakra_Petch } from "next/font/google";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      <body className={`${chakra.className} bg-slate-900 pb-14`}>
        <ToastContainer />
        <Header />
        <div className="w-[380px] mx-auto my-4 sm:w-[590px] md:w-[650px] lg:w-[960px]">
          {" "}
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
