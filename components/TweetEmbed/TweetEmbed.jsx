import { useState, useEffect } from "react";
import twitterWidget from "../../libs/twitter/widget";

export const TweetEmbed = ({ tweetId = "" }) => {
	const [widget, setWidget] = useState();
	const [twt, setTwttr] = useState();
	const [loading, setLoading] = useState(true);

	// Make sure we have a window before attaching the twitter widget
	useEffect(() => {
		if (typeof window !== "undefined") {
			setWidget(twitterWidget());
			if (window.twttr) {
				setTwttr(window.twttr);
			}
		}
	}, [widget]);

	// Check to make sure the widgets library is loaded
	useEffect(() => {
		if (twt) {
			const interval = setInterval(() => {
				const loaded = twt.init;
				if (loaded) {
					setLoading(false);
					clearInterval(interval);
				}
			}, 500);
		}
	}, [twt]);

	// Spawn in the actual tweet
	useEffect(() => {
		if (!loading) {
			// Find the nextra color scheme, will be 'light' or 'dark'
			const colorScheme =
				document.getElementsByTagName("html")[0].style.colorScheme;
			// Options for embedding can be found here
			// https://developer.twitter.com/en/docs/twitter-for-websites/embedded-tweets/guides/embedded-tweet-parameter-reference
			twt.widgets
				.createTweetEmbed(tweetId, document.getElementById(tweetId), {
					theme: colorScheme,
					align: "center",
					// Min 220px, Max 550px
					width: "550px",
				})
				.then((d) =>
					console.log(`Loaded Tweet ${tweetId} successfully.`)
				)
				.catch((e) => console.log(`Failed to load Tweet ${tweetId}.`));
		}
	}, [loading]);

	return <div id={tweetId} style={{ margin: "50px 0" }} />;
};

export default TweetEmbed;
