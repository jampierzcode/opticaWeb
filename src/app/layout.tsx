import { Navbar } from "../components/Navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Optica Filmora",
  description: "Bienvenidos a la mejor optica de la Ciduad de MXN",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
