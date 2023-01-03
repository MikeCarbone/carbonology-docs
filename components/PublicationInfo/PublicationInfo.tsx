import { useEffect } from "react";
import { logView } from "../../libs/views";
import ViewCount from "../ViewCount";
import Author from "../Author";

export const PublicationInfo = ({ slug, publishDate, author, subtitle }) => {
	useEffect(() => {
		logView({ slug });
	}, []);

	return (
		<div style={{ margin: "10px 0 10px 0" }}>
			{subtitle ? <p>{subtitle}</p> : null}
			<div
				style={{
					display: "flex",
					margin: "20px 0 0px 0",
				}}
			>
				<ViewCount slug={slug} />
				<span
					style={{
						color: "grey",
						margin: "0 15px",
						transform: "scale(1.5) translateY(-2px)",
					}}
				>
					&middot;
				</span>
				<p style={{ fontSize: "0.9rem", color: "grey" }}>
					Published {publishDate}
				</p>
				<span
					style={{
						color: "grey",
						margin: "0 15px",
						transform: "scale(1.5) translateY(-2px)",
					}}
				>
					&middot;
				</span>
				<Author author="mike-carbone" />
			</div>
		</div>
	);
};
