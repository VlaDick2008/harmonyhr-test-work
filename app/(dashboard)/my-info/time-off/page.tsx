import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { TimeOffCard } from "@/components/ui/time-off-card";
import { Clock, Cross, FileClock, Mountain } from "lucide-react";

export default function TimeOff() {
	return (
		<div className="bg-white rounded-b-lg mr-24 p-4 pt-12">
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
			<div className="flex gap-2 mt-5 text-slate-500">
				<Clock />
				<p className="hover:underline cursor-pointer">Upcoming Time Off</p>
			</div>
			<Separator className="my-5 h-1 bg-slate-400" />
		</div>
	);
}
