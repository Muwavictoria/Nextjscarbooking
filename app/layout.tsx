import "./globals.css";
import { inter } from "./fonts";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Car Booking",
  description: "Book your car now",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
