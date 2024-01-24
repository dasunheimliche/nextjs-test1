import Sidebar from "@/components/Sidebar";

import ReactQueryClientProvider from "@/providers/reactQueryClientProvider";

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NextJS Test",
  description: "Test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ReactQueryClientProvider>
        <body className="flex bg-slate-950">
          <Sidebar />
          {children}
        </body>
      </ReactQueryClientProvider>
    </html>
  );
}
