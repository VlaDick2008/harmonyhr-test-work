"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useUserStore } from "@/store/user";
import { Bell, CircleHelp, Settings } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type React from "react";
import { Skeleton } from "../ui/skeleton";
import { SearchInput } from "./search-input";

interface Props {
	className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
	const { avatar } = useUserStore();

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
					{avatar ? (
						<Image
							src={avatar}
							width={38}
							height={38}
							alt="avatar"
							className="rounded-full object-cover"
						/>
					) : (
						<Skeleton className="w-[38px] h-[38px] rounded-full" />
					)}
				</Button>
			</div>
		</header>
	);
};
