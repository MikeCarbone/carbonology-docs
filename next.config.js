const withNextra = require("nextra")({
	theme: "nextra-theme-docs",
	themeConfig: "./theme.config.tsx",
});

module.exports = withNextra({
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "imgur.com",
				port: "",
				pathname: "**",
			},
		],
	},
});
