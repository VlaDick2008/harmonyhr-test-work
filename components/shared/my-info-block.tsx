import clsx from "clsx";
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
import Image from "next/image";
import type React from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

interface Props {
	className?: string;
}

export const MyInfoBlock: React.FC<Props> = ({ className }) => {
	return (
		<div className={clsx("absolute top-0 left-[7%] space-y-5", className)}>
			<Image
				src={
					"https://i.pinimg.com/736x/94/c3/67/94c36724d7cf4dc3abf21eebd6b92ba6.jpg"
				}
				className="rounded-full translate-y-9"
				width={250}
				height={250}
				alt="avatar"
			/>

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
	);
};
