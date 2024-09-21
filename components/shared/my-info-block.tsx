"use client";

import { cn } from "@/lib/utils";
import { useUserStore } from "@/store/user";
import {
	CircleUserRound,
	Clock,
	Facebook,
	Globe,
	Hash,
	Linkedin,
	Mail,
	MapPin,
	Phone,
	Twitter,
	Users,
} from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

interface Props {
	session: string;

	className?: string;
}

export const MyInfoBlock: React.FC<Props> = ({ className, session }) => {
	const { avatar, setData } = useUserStore();

	React.useEffect(() => {
		fetch("/api/user", {
			method: "POST",
			body: JSON.stringify(session),
		})
			.then((responce) => responce.json())
			.then(({ myProfile }) => setData(myProfile));
	}, [session, setData]);

	return (
		<div
			className={cn(
				"absolute top-0 xl:left-[7%] left-[4%] space-y-5",
				className,
			)}
		>
			{avatar ? (
				// eslint-disable-next-line @next/next/no-img-element
				<img
					src={avatar}
					alt="avatar"
					className="rounded-full translate-y-9 xl:h-[250px] xl:w-[250px] h-[120px] w-[120px]"
				/>
			) : (
				<Skeleton className="xl:h-[250px] xl:w-[250px] md:h-[120px] md:w-[120px] rounded-full translate-y-9 border border-slate-600" />
			)}

			<div className="xl:block hidden">
				<Card>
					<CardContent className="[&>div]:flex [&>div]:gap-2 [&>div]:items-center space-y-3 pt-6 text-sm">
						<div>
							<Phone />
							<p>07911 654321</p>
						</div>
						<div>
							<Mail />
							<p>avd.yana@videorollnet</p>
						</div>
						<div>
							<Button size="icon" variant="ghost">
								<Linkedin />
							</Button>
							<Button size="icon" variant="ghost">
								<Facebook />
							</Button>
							<Button size="icon" variant="ghost">
								<Twitter />
							</Button>
						</div>
					</CardContent>
				</Card>
				<Card>
					<CardHeader>
						<CardTitle className="text-xl">Hire Date</CardTitle>
					</CardHeader>
					<CardContent>
						<p>Sep. 3,2020</p>
						<p>3y - 9m - 20d</p>
					</CardContent>
				</Card>
				<Card>
					<CardContent className="[&>div]:flex [&>div]:gap-2 [&>div]:items-center space-y-3 pt-6 text-sm">
						<div>
							<Hash />
							<p>5</p>
						</div>
						<div>
							<Clock />
							<p>Full-Time</p>
						</div>
						<div>
							<Users />
							<p>Operations</p>
						</div>
						<div>
							<Globe />
							<p>Europe</p>
						</div>
						<div>
							<MapPin />
							<p>London, UK</p>
						</div>
					</CardContent>
				</Card>
				<Card>
					<CardHeader>
						<CardTitle className="text-xl">Direct Reports</CardTitle>
					</CardHeader>
					<CardContent className="[&>div]:flex [&>div]:gap-2 [&>div]:items-center space-y-3 text-sm">
						<div>
							<CircleUserRound />
							<p>Shane</p>
						</div>
						<div>
							<CircleUserRound />
							<p>Nathan</p>
						</div>
						<div>
							<CircleUserRound />
							<p>Mitchell</p>
						</div>
						<div>
							<CircleUserRound />
							<p>Philip</p>
						</div>
						<div>
							<Users />
							<p>4 More...</p>
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	);
};
