const query = `query {
  myProfile {
    name
    avatar
  }
}`;

export async function loginUser(access_token: string) {
	const res = await fetch("https://api.escuelajs.co/graphql", {
		method: "POST",
		headers: {
			Authorization: `Bearer ${access_token}`,
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ query }),
	})
		.then((response) => response.json())
		.then((data) => {
			return data;
		});

	return res.data.myProfile;
}
