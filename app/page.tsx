import { Button } from "@/components/ui/button";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function Home() {
	const cookieStore = cookies();
	const session = cookieStore.has("session");

	if (session) {
		redirect("/my-info/time-off");
	} else {
		redirect("/login");
	}

	return (
		<section>
			<p>Абстрактная главная страница</p>
			<br />
			<p className="flex gap-5 items-center">
				Если вы хотите домой, в родную одну страницу, то тыкайте сюда:
				<Button onClick={() => redirect("/my-info/time-off")}>Туда сюда</Button>
			</p>
		</section>
	);
}
