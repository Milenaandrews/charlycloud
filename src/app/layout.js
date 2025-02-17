import { Poppins } from "next/font/google";
import "./globals.css";
import Provider from "./Provider";
import AppBar from "../components/AppBar";
import ContactoProvider from "@/context/Contacto/ContactoProvider";
import { ToastContainer } from "react-toastify";
import Script from "next/script";
const inter = Poppins({ weight: "500", subsets: ["latin"] });

export const metadata = {
  title: "Charly Cloud®",
  description: "Software para Farmacias",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script id="google-analytics" strategy="'afterInteractive'">
          {/* {(function (w, d, s, l, i) {
            w[l] = w[l] || [];
            w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
            var f = d.getElementsByTagName(s)[0],
              j = d.createElement(s),
              dl = l != "dataLayer" ? "&l=" + l : "";
            j.async = true;
            j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
            f.parentNode.insertBefore(j, f);
          })(window, document, "script", "dataLayer", "GTM-MHWKPB23")} */}
        </Script>
      </head>
      <body className={inter.className}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MHWKPB23"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <Provider>
          <ContactoProvider>
            <AppBar />

            {children}
            <ToastContainer />
          </ContactoProvider>
        </Provider>
      </body>
    </html>
  );
}
