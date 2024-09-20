import { settingsIcon } from "@/assets/images";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";
import Image from "next/image";

import Link from "next/link";

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
			<div className="w-full h-full bg-slate-300 pl-[25%] pr-24 pt-20">
				<div className="flex justify-between items-center">
					<h1 className="text-3xl font-medium">Alexandra Kuibyshevskaya</h1>
					<div className="flex items-center gap-5">
						<Button variant="outline" size="sm">
							Request a change
						</Button>
						<Button variant="outline" size="icon">
							<Image src={settingsIcon} alt="settingsIcon" />
						</Button>
					</div>
				</div>
				<nav className="mt-10 p-4 first-of-type:pl-0 [&>*]:p-4 [&>*]:rounded-t-md">
					<Link href="/">Home</Link>
					<Link className="bg-white" href="/my-info">
						My Info
					</Link>
					<Link href="/people">People</Link>
					<Link href="/hiring">Hiring</Link>
					<Link href="/reports">Reports</Link>
					<Link href="/files">Files</Link>
				</nav>
			</div>
			<div className="w-full bg-slate-100 pl-[25%]">abas</div>
		</section>
	);
}
