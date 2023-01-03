import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

import { domain } from "../../libs/constants/urls";

export const config = {
	runtime: "experimental-edge",
};

// Make sure the font exists in the specified path:
const fontSemiBold = fetch(
	new URL("../../assets/fonts/Inter-SemiBold.ttf", import.meta.url)
).then((res) => res.arrayBuffer());
const fontRegular = fetch(
	new URL("../../assets/fonts/Inter-Regular.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

export default async function handler(req: NextRequest) {
	const fontDataSemiBold = await fontSemiBold;
	const fontDataRegular = await fontRegular;
	try {
		const { searchParams } = new URL(req.url);

		// ?title=<title>
		const hasTitle = searchParams.has("title");
		const title = hasTitle
			? searchParams.get("title")?.slice(0, 100)
			: "Carbonology";

		return new ImageResponse(
			(
				<div
					style={{
						backgroundColor: "#1F1F1F",
						backgroundSize: "150px 150px",
						border: "22px solid black",
						boxSizing: "border-box",
						height: "100%",
						width: "100%",
						display: "flex",
						textAlign: "center",
						alignItems: "center",
						justifyContent: "center",
						flexDirection: "column",
						flexWrap: "nowrap",
						padding: "45px",
					}}
				>
					<h1
						style={{
							fontSize: "80px",
							fontStyle: "normal",
							fontFamily: '"InterSemiBold"',
							color: "#fff",
							marginTop: "0",
							transform: "translateY(-20px)",
							padding: "0",
							lineHeight: "90px",
							whiteSpace: "pre-wrap",
							textAlign: "left",
							letterSpacing: "-2px",
							width: "100%",
						}}
					>
						{title}
					</h1>
					<p
						style={{
							position: "absolute",
							left: "55px",
							bottom: "25px",
							color: "#AEAEAE",
							fontSize: "24px",
							fontFamily: '"InterRegular"',
						}}
					>
						Written by Mike Carbone
					</p>
					<img
						width="70"
						height="70"
						style={{
							position: "absolute",
							right: "55px",
							bottom: "40px",
						}}
						src={`${domain}/images/logos/Carbonology_Logo_White_600px.png`}
					/>
				</div>
			),
			{
				width: 1200,
				height: 630,
				fonts: [
					{
						name: "InterSemiBold",
						data: fontDataSemiBold,
						style: "normal",
					},
					{
						name: "InterRegular",
						data: fontDataRegular,
						style: "normal",
					},
				],
			}
		);
	} catch (e: any) {
		console.log(`${e.message}`);
		return new Response(`Failed to generate the image`, {
			status: 500,
		});
	}
}
