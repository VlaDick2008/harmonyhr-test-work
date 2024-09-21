"use client";

import { cn } from "@/lib/utils";
import { useUserStore } from "@/store/user";
import { ChevronDown, EllipsisVertical, Settings } from "lucide-react";
import type React from "react";
import { Button } from "../ui/button";
import { Skeleton } from "../ui/skeleton";

interface Props {
	className?: string;
}

export const MyInfoHeader: React.FC<Props> = ({ className }) => {
	const { name } = useUserStore();

	return (
		<div
			className={cn(
				"flex justify-between items-center xl:ml-0 ml-44",
				className,
			)}
		>
			{name ? (
				<h1 className="text-3xl font-bold">{name}</h1>
			) : (
				<Skeleton className="w-[200px] h-[36px]" />
			)}
			<div className="items-center gap-5 xl:mr-0 mr-9 md:flex hidden">
				<Button variant="outline" size="sm" className="flex items-center gap-1">
					Request a change
					<ChevronDown />
				</Button>
				<Button variant="outline" size="sm" className="flex items-center gap-1">
					<Settings />
					<ChevronDown />
				</Button>
			</div>
			<Button className="mr-9 md:hidden flex" size="icon" variant="ghost">
				<EllipsisVertical />
			</Button>
		</div>
	);
};
