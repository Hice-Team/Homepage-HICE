import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const Pretendard = localFont({
  src: "../app/font/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
})

export const metadata: Metadata = {
  title: "HICE Corpation",
  description: "HICE Corpation Official Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr">
      <body className={`${Pretendard.className}`}>
        {children}
      </body>
    </html>
  );
}
