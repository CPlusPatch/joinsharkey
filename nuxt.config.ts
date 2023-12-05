// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: [
		"@unocss/nuxt",
		"nuxt-headlessui",
		"nuxt-icon",
		"@vueuse/nuxt",
		"@nuxtseo/module",
		"@nuxt/image",
	],
	image: {
		domains: [
			"cdn.cpluspatch.com",
			"cdn-web.cpluspatch.com",
			"s3.kitsunes.club",
			"unsplash.com",
			"thoughtfullaw.com",
			"aip.cpluspatch.dev",
			"www.muylinux.com",
			"matrix.org",
			"github.com",
			"cpluspatch.com",
			"pool.jortage.com",
			"kitsu.life",
			"media.mastodon.de",
			"opengraph.githubassets.com",
		],
		ipx: {
			maxAge: 60 * 60 * 24 * 365,
		},
	},
	app: {
		head: {
			link: [
				{
					rel: "icon",
					href: "/favicon.png",
					type: "image/png",
				},
			],
			htmlAttrs: { lang: "en-us" },
		},
	},
	nitro: {
		compressPublicAssets: true,
		routeRules: {
			"/_nuxt/**": {
				swr: 60 * 60 * 24 * 365,
			},
			"/images/**": {
				swr: 60 * 60 * 24 * 365,
			},
		},
		prerender: {
			failOnError: false,
		},
	},
	runtimeConfig: {
		public: {
			language: "en-US",
			titleSeparator: "·",
			siteName: "Join Sharkey",
			trailingSlash: true,
			siteUrl: "https://joinsharkey.org",
		},
	},
});
