import type { Metadata } from "next";
import { ClerkProvider } from '@clerk/nextjs'
import {dark} from '@clerk/themes'
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Web Weaver Website Builder",
	description: "Turn your ideas into  web",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ClerkProvider appearance={{baseTheme:dark}}>

		<html lang="en" suppressHydrationWarning>
			<body className={inter.className}>
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
		</ClerkProvider>
	);
}
