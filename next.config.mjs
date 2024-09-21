/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "i.pinimg.com",
				port: "",
				pathname: "/736x/94/c3/67/94c36724d7cf4dc3abf21eebd6b92ba6.jpg",
			},
			{
				protocol: "https",
				hostname: "i.imgur.com",
			},
		],
	},
};

export default nextConfig;
