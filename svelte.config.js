import adapter from '@sveltejs/adapter-cloudflare';
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			routes: {
			  include: ['/*'],
			  exclude: ['<all>']
			}
		  })
	},
	preprocess: [
		preprocess({
			postcss: true,
		}),
	],
};

export default config;
