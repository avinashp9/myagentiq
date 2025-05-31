import type { Metadata, Viewport } from "next";
import Head from "next/head";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

export const metadata: Metadata = {
  title: "MyAgentIQ",
  description: "MyAgentIQ is MVC",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="black">
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
      </Head>
      <body
        className={`${GeistSans.className} ${GeistMono.className} overflow-x-hidden`}
      >
        <div className="w-full max-w-screen overflow-x-hidden overflow-y-auto">
          {children}
        </div>
      </body>
    </html>
  );
}
