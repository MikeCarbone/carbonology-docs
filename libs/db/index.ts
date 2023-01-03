import admin from "firebase-admin";
import { initializeApp, getApps } from "firebase-admin/app";

if (!getApps().length) {
	initializeApp({
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
