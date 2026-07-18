<!--
  ProjectGlyph — Inline SVG icon for project tile thumbnails.

  Props:
    kind    — one of: compass | silhouette | globe | fade | note | puzzle | flame
    accent  — stroke/fill colour (defaults to CSS --accent var)

  Each glyph is a simple geometric shape that matches the design spec.
  To add a new glyph, add a new `case` in the switch block below.
-->
<script lang="ts">
	interface Props {
		kind: string;
		accent?: string;
	}

	let { kind, accent = 'var(--accent)' }: Props = $props();

	const size = 64;
	const vb = '0 0 64 64';
</script>

{#if kind === 'compass'}
	<svg width={size} height={size} viewBox={vb} fill="none" aria-hidden="true">
		<circle cx="32" cy="32" r="22" stroke={accent} stroke-width="2" />
		<path d="M32 14 L36 32 L32 50 L28 32 Z" fill={accent} opacity="0.9" />
		<circle cx="32" cy="32" r="3" fill="#0b1620" />
	</svg>
{:else if kind === 'silhouette'}
	<svg width={size} height={size} viewBox={vb} fill="none" aria-hidden="true">
		<rect x="10" y="10" width="44" height="44" rx="4" stroke={accent} stroke-width="2" />
		<circle cx="32" cy="26" r="6" fill={accent} />
		<path d="M18 50 C20 38 44 38 46 50 Z" fill={accent} />
	</svg>
{:else if kind === 'globe'}
	<svg width={size} height={size} viewBox={vb} fill="none" aria-hidden="true">
		<circle cx="32" cy="32" r="22" stroke={accent} stroke-width="2" />
		<ellipse cx="32" cy="32" rx="22" ry="9" stroke={accent} stroke-width="2" />
		<line x1="32" y1="10" x2="32" y2="54" stroke={accent} stroke-width="2" />
	</svg>
{:else if kind === 'fade'}
	<svg width={size} height={size} viewBox={vb} fill="none" aria-hidden="true">
		<rect x="10" y="20" width="44" height="24" stroke={accent} stroke-width="2" />
		<text
			x="32"
			y="38"
			text-anchor="middle"
			font-family="ui-monospace, monospace"
			font-size="12"
			fill={accent}
			font-weight="700">FADE</text
		>
	</svg>
{:else if kind === 'note'}
	<svg width={size} height={size} viewBox={vb} fill="none" aria-hidden="true">
		<circle cx="22" cy="44" r="6" stroke={accent} stroke-width="2" />
		<circle cx="44" cy="38" r="6" stroke={accent} stroke-width="2" />
		<line x1="28" y1="44" x2="50" y2="38" stroke={accent} stroke-width="2" />
		<line x1="28" y1="44" x2="28" y2="16" stroke={accent} stroke-width="2" />
		<line x1="50" y1="38" x2="50" y2="14" stroke={accent} stroke-width="2" />
		<line x1="28" y1="16" x2="50" y2="14" stroke={accent} stroke-width="2" />
	</svg>
{:else if kind === 'puzzle'}
	<svg width={size} height={size} viewBox={vb} fill="none" aria-hidden="true">
		<path
			d="M14 14 H30 V20 a4 4 0 0 0 8 0 V14 H50 V30 h-6 a4 4 0 0 0 0 8 h6 V50 H14 Z"
			stroke={accent}
			stroke-width="2"
			fill="none"
		/>
	</svg>
{:else if kind === 'flame'}
	<svg width={size} height={size} viewBox={vb} fill="none" aria-hidden="true">
		<path
			d="M32 12 C40 22 46 26 44 38 a12 12 0 1 1 -24 0 C18 30 26 28 28 22 C30 28 30 30 32 32 C32 26 28 22 32 12 Z"
			fill={accent}
			opacity="0.9"
		/>
	</svg>
{:else}
	<!-- Fallback: simple square -->
	<svg width={size} height={size} viewBox={vb} fill="none" aria-hidden="true">
		<rect x="12" y="12" width="40" height="40" stroke={accent} stroke-width="2" />
	</svg>
{/if}
