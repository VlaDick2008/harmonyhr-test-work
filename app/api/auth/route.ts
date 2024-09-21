import { gql } from "@apollo/client";
import { print } from "graphql";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const USER_QUERY = gql`query {
  myProfile {
    name
    avatar
  }
}`;

export async function POST(req: NextRequest) {
	const { tokens } = await req.json();

	const { data } = await fetch(process.env.NEXT_PUBLIC_API_ROUTE as string, {
		method: "POST",
		headers: {
			Authorization: `Bearer ${tokens.login.access_token}`,
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ query: print(USER_QUERY) }),
	}).then((response) => response.json());

	const expires = new Date(Date.now() + 10 * 100000);

	cookies().set("session", tokens.login.access_token, {
		expires,
	});

	return NextResponse.json(data);
}
