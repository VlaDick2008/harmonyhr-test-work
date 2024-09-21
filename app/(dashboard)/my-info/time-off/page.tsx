import { TimeOffTable } from "@/components/shared/time-off-table";
import { Button } from "@/components/ui/button";
import { Combobox } from "@/components/ui/combobox";
import { Separator } from "@/components/ui/separator";
import { TimeOffCard } from "@/components/ui/time-off-card";
import { TimeOffDayCard } from "@/components/ui/time-off-day-card";
import {
	Clock,
	Cross,
	FileClock,
	Mountain,
	PiggyBank,
	RotateCcwSquare,
} from "lucide-react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const comboboxPlaceholder = [
	{
		value: "next.js",
		label: "Next.js",
	},
	{
		value: "sveltekit",
		label: "SvelteKit",
	},
	{
		value: "nuxt.js",
		label: "Nuxt.js",
	},
	{
		value: "remix",
		label: "Remix",
	},
	{
		value: "astro",
		label: "Astro",
	},
];

const tableValues = [
	{
		date: "23/05/2024",
		description: "Accrual for 23/05/2024 to 20/11/2024",
		earnedDays: 3,
		balance: 3,
	},
	{
		date: "23/05/2024",
		description: "Accrual for 23/05/2024 to 20/11/2024",
		usedDays: 6,
		balance: 3,
	},
	{
		date: "23/05/2024",
		description: "Accrual for 23/05/2024 to 20/11/2024",
		earnedDays: 3,
		balance: 3,
	},
	{
		date: "23/05/2024",
		description: "Accrual for 23/05/2024 to 20/11/2024",
		earnedDays: 3,
		balance: 3,
	},
	{
		date: "23/05/2024",
		description: "Accrual for 23/05/2024 to 20/11/2024",
		usedDays: 6,
		balance: 3,
	},
	{
		date: "23/05/2024",
		description: "Accrual for 23/05/2024 to 20/11/2024",
		earnedDays: 3,
		balance: 3,
	},
];

export default function TimeOff() {
	const cookieStore = cookies();
	const session = cookieStore.has("session");

	if (!session) {
		redirect("/login");
	}

	return (
		<div className="bg-white rounded-b-lg mr-24 px-4 pt-12 pb-5">
			<div className="flex justify-between items-center">
				<h1 className="text-3xl text-slate-600 flex gap-2 items-center">
					<FileClock /> Time Off
				</h1>
				<div className="flex items-end gap-7">
					<p>
						Accrual Level Start Date{" "}
						<span className="text-slate-500">03/09-2020</span>
					</p>
					<Button variant="outline">Add Time Off Policy</Button>
				</div>
			</div>
			<Separator className="my-5 h-1 bg-slate-400" />
			<div className="flex gap-14 px-20">
				<TimeOffCard
					cardTitle="Sick"
					cardFooter="Days Available"
					cardSecondaryFooter="1 day scheduled"
					underCardFooter="Sick Full-Time"
				>
					<Cross size="36" />
					<p>3</p>
				</TimeOffCard>
				<TimeOffCard
					cardTitle="Annual Leave"
					cardFooter="Days Available"
					underCardFooter="Holiday Full-Time"
				>
					<Mountain size="36" />
					<p>10.3</p>
				</TimeOffCard>
				<TimeOffCard
					cardTitle="Comp/in Lieu Time"
					cardFooter="Human Used(YTD)"
					underCardFooter="Sick Full-Time"
				>
					<FileClock size="36" />
					<p>0</p>
				</TimeOffCard>
			</div>
			<h2 className="text-xl text-slate-600 flex gap-2 items-center mt-5">
				<Clock />
				Upcoming Time Off
			</h2>
			<Separator className="my-5 h-1 bg-slate-400" />
			<TimeOffDayCard date="Jan 27" description="1 day of sick">
				<Cross size="36" />
			</TimeOffDayCard>
			<TimeOffDayCard date="Jul 4" description="Independence Day">
				<PiggyBank size="36" />
			</TimeOffDayCard>
			<h2 className="text-xl text-slate-600 flex gap-2 items-center my-5">
				<RotateCcwSquare />
				History
			</h2>
			<div className="flex justify-between mb-3">
				<div className="flex gap-4">
					<Combobox placeholder="Sick" size="lg" values={comboboxPlaceholder} />
					<Combobox placeholder="All" size="sm" values={comboboxPlaceholder} />
				</div>
				<Combobox
					placeholder="Balance History"
					size="md"
					values={comboboxPlaceholder}
				/>
			</div>
			<TimeOffTable values={tableValues} />
		</div>
	);
}
