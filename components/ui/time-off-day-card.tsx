import clsx from "clsx";
import type React from "react";
import { Separator } from "./separator";

interface Props {
	children: React.ReactNode;
	date: string;
	description: string;

	className?: string;
}

export const TimeOffDayCard: React.FC<Props> = ({
	className,
	children,
	date,
	description,
}) => {
	return (
		<>
			<div
				className={clsx("flex items-center gap-3 text-slate-700", className)}
			>
				{children}
				<div>
					<p>{date}</p>
					<p>{description}</p>
				</div>
			</div>
			<Separator className="my-4 h-1 bg-slate-400" />
		</>
	);
};
