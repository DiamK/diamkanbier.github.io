import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				nunito: ['Nunito', 'sans-serif'],
				'space-grotesk': ['"Space Grotesk"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
				'jetbrains-mono': ['"JetBrains Mono"', 'ui-monospace', '"SF Mono"', 'Menlo', 'monospace']
			}
		}
	},
	plugins: [typography, forms]
} satisfies Config;
