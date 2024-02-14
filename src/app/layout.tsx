import type { Metadata } from "next";
import { ClerkProvider } from '@clerk/nextjs'
import {dark} from '@clerk/themes'
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";

const font = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Web Weaver Website Builder",
	description: "Turn your ideas into  Web & Agency Solution",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (

		<html lang="en" suppressHydrationWarning>
			<body className={font.className}>
      <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
					</body>
		</html>
	);
}
