"use client";

import React, { useEffect } from "react";
import { Outfit } from "next/font/google";
import "./globals.css";
import PageFrame from "./components/pageFrame";
import { Providers } from "./providers";
import { useState } from "react";
import LoginPage from "./login/page";

const outfit = Outfit({
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedIn);
  }
    , []);

  return (
    <html lang="en">
      <body className={`${outfit.className} antialiased text-black`}
      >
        <Providers>
          {
            isLoggedIn
              ? <PageFrame children={children} />
              : <LoginPage onLogin={() => setIsLoggedIn(true)} />
          }
        </Providers>
      </body>
    </html>
  );
}
