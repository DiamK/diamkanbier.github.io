<!--
  NowSection — "Currently" section showing 4 snapshot cards.

  Each card shows what you're reading, playing, learning, and listening to.
  Edit the data in src/lib/data.ts → NOW array.

  Props:
    items — NowItem[] from src/lib/data.ts
-->
<script lang="ts">
	import type { NowItem } from '$lib/data';

	interface Props {
		items: NowItem[];
	}

	let { items }: Props = $props();
</script>

<section class="section" id="now">
	<div class="section-head">
		<div class="section-title">
			<span class="section-num">03</span>
			<h2>Currently</h2>
		</div>
		<span class="section-meta">UPDATED · MAY 2026</span>
	</div>

	<div class="now-grid">
		{#each items as item}
			<div class="now-card">
				<div class="now-key mono">{item.title.toUpperCase()}</div>
				<div class="now-val">{item.value}</div>
			</div>
		{/each}
	</div>
</section>

<style>
	.now-grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 14px;
	}

	.now-card {
		padding: 18px;
		border: 1px solid var(--border);
		border-radius: var(--r-md);
		background: var(--surface);
		display: flex;
		flex-direction: column;
		gap: 10px;
		transition: border-color 160ms, background 160ms;
	}
	.now-card:hover {
		border-color: color-mix(in oklab, var(--accent) 50%, var(--border));
		background: var(--surface-2);
	}

	.now-key {
		font-size: 11px;
		letter-spacing: 0.18em;
		color: var(--accent-2);
		text-transform: uppercase;
	}

	.now-val {
		font-size: 15px;
		color: var(--text);
		line-height: 1.4;
	}

	@media (max-width: 1100px) {
		.now-grid { grid-template-columns: repeat(2, 1fr); }
	}
	@media (max-width: 760px) {
		.now-grid { grid-template-columns: 1fr; }
	}
</style>
