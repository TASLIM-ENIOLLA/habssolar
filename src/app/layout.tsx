import { Metadata, RootLayoutProps } from "./types";

import "@/css/globals.css";

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "Habs Solar",
  description: "An ecommerce web store",
};