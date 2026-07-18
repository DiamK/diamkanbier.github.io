<!--
  TweaksPanel — Floating design-tweak panel. Drag it by the header bar.

  Reads and writes the shared tweaks singleton from $lib/tweaks.svelte.ts.
  The layout's $effect watches tweaks.palette and tweaks.rounded and applies
  the corresponding CSS custom properties to <html> so the page updates live.

  Controls:
    Palette       — 4 colour presets (accent + accent-2 + bg)
    Corners       — sharp / soft / pillow radius scale
    Grid density  — compact / regular / comfy tile layout
    Hero          — split (with avatar) / stacked (text only)
    Featured      — show/hide the featured project card

  HOW TO CUSTOMISE:
    • Add palette options in src/lib/tweaks.svelte.ts → PALETTE_OPTIONS
    • Change default values in the tweaks $state object in the same file
-->
<script lang="ts">
	import { tweaks, PALETTE_OPTIONS } from '$lib/tweaks.svelte';

	interface Props {
		open: boolean;
	}
	let { open }: Props = $props();

	// ── Drag ────────────────────────────────────────────────────────────────
	let panelEl = $state<HTMLDivElement | null>(null);
	// bottom offset is 72px so it sits above the toggle button
	let pos = $state({ right: 16, bottom: 72 });

	function startDrag(e: MouseEvent) {
		if (!panelEl) return;
		const rect = panelEl.getBoundingClientRect();
		const startRight  = window.innerWidth  - rect.right;
		const startBottom = window.innerHeight - rect.bottom;
		const startX = e.clientX;
		const startY = e.clientY;

		function onMove(ev: MouseEvent) {
			pos = {
				right:  Math.max(8, startRight  - (ev.clientX - startX)),
				bottom: Math.max(8, startBottom - (ev.clientY - startY))
			};
		}
		function onUp() {
			window.removeEventListener('mousemove', onMove);
			window.removeEventListener('mouseup', onUp);
		}
		window.addEventListener('mousemove', onMove);
		window.addEventListener('mouseup', onUp);
	}

	// ── Helpers ──────────────────────────────────────────────────────────────
	function palettesMatch(a: string[], b: string[]) {
		return JSON.stringify(a) === JSON.stringify(b);
	}
</script>

