import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "../utils/provider";
import { fonts } from "../utils/fonts";
import { ColorModeScript } from "@chakra-ui/react";
import theme from "../utils/theme";
export const metadata: Metadata = {
  title: "Ayoub - Portfolio",
  description: "Ayoub's portfolio showcasing his projects and skills.",
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
        <link rel="shortcut icon" href="/icon.ico" />
      </head>
      <body className={fonts.rubik.variable}>
        <Providers>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          {children}
        </Providers>
      </body>
    </html>
  );
}
