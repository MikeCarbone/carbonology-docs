import { db } from "../../../../libs/db";

export default async (req, res) => {
	try {
		if (req.method === "POST") {
			const ref = db.ref("views").child(req.query.slug);
			const { snapshot } = await ref.transaction((currentViews) => {
				if (currentViews === null) {
					return 1;
				}

				return currentViews + 1;
			});

			return res.status(200).json({
				total: snapshot.val(),
			});
		}

		if (req.method === "GET") {
			let snapshot;
			// If the slug is all, return views for all the posts
			if (req.query.slug === "all") {
				snapshot = await db.ref("views").once("value");
			} else {
				// If not just return the views for that slug
				snapshot = await db
					.ref("views")
					.child(req.query.slug)
					.once("value");
			}
			const views = snapshot.val();

			return res.status(200).json({ total: views });
		}
	} catch (err) {
		console.error(err);
		return res.status(500).json({ total: 0 });
	}
};
