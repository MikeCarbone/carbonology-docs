import * as admin from "firebase-admin";

if (!admin.apps.length) {
	admin.initializeApp({
		credential: admin.credential.cert({
			projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
			clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
			privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
		}),
		databaseURL: process.env.DATABASE_URL,
	});
}

const db = admin.database();

export { db };

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
			const ref = db.ref("views");
			const snapshot = await ref.once("value");
			if (req.query.slug === "all") {
				// If the slug is all, return views for all the posts
				const views = snapshot.val();
				return res.status(200).json({ total: views });
			}

			// If not just return the views for that slug
			const viewCount = snapshot.val()[req.query.slug];

			return res.status(200).json({ total: viewCount });
		}
	} catch (err) {
		console.error(err);
		return res.status(500).json({ total: 0, did_error: true });
	}
};
