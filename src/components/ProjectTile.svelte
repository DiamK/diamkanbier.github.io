<!--
  ProjectTile — Individual project card in the grid.

  Shows a thumbnail area with an SVG glyph icon, a discipline chip,
  project title, tagline, year, and hover reveal animations.

  Props:
    project  — a Project from src/lib/data.ts
    density  — 'compact' | 'regular' | 'comfy' (from tweaks)
-->
<script lang="ts">
	import type { Project } from '$lib/data';
	import ProjectGlyph from '$components/ProjectGlyph.svelte';
	import { base } from '$app/paths';

	interface Props {
		project: Project;
		density?: 'compact' | 'regular' | 'comfy';
	}

	let { project, density = 'regular' }: Props = $props();

	let hovered = $state(false);

	const glyphAccent = $derived(
		project.accent === 'cyan' ? 'var(--accent-2)' : 'var(--accent)'
	);
</script>

<a
	href="{base}/projects/{project.slug}"
	class="tile density-{density}"
	class:hovered
	onmouseenter={() => { hovered = true; }}
	onmouseleave={() => { hovered = false; }}
	aria-label="{project.title} — {project.discipline}"
>
	<!-- Thumbnail area with glyph -->
	<div class="tile-thumb">
		<div class="tile-glyph">
			<ProjectGlyph kind={project.icon} accent={glyphAccent} />
		</div>
		<div class="tile-stripes" aria-hidden="true"></div>

		<!-- Hover badge -->
		<div class="tile-hover-badge" aria-hidden="true">
			<span class="mono">CLICK</span>
			<span>to open case study</span>
		</div>
	</div>

	<!-- Body -->
	<div class="tile-body">
		<div class="tile-headerline">
			<h3 class="tile-title">{project.title}</h3>
			<span class="chip chip-{project.accent}">{project.discipline}</span>
		</div>
		<p class="tile-tagline">{project.tagline}</p>
		<div class="tile-foot">
			<span class="mono muted">{project.year}</span>
			<span class="open-cue mono" aria-hidden="true">
				Open
				<svg width="12" height="12" viewBox="0 0 16 16" fill="none">
					<path d="M3 8 H13 M9 4 L13 8 L9 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
				</svg>
			</span>
		</div>
	</div>
</a>

<style>
	.tile {
		position: relative;
		display: flex;
		flex-direction: column;
		border: 1px solid var(--border);
		border-radius: var(--r-lg);
		background: var(--surface);
		overflow: hidden;
		cursor: pointer;
		transition: transform 200ms, border-color 200ms, background 200ms;
		text-decoration: none;
		color: inherit;
	}
	.tile:hover,
	.tile.hovered {
		transform: translateY(-3px);
		border-color: color-mix(in oklab, var(--accent) 55%, var(--border));
		background: var(--surface-2);
	}

	/* ── Thumbnail ───────────────────────────────────────────────────────── */
	.tile-thumb {
		position: relative;
		aspect-ratio: 16 / 9;
		display: flex;
		align-items: center;
		justify-content: center;
		background:
			radial-gradient(80% 80% at 50% 40%, color-mix(in oklab, var(--accent) 14%, transparent), transparent 60%),
			var(--bg-2);
		border-bottom: 1px solid var(--border-soft);
		overflow: hidden;
	}

	.tile-glyph {
		position: relative;
		z-index: 1;
		transform: scale(1.1);
	}

	.tile-stripes {
		position: absolute;
		inset: 0;
		background: repeating-linear-gradient(135deg,
			rgba(255, 255, 255, 0.02) 0 8px,
			rgba(255, 255, 255, 0.04) 8px 16px);
		opacity: 0.6;
	}

	.tile-hover-badge {
		position: absolute;
		left: 14px;
		top: 14px;
		padding: 5px 9px;
		background: var(--accent);
		color: #0a1220;
		border-radius: 999px;
		font-family: var(--font-mono);
		font-size: 10px;
		letter-spacing: 0.18em;
		text-transform: uppercase;
		display: flex;
		align-items: center;
		gap: 6px;
		opacity: 0;
		transform: translateY(-4px);
		transition: opacity 200ms, transform 200ms;
		pointer-events: none;
	}
	.tile:hover .tile-hover-badge,
	.tile.hovered .tile-hover-badge {
		opacity: 1;
		transform: translateY(0);
	}

	/* ── Body ────────────────────────────────────────────────────────────── */
	.tile-body {
		padding: 18px 18px 16px;
		display: flex;
		flex-direction: column;
		gap: 8px;
		flex: 1;
	}

	.tile-headerline {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 12px;
	}

	.tile-title {
		font-family: var(--font-display);
		font-size: 19px;
		font-weight: 600;
		letter-spacing: -0.02em;
		margin: 0;
	}

	.tile-tagline {
		color: var(--text-dim);
		font-size: 14px;
		line-height: 1.45;
		margin: 0;
	}

	.tile-foot {
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 12px;
		margin-top: 6px;
	}

	.open-cue {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		color: var(--muted);
		font-size: 11px;
		letter-spacing: 0.16em;
		text-transform: uppercase;
		opacity: 0;
		transform: translateX(-6px);
		transition: opacity 200ms, transform 200ms, color 200ms;
	}
	.tile:hover .open-cue,
	.tile.hovered .open-cue {
		opacity: 1;
		transform: translateX(0);
		color: var(--accent);
	}

	/* ── Density variants ────────────────────────────────────────────────── */
	.density-compact .tile-title    { font-size: 16px; }
	.density-compact .tile-tagline  {
		font-size: 13px;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
	.density-compact .tile-body     { padding: 14px; }
</style>
