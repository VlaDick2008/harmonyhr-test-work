import { searchIcon } from "@/assets/images";
import clsx from "clsx";
import Image from "next/image";
import type React from "react";
import { Input } from "../ui/input";

interface Props {
	className?: string;
}

export const SearchInput: React.FC<Props> = ({ className }) => {
	return (
		<div className={clsx("relative", className)}>
			<Image
				className="absolute left-3 top-1/2 transform -translate-y-1/2   z-10"
				src={searchIcon}
				alt="search-icon"
			/>
			<Input className="w-[400px] pl-10" placeholder="Search" />
		</div>
	);
};
