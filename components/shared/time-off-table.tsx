import { showDecimals } from "@/lib/utils";
import type React from "react";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "../ui/table";

interface Props {
	values: {
		date: string;
		description: string;
		usedDays?: number;
		earnedDays?: number;
		balance: number;
	}[];

	className?: string;
}

export const TimeOffTable: React.FC<Props> = ({ className, values }) => {
	return (
		<Table className={className}>
			<TableHeader className="bg-slate-200">
				<TableRow>
					<TableHead>Date</TableHead>
					<TableHead>Description</TableHead>
					<TableHead>Used days</TableHead>
					<TableHead>Earned days</TableHead>
					<TableHead>Balance</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{values.map((value) => (
					<TableRow key={value.date}>
						<TableCell>{value.date}</TableCell>
						<TableCell>{value.description}</TableCell>
						<TableCell>{value.usedDays ? `-${value.usedDays}` : ""}</TableCell>
						<TableCell>
							{value.earnedDays ? `-${showDecimals(value.earnedDays)}` : ""}
						</TableCell>
						<TableCell>{showDecimals(value.balance)}</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
};
