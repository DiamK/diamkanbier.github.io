import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Preprocessing voor Svelte bestanden
	preprocess: vitePreprocess(),

	kit: {
		alias: {
			$components: 'src/components',
			$lib: 'src/lib'
		},
		// Gebruik adapter-static voor statische site hosting via FTP
		adapter: adapter(),
		paths: {
			base: ''
		}
	}
};

export default config;
