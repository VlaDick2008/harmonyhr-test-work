import { MyInfoBlock } from "@/components/shared/my-info-block";
import { MyInfoHeader } from "@/components/shared/my-info-header";
import { ChevronDown } from "lucide-react";
import type { Metadata } from "next";
import { cookies } from "next/headers";
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
	const cookieStore = cookies();
	const session = cookieStore.get("session")?.value;

	return (
		<section className="relative h-full">
			<div className="w-full bg-slate-300 pl-[25%] pr-24 pt-20">
				<MyInfoHeader />
				<nav className="mt-6 pt-4 [&>*]:h-full [&>*]:flex-1 text-center [&>*]:p-4 [&>*]:rounded-t-md flex justify-between">
					<Link href="/">Personal</Link>
					<Link href="/my-info">Job</Link>
					<Link href="/people" className="bg-white">
						Time Off
					</Link>
					<Link href="/hiring">Emergency</Link>
					<Link href="/reports">Documents</Link>
					<Link href="/files">Notes</Link>
					<Link href="/files">Benefits</Link>
					<Link href="/files">Training</Link>
					<Link href="/files">Assets</Link>
					<Link href="/files" className="flex gap-2">
						More <ChevronDown />
					</Link>
				</nav>
			</div>
			<div className="w-full bg-slate-100 pl-[25%] pb-20">{children}</div>
			<MyInfoBlock session={session as string} />
		</section>
	);
}
