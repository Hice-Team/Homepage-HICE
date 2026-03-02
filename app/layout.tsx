import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { GlobalProvider } from "@/components/providers/GlobalProvider";
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
    <html lang="kr" suppressHydrationWarning>
      <body className={`${Pretendard.className}`}>
        <GlobalProvider>
          {children}
        </GlobalProvider>
      </body>
    </html>
  );
}
