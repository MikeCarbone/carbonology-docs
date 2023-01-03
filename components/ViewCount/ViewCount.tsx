import { useSSG } from "nextra/ssg";

export const ViewCount = ({ slug }) => {
	const { views } = useSSG();
	const number = views[slug] || 0;
	return (
		<span style={{ fontSize: "0.9rem", color: "grey" }}>
			{new Intl.NumberFormat().format(number)} views
		</span>
	);
};
