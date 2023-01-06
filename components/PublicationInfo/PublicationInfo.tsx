import { useEffect } from "react";
import { logView } from "../../libs/views";
import ViewCount from "../ViewCount";
import Author from "../Author";
import style from "./PublicationInfo.module.css";

export const PublicationInfo = ({ slug, publishDate, author, subtitle }) => {
	useEffect(() => {
		logView({ slug });
	}, []);

	return (
		<div style={{ margin: "10px 0 10px 0" }}>
			{subtitle ? <p>{subtitle}</p> : null}
			<div className={style.container}>
				<div className={style.metric}>
					<ViewCount slug={slug} />
				</div>
				<span className={style.separator}>&middot;</span>
				<p className={style.metric}>Published {publishDate}</p>
				<span className={style.separator}>&middot;</span>
				<div className={style.metric}>
					<Author author="mike-carbone" />
				</div>
			</div>
		</div>
	);
};
