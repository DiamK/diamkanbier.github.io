<!--
  AboutSection — About me section with biography and sidebar cards.

  LEFT COLUMN — Biography text (intro + body paragraphs)
  RIGHT COLUMN — Stats card (key/value rows) + Inventory card (tool chips)

  TO UPDATE YOUR BIO: edit src/lib/data.ts → ABOUT.intro and ABOUT.paragraphs
  TO UPDATE STATS:    edit src/lib/data.ts → ABOUT.stats
  TO UPDATE TOOLS:    edit the `tools` array directly in this file (line ~50)

  Props:
    about — About object from src/lib/data.ts
-->
<script lang="ts">
	import type { About } from '$lib/data';

	interface Props {
		about: About;
	}

	let { about }: Props = $props();

	// Edit your tool inventory here
	const tools = [
		'Figma', 'Miro', 'After Effects', 'Blender',
		'Principle', 'Notion', 'Illustrator', 'Photoshop'
	];
</script>

<section class="section about" id="about">
	<div class="section-head">
		<div class="section-title">
			<span class="section-num">04</span>
			<h2>About</h2>
		</div>
		<span class="section-meta">/ABOUT.MD</span>
	</div>

	<div class="about-grid">
		<!-- Bio text -->
		<div class="about-text">
			<p class="about-intro">{about.intro}</p>
			{#each about.paragraphs as para}
				<p>{para}</p>
			{/each}
		</div>

		<!-- Sidebar -->
		<aside class="about-side">
			<!-- Stats -->
			<div class="about-card">
				<div class="card-head mono">STATS</div>
				{#each about.stats as stat}
					<div class="stat-row">
						<span class="mono muted">{stat.k}</span>
						<span>{stat.v}</span>
					</div>
				{/each}
			</div>

			<!-- Inventory (tools) -->
			<div class="about-card">
				<div class="card-head mono">INVENTORY</div>
				<div class="chip-cloud">
					{#each tools as tool}
						<span class="chip chip-muted">{tool}</span>
					{/each}
				</div>
			</div>
		</aside>
	</div>
</section>

<style>
	.about-grid {
		display: grid;
		grid-template-columns: 1.6fr 1fr;
		gap: 48px;
		align-items: start;
	}

	/* ── Bio text ────────────────────────────────────────────────────────── */
	.about-text p {
		color: var(--text-dim);
		line-height: 1.7;
		font-size: 16px;
		max-width: 60ch;
		margin: 0 0 18px;
	}

	.about-intro {
		font-size: 22px !important;
		line-height: 1.5 !important;
		color: var(--text) !important;
		margin: 0 0 24px !important;
		font-family: var(--font-display);
		letter-spacing: -0.01em;
	}

	/* ── Sidebar ─────────────────────────────────────────────────────────── */
	.about-side {
		display: flex;
		flex-direction: column;
		gap: 16px;
	}

	.about-card {
		border: 1px solid var(--border);
		border-radius: var(--r-md);
		background: var(--surface);
		padding: 18px;
	}

	.card-head {
		font-size: 11px;
		letter-spacing: 0.2em;
		color: var(--muted);
		text-transform: uppercase;
		margin-bottom: 14px;
	}

	.stat-row {
		display: flex;
		justify-content: space-between;
		gap: 12px;
		padding: 8px 0;
		font-size: 14px;
		border-bottom: 1px dashed var(--border-soft);
	}
	.stat-row:last-child { border-bottom: 0; }

	.chip-cloud {
		display: flex;
		flex-wrap: wrap;
		gap: 6px;
	}

	/* ── Responsive ──────────────────────────────────────────────────────── */
	@media (max-width: 760px) {
		.about-grid {
			grid-template-columns: 1fr;
			gap: 28px;
		}
	}
</style>
