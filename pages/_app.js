import "bootstrap/dist/css/bootstrap.css";
import "@/styles/globals.css";
import { useEffect } from "react";
import Link from "next/link";


export default function App({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <a className="navbar-brand link-light" href="#">
            <img src="your-logo.png" alt="Logo" width="50" height="50" />
            Brand Name
          </a>
          <button
            className="navbar-toggler navbar-light bg-light rounded"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav text-center">
              <li className="nav-item">
                <Link className="nav-link link-light" href="#">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link link-light" href="/test">
                  Test
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link link-light" href="/gallery">
                  Gallery
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link link-light" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Component {...pageProps} />
    </>
  );
}
