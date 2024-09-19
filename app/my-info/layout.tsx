import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "My Info",
	description: "My information",
};

export default function MyInfoLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<section>
			<nav>Bebra</nav>
			{children}
		</section>
	);
}
