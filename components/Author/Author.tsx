import Image from "next/image";

const validAuthors = {
	"mike-carbone": "mike-carbone",
} as const;

const Authors = {
	"mike-carbone": {
		name: "Mike Carbone",
		pic_url: "/images/people/mike-carbone.png",
		link: "https://twitter.com/MikeCarbone",
	},
};

export const Author = ({ author }) => {
	const authorConfig = Authors[author];
	return (
		<div style={{ alignItems: "center", display: "flex" }}>
			<p
				style={{
					fontSize: "0.9rem",
					marginRight: "5px",
					color: "grey",
					transform: "translateY(-1px)",
				}}
			>
				Written by{" "}
				<a
					href={authorConfig.link}
					rel="noopenner noreferrer"
					target="_blank"
					// style={{ textDecoration: "underline" }}
				>
					{authorConfig.name}
				</a>
			</p>
		</div>
	);
};

Author.authors = validAuthors;
