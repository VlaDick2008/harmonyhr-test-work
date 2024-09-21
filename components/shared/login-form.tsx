"use client";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useUserStore } from "@/store/user";
import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/navigation";
import React from "react";

const LOGIN_MUTATION = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      access_token
    	refresh_token
    }
  }
`;

export function LoginForm() {
	const router = useRouter();
	const { toast } = useToast();

	const [email, setEmail] = React.useState("john@mail.com");
	const [password, setPassword] = React.useState("changeme");

	const [login, { loading }] = useMutation(LOGIN_MUTATION);
	const { setData } = useUserStore();

	const handleLogin = async () => {
		try {
			await login({ variables: { email, password } }).then(
				async ({ data: tokens }) => {
					await fetch("/api/auth", {
						method: "POST",
						body: JSON.stringify({ tokens }),
					})
						.then((response) => response.json())
						.then((data) => {
							setData(data.myProfile);

							toast({
								title: "Login successful",
								description: "Welcome back!",
							});
						});
				},
			);

			router.push("/my-info/time-off");
		} catch (err) {
			console.log(err);
			toast({
				title: "Invalid credentials",
				description: "Please check your credentials and try again.",
				variant: "destructive",
			});
		}
	};

	return (
		<Card className="w-full max-w-sm">
			<CardHeader>
				<CardTitle className="text-2xl">Login</CardTitle>
				<CardDescription>
					Enter your email below to login to your account.
				</CardDescription>
			</CardHeader>
			<CardContent className="grid gap-4">
				<div className="grid gap-2">
					<Label htmlFor="email">Email</Label>
					<Input
						id="email"
						type="email"
						placeholder="myemail@mail.com"
						required
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div className="grid gap-2">
					<Label htmlFor="password">Password</Label>
					<Input
						id="password"
						type="password"
						required
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
			</CardContent>
			<CardFooter>
				<Button className="w-full" onClick={handleLogin} disabled={loading}>
					Sign in
				</Button>
			</CardFooter>
		</Card>
	);
}
