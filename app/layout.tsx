import "./globals.css";
import { inter } from "./fonts";
import { Metadata } from "next";
import ReduxProvider from './lib/ReduxProvider';
import ThemeProvider from './lib/ThemeProvider';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';

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
        <ReduxProvider>
          <AppRouterCacheProvider>
            <ThemeProvider>
              {children}
            </ThemeProvider>
          </AppRouterCacheProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
