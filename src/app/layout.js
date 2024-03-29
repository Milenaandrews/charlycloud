import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "./Provider";
import AppBar from "../components/AppBar";
import ContactoProvider from "@/context/Contacto/ContactoProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <ContactoProvider>
            <AppBar/>
            {children}
          </ContactoProvider>
        </Provider>
        </body>
    </html>
  );
}
