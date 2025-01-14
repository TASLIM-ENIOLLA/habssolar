import { Metadata, RootLayoutProps } from "./types";

import "@/css/globals.css";

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      {children}
    </html>
  );
}

export const metadata: Metadata = {
  title: "Don Bee Store",
  description: "An ecommerce web store",
};