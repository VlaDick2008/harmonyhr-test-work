import { LoginForm } from "@/components/shared/login-form";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";

export default async function Login() {
	const cookieStore = cookies();
	const session = cookieStore.has("session");

	if (session) {
		redirect("/my-info/time-off");
	}

	return (
		<section className="bg-slate-200 min-h-screen flex flex-col justify-center items-center">
			<LoginForm />
		</section>
	);
}
