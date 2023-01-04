import { domain } from "../constants/urls";

export const getViews = ({ slug }) => {
	const url = new URL(`/api/posts/${slug}/views`, domain);
	return fetch(url);
};

export const logView = ({ slug }) => {
	if (process.env.NODE_ENV === "development") return;
	const url = new URL(`/api/posts/${slug}/views`, domain);
	return fetch(url, { method: "POST" });
};
