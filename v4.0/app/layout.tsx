import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "../lib/provider";
import { fonts } from "../lib/fonts";
import { ColorModeScript } from "@chakra-ui/react";
import theme from "../lib/theme";
import { useEffect } from "react";
export const metadata: Metadata = {
  title: "MyPortfolio",
  description: "Ayoub's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={metadata.description?.toString()} />
        <title>{metadata.title?.toString()}</title>
      </head>
      <body className={fonts.rubik.variable}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
