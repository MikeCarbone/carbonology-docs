import { getViews } from "../views";

export async function getStaticProps() {
	return getViews({ slug: "all" })
		.then((res) => res.json())
		.then((data) => ({
			props: {
				// We add an `ssg` field to the page props,
				// which will be provided to the Nextra `useSSG` hook.
				ssg: {
					views: data.total,
				},
			},
			// The page will be considered as stale and regenerated every 60 seconds.
			revalidate: 60,
		}));
}
