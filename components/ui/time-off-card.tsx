import clsx from "clsx";
import type React from "react";
import { Card, CardContent, CardFooter, CardTitle } from "./card";

interface Props {
	cardTitle?: string;
	children: React.ReactNode;
	cardFooter?: string;
	cardSecondaryFooter?: string;
	underCardFooter?: string;

	className?: string;
}

export const TimeOffCard: React.FC<Props> = ({
	className,
	cardTitle,
	children,
	cardFooter,
	cardSecondaryFooter,
	underCardFooter,
}) => {
	return (
		<div className="text-center flex-1 flex flex-col">
			<Card
				className={clsx(
					"text-center gap-1 flex flex-col items-center justify-center bg-slate-100 border-none py-4 flex-1",
					className,
				)}
			>
				<CardTitle className="text-2xl">{cardTitle}</CardTitle>
				<CardContent className="flex p-0 text-4xl font-bold items-center gap-2">
					{children}
				</CardContent>
				<CardFooter className="flex flex-col gap-1 pb-0">
					<p className="font-bold">{cardFooter}</p>
					<p className=" text-slate-500">{cardSecondaryFooter}</p>
				</CardFooter>
			</Card>
			<p className="text-sm text-slate-500 my-2">{underCardFooter}</p>
		</div>
	);
};
