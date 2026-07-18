<!--
  DigitCounter — Flip-tile visitor counter wired to Firebase Firestore.

  Calls updateVisitorCount() once on mount (increments the live counter),
  then animates the displayed number from (final - 25) up to the real value
  for a satisfying "tally rolling up" effect — 35ms per tick.

  Renders each digit as an individual dark tile to match the gamified design.
  This component is only mounted in Hero.svelte (home page), so Firebase is
  only called once per home-page load.
-->
<script lang="ts">
	import { onMount } from 'svelte';
	import { updateVisitorCount } from '$lib/firebase';

	// displayCount drives the rendered digits; starts at 0 until Firebase resolves
	let displayCount = $state(0);

	onMount(() => {
		// updateVisitorCount increments the Firestore counter and returns the new value
		updateVisitorCount().then((finalCount: number) => {
			let cur = Math.max(0, finalCount - 25);
			displayCount = cur;

			const id = setInterval(() => {
				cur += 1;
				displayCount = cur;
				if (cur >= finalCount) clearInterval(id);
			}, 35);
			// Interval clears itself when it reaches finalCount — no cleanup needed
		});
	});

	// Zero-pad to 4 digits and split so each digit renders as its own tile
	const digits = $derived(String(displayCount).padStart(4, '0').split(''));
</script>

<span class="digit-group" aria-label="Visitor count: {displayCount}">
	{#each digits as d, i (i)}
		<span class="digit-tile">{d}</span>
	{/each}
</span>

<style>
	.digit-group {
		display: inline-flex;
		gap: 4px;
	}

	.digit-tile {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 28px;
		height: 36px;
		background: #0a1018;
		border: 1px solid var(--border);
		border-radius: 6px;
		font-family: var(--font-mono);
		font-size: 22px;
		font-weight: 700;
		color: var(--text);
		box-shadow:
			inset 0 -1px 0 rgba(255, 255, 255, 0.04),
			0 1px 0 rgba(0, 0, 0, 0.4);
	}
</style>
