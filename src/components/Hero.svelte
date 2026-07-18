<!--
  Hero — Main hero section at the top of the home page.

  Two layouts controlled by the tweaks panel:
    split   — two-column: text left, rotating avatar right
    stacked — single column, avatar hidden

  The visitor counter (DigitCounter) is the Firebase-backed flip-tile display.
  The "Projects shipped" stat is hardcoded — update it in src/lib/data.ts → PROJECTS.

  Props:
    heroLayout — 'split' | 'stacked'
-->
<script lang="ts">
	import KeyCap from '$components/KeyCap.svelte';
	import DigitCounter from '$components/DigitCounter.svelte';
	import Avatar from '$components/Avatar.svelte';
	import { PROJECTS } from '$lib/data';

	interface Props {
		heroLayout: 'split' | 'stacked';
	}

	let { heroLayout }: Props = $props();
</script>

<section class="hero" class:hero-stacked={heroLayout === 'stacked'}>
	<!-- Left: text content -->
	<div class="hero-left">
		<div class="eyebrow">
			<span class="eyebrow-dot" aria-hidden="true">◆</span>
			<span>Portfolio · v3.0 · 2026</span>
		</div>

		<h1 class="display">
			Designing for<br />
			<span class="accent-text">human behaviour.</span>
		</h1>

		<p class="lede">
			I'm <strong>Diam Kanbier</strong> — a digital designer and UX researcher
			working at the intersection of empathy, psychology, and play.
		</p>

		<!-- Stats row -->
		<div class="hero-stats">
			<div class="stat">
				<div class="stat-label mono">Welcome, visitor</div>
				<DigitCounter />
			</div>
			<div class="stat">
				<div class="stat-label mono">Projects shipped</div>
				<div class="stat-value mono">{String(PROJECTS.length).padStart(2, '0')}</div>
			</div>
			<div class="stat">
				<div class="stat-label mono">Discipline</div>
				<div class="stat-value mono">UX · MOTION · GRAPHIC</div>
			</div>
		</div>

		<!-- CTA buttons -->
		<div class="hero-actions">
			<a
				href="/#contact"
				class="btn btn-primary"
				onclick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
			>
				<span>Contact me</span>
				<svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
					<path d="M3 8 H13 M9 4 L13 8 L9 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
				</svg>
			</a>
			<button
				class="btn btn-ghost"
				onclick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
			>
				Browse projects
			</button>
			<span class="kbd-hint">
				<KeyCap kbd="↓" size="sm" />
				<KeyCap kbd="↑" size="sm" />
				<span class="muted">to navigate</span>
			</span>
		</div>
	</div>

	<!-- Right: rotating avatar (hidden in stacked layout) -->
	{#if heroLayout === 'split'}
		<div class="hero-right">
			<Avatar size={280} />
			<div class="avatar-tag">
				<span class="eyebrow-dot accent-text" aria-hidden="true">◆</span>
				<span class="mono">PLAYER_01</span>
			</div>
		</div>
	{/if}
</section>

<style>
	.hero {
		display: grid;
		grid-template-columns: 1.4fr 1fr;
		gap: 56px;
		align-items: center;
		padding: 84px 0 64px;
		border-bottom: 1px solid var(--border-soft);
	}

	.hero-stacked {
		grid-template-columns: 1fr;
		padding-top: 64px;
	}

	/* ── Eyebrow badge ───────────────────────────────────────────────────── */
	.eyebrow {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		padding: 6px 10px;
		border: 1px solid var(--border);
		background: var(--surface);
		border-radius: 999px;
		font-family: var(--font-mono);
		font-size: 11px;
		letter-spacing: 0.16em;
		color: var(--text-dim);
		text-transform: uppercase;
		margin-bottom: 28px;
	}
	.eyebrow-dot { color: var(--accent); font-size: 10px; }

	/* ── Typography ──────────────────────────────────────────────────────── */
	.display {
		font-family: var(--font-display);
		font-size: clamp(48px, 7vw, 96px);
		font-weight: 600;
		line-height: 0.98;
		letter-spacing: -0.035em;
		margin: 0 0 24px;
	}

	.lede {
		font-size: 19px;
		line-height: 1.55;
		color: var(--text-dim);
		max-width: 560px;
		margin: 0 0 36px;
	}
	.lede strong { color: var(--text); font-weight: 600; }

	/* ── Stats ───────────────────────────────────────────────────────────── */
	.hero-stats {
		display: flex;
		gap: 36px;
		flex-wrap: wrap;
		margin-bottom: 36px;
	}

	.stat-label {
		font-size: 11px;
		letter-spacing: 0.16em;
		color: var(--muted);
		text-transform: uppercase;
		margin-bottom: 10px;
	}

	.stat-value {
		font-size: 14px;
		letter-spacing: 0.1em;
		color: var(--text);
		padding-top: 8px;
	}

	/* ── Actions ─────────────────────────────────────────────────────────── */
	.hero-actions {
		display: flex;
		align-items: center;
		gap: 16px;
		flex-wrap: wrap;
	}

	.kbd-hint {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		font-size: 13px;
	}

	/* ── Right side ──────────────────────────────────────────────────────── */
	.hero-right {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 18px;
	}

	.avatar-tag {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		padding: 6px 12px;
		border: 1px solid var(--border);
		background: var(--surface);
		border-radius: 999px;
		font-size: 12px;
	}

	/* ── Responsive ──────────────────────────────────────────────────────── */
	@media (max-width: 760px) {
		.hero {
			grid-template-columns: 1fr;
			gap: 32px;
			padding: 56px 0 40px;
		}
		.hero-right { order: -1; }
	}
</style>
