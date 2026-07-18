<!--
  FeaturedCard — Highlighted "Selected work" project card.

  Shows: project title, tagline, summary, up to 3 metrics, and a
  "View case study" CTA linking to the existing SvelteKit route.

  The background has a subtle radial gradient accent that updates
  automatically with the --accent CSS variable.

  Props:
    project — a Project from src/lib/data.ts
-->
<script lang="ts">
	import type { Project } from '$lib/data';
	import { base } from '$app/paths';

	interface Props {
		project: Project;
	}

	let { project }: Props = $props();
</script>

<article class="featured">
	<!-- Header row -->
	<div class="featured-meta">
		<span class="chip chip-accent">Featured project</span>
		<span class="meta-row mono">
			<span>{project.year}</span>
			<span class="dot-sep" aria-hidden="true"></span>
			<span>{project.discipline.toUpperCase()}</span>
			{#if project.duration}
				<span class="dot-sep" aria-hidden="true"></span>
				<span>{project.duration.toUpperCase()}</span>
			{/if}
		</span>
	</div>

	<!-- Two-column content grid -->
	<div class="featured-grid">
		<!-- Text -->
		<div class="featured-text">
			<h2 class="featured-title">{project.title}</h2>
			<p class="featured-tagline">{project.tagline}</p>
			{#if project.summary}
				<p class="featured-summary">{project.summary}</p>
			{/if}

			{#if project.metrics && project.metrics.length > 0}
				<div class="featured-metrics">
					{#each project.metrics as m}
						<div class="metric">
							<div class="metric-value">{m.value}</div>
							<div class="metric-label mono">{m.label.toUpperCase()}</div>
						</div>
					{/each}
				</div>
			{/if}

			<a class="btn btn-primary" href="{base}/projects/{project.slug}">
				<span>View case study</span>
				<svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
					<path d="M3 8 H13 M9 4 L13 8 L9 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
				</svg>
			</a>
		</div>

		<!-- Visual placeholder -->
		<div class="featured-visual">
			<div class="visual-placeholder">
				<span class="mono muted">HERO SHOT · 1600×1000</span>
			</div>
			<div class="visual-caption mono">
				<span>FIG. 01</span>
				<span>· {project.tagline}</span>
			</div>
		</div>
	</div>
</article>

<style>
	.featured {
		border: 1px solid var(--border);
		border-radius: var(--r-lg);
		background:
			linear-gradient(180deg, color-mix(in oklab, var(--accent) 6%, transparent), transparent 40%),
			var(--surface);
		padding: 32px;
		position: relative;
		overflow: hidden;
	}

	/* Radial highlight in the top-right corner */
	.featured::before {
		content: '';
		position: absolute;
		inset: 0;
		background: radial-gradient(600px 240px at 90% 0%, color-mix(in oklab, var(--accent) 16%, transparent), transparent 70%);
		pointer-events: none;
	}

	/* ── Meta row ────────────────────────────────────────────────────────── */
	.featured-meta {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 16px;
		margin-bottom: 28px;
	}

	.meta-row {
		display: inline-flex;
		align-items: center;
		gap: 12px;
		font-size: 11px;
		letter-spacing: 0.16em;
		color: var(--muted);
		text-transform: uppercase;
	}
	.dot-sep {
		width: 3px;
		height: 3px;
		border-radius: 50%;
		background: var(--muted);
	}

	/* ── Content grid ────────────────────────────────────────────────────── */
	.featured-grid {
		display: grid;
		grid-template-columns: 1fr 1.1fr;
		gap: 40px;
		align-items: stretch;
		position: relative;
		z-index: 1;
	}

	/* ── Text side ───────────────────────────────────────────────────────── */
	.featured-title {
		font-family: var(--font-display);
		font-size: clamp(36px, 4vw, 56px);
		font-weight: 600;
		letter-spacing: -0.03em;
		margin: 0 0 12px;
		line-height: 1.02;
	}
	.featured-tagline { font-size: 18px; color: var(--text-dim); margin: 0 0 16px; }
	.featured-summary { color: var(--text-dim); margin: 0 0 28px; line-height: 1.6; }

	/* ── Metrics ─────────────────────────────────────────────────────────── */
	.featured-metrics {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 16px;
		margin-bottom: 32px;
	}
	.metric {
		padding: 14px;
		border: 1px solid var(--border);
		border-radius: var(--r-md);
		background: color-mix(in oklab, var(--bg) 50%, transparent);
	}
	.metric-value {
		font-family: var(--font-display);
		font-size: 22px;
		font-weight: 600;
		letter-spacing: -0.02em;
		color: var(--accent);
		margin-bottom: 4px;
	}
	.metric-label {
		font-size: 10px;
		letter-spacing: 0.18em;
		color: var(--muted);
		text-transform: uppercase;
	}

	/* ── Visual ──────────────────────────────────────────────────────────── */
	.visual-placeholder {
		width: 100%;
		aspect-ratio: 16 / 9;
		border-radius: var(--r-md);
		border: 1px solid var(--border);
		background:
			repeating-linear-gradient(135deg,
				rgba(255, 255, 255, 0.02) 0 12px,
				rgba(255, 255, 255, 0.04) 12px 24px),
			var(--surface);
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.visual-caption {
		display: flex;
		gap: 8px;
		margin-top: 10px;
		font-size: 11px;
		letter-spacing: 0.16em;
		color: var(--muted);
		text-transform: uppercase;
	}

	/* ── Responsive ──────────────────────────────────────────────────────── */
	@media (max-width: 1100px) {
		.featured-grid { grid-template-columns: 1fr; }
		.featured-metrics { grid-template-columns: repeat(3, 1fr); }
	}
	@media (max-width: 760px) {
		.featured-metrics { grid-template-columns: 1fr; }
	}
</style>
