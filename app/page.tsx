"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {
	const router = useRouter();

	return (
		<section>
			<p>Абстрактная главная страница</p>
			<br />
			<p className="flex gap-5 items-center">
				Если вы хотите домой, в родную одну страницу, то тыкайте сюда:
				<Button onClick={() => router.push("/login")}>Туда сюда</Button>
			</p>
		</section>
	);
}