{#if open}
	<div
		class="panel"
		bind:this={panelEl}
		style:right="{pos.right}px"
		style:bottom="{pos.bottom}px"
		role="dialog"
		aria-label="Design tweaks"
	>
		<!-- Drag handle / header -->
		<div
			class="panel-header"
			role="presentation"
			onmousedown={startDrag}
		>
			<span class="panel-title">TWEAKS</span>
			<span class="panel-hint">drag to move</span>
		</div>

		<div class="panel-body">
			<!-- ── Theme ──────────────────────────────────────────────────── -->
			<div class="section-label">THEME</div>

			<!-- Palette picker -->
			<div class="row">
				<span class="row-label">Palette</span>
				<div class="chips">
					{#each PALETTE_OPTIONS as opt, i}
						{@const selected = palettesMatch(opt, tweaks.palette)}
						<button
							class="chip"
							class:chip-selected={selected}
							style:background={opt[0]}
							onclick={() => { tweaks.palette = opt; }}
							title="Accent: {opt[0]} · Secondary: {opt[1]} · Background: {opt[2]}"
							aria-label="Palette {i + 1}"
							aria-pressed={selected}
						>
							<!-- Secondary colour strip on the right -->
							<span class="chip-strip" style:background={opt[1]}></span>
							{#if selected}
								<svg class="chip-check" viewBox="0 0 14 14" aria-hidden="true">
									<path d="M3 7.2 5.8 10 11 4.2" fill="none" stroke-width="2.2"
										stroke-linecap="round" stroke-linejoin="round" stroke="white" />
								</svg>
							{/if}
						</button>
					{/each}
				</div>
			</div>

			<!-- Corner radius -->
			<div class="row">
				<span class="row-label">Corners</span>
				<div class="seg">
					{#each ['sharp', 'soft', 'pillow'] as opt}
						<button
							class="seg-btn"
							class:seg-active={tweaks.rounded === opt}
							onclick={() => { tweaks.rounded = opt as typeof tweaks.rounded; }}
						>{opt}</button>
					{/each}
				</div>
			</div>

			<!-- ── Layout ─────────────────────────────────────────────────── -->
			<div class="section-label">LAYOUT</div>

			<!-- Grid density -->
			<div class="row">
				<span class="row-label">Grid</span>
				<div class="seg">
					{#each ['compact', 'regular', 'comfy'] as opt}
						<button
							class="seg-btn"
							class:seg-active={tweaks.density === opt}
							onclick={() => { tweaks.density = opt as typeof tweaks.density; }}
						>{opt}</button>
					{/each}
				</div>
			</div>

			<!-- Hero layout -->
			<div class="row">
				<span class="row-label">Hero</span>
				<div class="seg">
					{#each ['split', 'stacked'] as opt}
						<button
							class="seg-btn"
							class:seg-active={tweaks.heroLayout === opt}
							onclick={() => { tweaks.heroLayout = opt as typeof tweaks.heroLayout; }}
						>{opt}</button>
					{/each}
				</div>
			</div>

			<!-- Featured project toggle -->
			<div class="row row-inline">
				<span class="row-label">Featured project</span>
				<button
					class="toggle"
					class:toggle-on={tweaks.featuredOn}
					onclick={() => { tweaks.featuredOn = !tweaks.featuredOn; }}
					role="switch"
					aria-checked={tweaks.featuredOn}
					aria-label="Toggle featured project"
				><i></i></button>
			</div>
		</div>
	</div>
{/if}

<style>
	.panel {
		position: fixed;
		z-index: 200;
		width: 252px;
		background: rgba(13, 22, 38, 0.92);
		backdrop-filter: blur(20px) saturate(140%);
		border: 1px solid var(--border);
		border-radius: var(--r-lg);
		box-shadow: 0 12px 40px rgba(0, 0, 0, 0.6);
		overflow: hidden;
		font-family: var(--font-mono);
		font-size: 11px;
		color: var(--text-dim);
	}

	/* ── Header ──────────────────────────────────────────────────────────── */
	.panel-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 10px 14px;
		cursor: move;
		user-select: none;
		border-bottom: 1px solid var(--border-soft);
		background: var(--bg-2);
	}
	.panel-title {
		font-size: 10px;
		letter-spacing: 0.18em;
		color: var(--muted);
		font-weight: 600;
	}
	.panel-hint {
		font-size: 9px;
		letter-spacing: 0.1em;
		color: var(--surface-3);
	}

	/* ── Body ────────────────────────────────────────────────────────────── */
	.panel-body {
		padding: 12px 14px;
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	.section-label {
		font-size: 9px;
		letter-spacing: 0.14em;
		color: var(--accent);
		font-weight: 600;
		padding-top: 2px;
	}

	.row {
		display: flex;
		flex-direction: column;
		gap: 5px;
	}
	.row-inline {
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}
	.row-label {
		font-size: 11px;
		color: var(--text-dim);
		font-weight: 500;
		letter-spacing: 0.01em;
	}

	/* ── Palette chips ───────────────────────────────────────────────────── */
	.chips {
		display: flex;
		gap: 6px;
	}
	.chip {
		position: relative;
		flex: 1;
		height: 36px;
		border: none;
		border-radius: 6px;
		cursor: pointer;
		overflow: hidden;
		box-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.25);
		transition: transform 100ms, box-shadow 100ms;
	}
	.chip:hover { transform: translateY(-1px); }
	.chip-selected { box-shadow: 0 0 0 2px var(--text); }
	.chip-strip {
		position: absolute;
		top: 0; right: 0; bottom: 0;
		width: 34%;
	}
	.chip-check {
		position: absolute;
		top: 5px; left: 5px;
		width: 12px; height: 12px;
	}

	/* ── Segmented control ───────────────────────────────────────────────── */
	.seg {
		display: flex;
		background: rgba(0, 0, 0, 0.25);
		border-radius: 6px;
		padding: 2px;
		gap: 1px;
	}
	.seg-btn {
		flex: 1;
		padding: 4px 4px;
		background: transparent;
		border: none;
		border-radius: 5px;
		color: var(--muted);
		font-family: var(--font-mono);
		font-size: 10px;
		letter-spacing: 0.04em;
		cursor: pointer;
		transition: background 120ms, color 120ms;
	}
	.seg-btn:hover { color: var(--text-dim); }
	.seg-btn.seg-active {
		background: var(--surface-2);
		color: var(--text);
		box-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);
	}

	/* ── Toggle ──────────────────────────────────────────────────────────── */
	.toggle {
		position: relative;
		width: 32px;
		height: 18px;
		border: none;
		border-radius: 999px;
		background: var(--surface-3);
		padding: 0;
		cursor: pointer;
		transition: background 160ms;
		flex-shrink: 0;
	}
	.toggle.toggle-on { background: var(--accent); }
	.toggle i {
		position: absolute;
		top: 2px;
		left: 2px;
		width: 14px;
		height: 14px;
		border-radius: 50%;
		background: white;
		box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
		transition: transform 160ms;
		font-style: normal;
		pointer-events: none;
	}
	.toggle.toggle-on i { transform: translateX(14px); }
</style>
