import { helpIcon, notificationsIcon, settingsIcon } from "@/assets/images";
import { Button } from "@/components/ui/button";
import clsx from "clsx";
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
			className={clsx("flex items-center justify-between p-3.5", className)}
		>
			<h1 className="text-xl font-medium">HarmonyHR</h1>
			<nav className="self-end [&>*]:p-4 [&>*]:rounded-t-md">
				<Link href="/">Home</Link>
				<Link className="bg-slate-300" href="/my-info">
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
					<Image
						src={settingsIcon}
						width={24}
						height={24}
						alt="settings-icon"
					/>
				</Button>
				<Button variant="ghost" size="icon">
					<Image src={helpIcon} alt="settings-icon" />
				</Button>
				<Button variant="ghost" size="icon">
					<Image src={notificationsIcon} alt="settings-icon" />
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
