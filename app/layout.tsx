import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import "./globals.css";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
	title: "HarmonyHR",
	description:
		"HarmonyHR - Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, corrupti.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={cn("h-screen", inter.className)}>{children}</body>
		</html>
	);
}
