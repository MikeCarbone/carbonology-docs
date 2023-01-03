export const getViews = ({ slug }) => {
	return fetch(`http://localhost:3000/api/posts/${slug}/views`);
};

export const logView = ({ slug }) => {
	if (process.env.NODE_ENV === "development") return;
	return fetch(`/api/posts/${slug}/views`, { method: "POST" });
};
