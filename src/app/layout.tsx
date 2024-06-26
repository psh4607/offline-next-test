import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React, {ReactNode} from "react";
import ServiceWorkerRegister from "@/lib/service-worker/ServiceWorkerRegister";
// import {FetchRegister} from "@/app/fetch.config";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const APP_NAME = "pwa-offline-test";

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
    <head>
      <meta charSet='UTF-8'/>
      <title>{APP_NAME}</title>
      <meta name='application-name' content='&nbsp;'/>
      <meta name='msapplication-TileColor' content='#FFFFFF'/>
      <meta name='msapplication-square70x70logo' content='/icons/mstile-70x70.png'/>
      <meta name='msapplication-TileImage' content='/icons/mstile-144x144.png'/>
      <meta name='msapplication-square150x150logo' content='/icons/mstile-150x150.png'/>
      <meta name='msapplication-wide310x150logo' content='/icons/mstile-310x150.png'/>
      <meta name='msapplication-square310x310logo' content='./icons/mstile-310x310.png'/>
      <meta name='robots' content='noindex'/>
      <meta name='Googlebot' content='noindex'/>
      <meta name='theme-color' content='#fff'/>
      <link rel='icon' href='/icons/favicon-32x32.png' sizes={'any'}/>
    </head>
    <body className={inter.className}>
      <ServiceWorkerRegister>
        {children}
      </ServiceWorkerRegister>
    </body>
    </html>
  );
}
