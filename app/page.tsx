"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {
	const router = useRouter();

	return (
		<section>
			<p>Абстрактная главная страница</p>
			<br />
			<p>
				Если редирект не произошёл (что либо не возможно, либо вы авторизованы),
				то тыкните на эту кнопку:{" "}
				<Button onClick={() => router.push("/login")}>Туда сюда</Button>
			</p>
		</section>
	);
}
