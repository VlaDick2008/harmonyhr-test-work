import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Bell, CircleHelp, Settings } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type React from "react";
import { SearchInput } from "./search-input";

interface Props {
	className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
	return (
		<header
			className={cn(
				"flex items-center justify-between py-3.5 px-10",
				className,
			)}
		>
			<Link href="/" className="text-xl font-medium">
				HarmonyHR
			</Link>
			<nav className="self-end [&>*]:p-4 [&>*]:rounded-t-md">
				<Link href="/">Home</Link>
				<Link className="bg-slate-300" href="/my-info/time-off">
					My Info
				</Link>
				<Link href="/people">People</Link>
				<Link href="/hiring">Hiring</Link>
				<Link href="/reports">Reports</Link>
				<Link href="/files">Files</Link>
			</nav>

			<SearchInput />
			<div className="flex items-center gap-2">
				<Button variant="ghost" size="icon">
					<Settings />
				</Button>
				<Button variant="ghost" size="icon">
					<CircleHelp />
				</Button>
				<Button variant="ghost" size="icon">
					<Bell />
				</Button>
				<Button variant="ghost" size="icon">
					<Image
						src={
							"https://i.pinimg.com/736x/94/c3/67/94c36724d7cf4dc3abf21eebd6b92ba6.jpg"
						}
						width={38}
						height={38}
						alt="avatar"
						className="rounded-full object-cover"
					/>
				</Button>
			</div>
		</header>
	);
};
