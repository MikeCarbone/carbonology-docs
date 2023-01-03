import Image from "next/image";

export const CustomImage = ({
	src,
	alt,
	isCenter = false,
	source,
	caption,
	style = {},
	...rest
}) => {
	const container = {
		marginTop: "32px",
		marginBottom: "32px",
	};
	const styles = {
		marginLeft: isCenter ? "auto" : "inherit",
		marginRight: isCenter ? "auto" : "inherit",
		marginTop: "0px",
		marginBottom: "10px",
		...style,
	};
	const underImageTextStyle = {
		color: "grey",
		fontSize: "0.8rem",
		fontStyle: "italic",
	};
	return (
		<div style={container}>
			<Image
				height="500"
				width="500"
				{...rest}
				style={styles}
				src={src}
				alt={alt}
			/>
			<div style={{ display: "flex", justifyContent: "space-between" }}>
				{caption ? (
					<p style={underImageTextStyle}>{caption}</p>
				) : (
					<span></span>
				)}
				{source ? (
					<p style={{ ...underImageTextStyle, textAlign: "right" }}>
						Source: {source}
					</p>
				) : null}
			</div>
		</div>
	);
};
