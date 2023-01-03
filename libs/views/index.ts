import { domain } from "../constants/urls";

export const getViews = ({ slug }) => {
	return fetch(`${domain}/api/posts/${slug}/views`);
};

export const logView = ({ slug }) => {
	if (process.env.NODE_ENV === "development") return;
	return fetch(`${domain}/api/posts/${slug}/views`, { method: "POST" });
};
