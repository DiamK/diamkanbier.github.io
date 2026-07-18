/**
 * tweaks.svelte.ts — Shared design-tweak state.
 *
 * $state in a .svelte.ts file is Svelte 5 "universal reactive state": a
 * module-level singleton that any component can import and read/write.
 * The layout watches this object and applies the palette + radius values
 * as CSS custom properties on <html> so the whole page updates instantly.
 *
 * TO ADD A NEW PALETTE: append a [accent, accent-2, bg] tuple to PALETTE_OPTIONS.
 */

export type Palette = [string, string, string];
export type Density = 'compact' | 'regular' | 'comfy';
export type HeroLayout = 'split' | 'stacked';
export type Rounded = 'sharp' | 'soft' | 'pillow';

export interface Tweaks {
	palette: Palette;
	density: Density;
	heroLayout: HeroLayout;
	rounded: Rounded;
	featuredOn: boolean;
}

// The four built-in palette presets shown in the tweaks panel.
export const PALETTE_OPTIONS: Palette[] = [
	['#3D7BFF', '#4FD1E0', '#0A1220'], // deep cobalt (default)
	['#4F6BFF', '#7FE5FF', '#080E1A'], // electric blue
	['#6E94D6', '#9FB8E0', '#0B1424'], // slate steel
	['#2E62F4', '#F2B544', '#0A1220'] // cobalt + amber
];

// Singleton reactive state — mutate directly: tweaks.density = 'compact'
export const tweaks: Tweaks = $state({
	palette: ['#3D7BFF', '#4FD1E0', '#0A1220'],
	density: 'regular',
	heroLayout: 'split',
	rounded: 'soft',
	featuredOn: true
});
