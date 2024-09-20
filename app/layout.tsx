import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import "./globals.css";
import clsx from "clsx";

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
			<body className={clsx("h-screen", inter.className)}>{children}</body>
		</html>
	);
}
