import { gql } from "@apollo/client";
import { print } from "graphql";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const USER_QUERY = gql`query {
  myProfile {
    name
    avatar
  }
}`;

export async function POST(req: NextRequest) {
	const token = await req.json();

	const { data } = await fetch(process.env.NEXT_PUBLIC_API_ROUTE as string, {
		method: "POST",
		headers: {
			Authorization: `Bearer ${token}`,
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ query: print(USER_QUERY) }),
	}).then((response) => response.json());

	return NextResponse.json(data);
}
