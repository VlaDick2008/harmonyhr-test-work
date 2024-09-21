import { cn } from "@/lib/utils";
import { SearchIcon } from "lucide-react";
import type React from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

interface Props {
	className?: string;
}

export const SearchInput: React.FC<Props> = ({ className }) => {
	return (
		<div className={cn("relative ", className)}>
			<SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 z-10 sm:flex hidden" />
			<Input
				className="xl:w-[400px] pl-11 sm:flex hidden"
				placeholder="Search"
			/>

			<Button variant="outline" size="icon" className="sm:hidden flex">
				<SearchIcon />
			</Button>
		</div>
	);
};
