"use client";

import notFoundImg from "@/assets/images/not_found.png";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NotFound() {
	const router = useRouter();

	return (
		<section className="h-screen bg-slte-200 flex flex-col justify-center items-center">
			<h2 className="text-4xl font-bold">404 - Not found</h2>
			<p className="flex items-center gap-4">
				Unfortunately, fig file doesn&apos;t provide any other pages, rather
				than My Info
				<Image src={notFoundImg} width={70} height={70} alt="" />
			</p>

			<Button onClick={() => router.back()}>
				<Link href="/my-info/time-off">Turn back</Link>
			</Button>
		</section>
	);
}
