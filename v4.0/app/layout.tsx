import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./lib/provider";
import { fonts } from "./lib/fonts";
import { ColorModeScript, useColorModeValue } from "@chakra-ui/react";
import theme from "./lib/theme";
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
      <body className={fonts.rubik.variable}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
