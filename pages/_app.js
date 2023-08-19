import "bootstrap/dist/css/bootstrap.css";
import "@/styles/globals.css";
import { useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/navbar/navbar";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return (
    <>
      <Navbar></Navbar>
      <Component {...pageProps} />
    </>
  );
}
