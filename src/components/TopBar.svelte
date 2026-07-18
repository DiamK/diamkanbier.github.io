<!--
  TopBar — Sticky site navigation bar.

  Shows: brand mark, Work / About / Contact nav anchors, and a status pill
  with a pulsing live dot, "Open to work" label, and a Press-C call-to-action.

  Nav links scroll to home-page sections. When on a different page, the
  href (e.g. "/#work") navigates home and the browser scrolls automatically.

  Props:
    onOpenContact — called when the user clicks "Contact" or the C keycap CTA
-->
<script lang="ts">
	import KeyCap from '$components/KeyCap.svelte';

	interface Props {
		onOpenContact: () => void;
	}

	let { onOpenContact }: Props = $props();

	function scrollTo(id: string) {
		if (window.location.pathname === '/') {
			document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
		// Cross-page case is handled by the href attribute falling through
	}
</script>

<header class="topbar">
	<div class="topbar-inner app">
		<!-- Brand -->
		<a class="brand" href="/">
			<span class="brand-mark">◆</span>
			<span>diam.</span>
		</a>

		<!-- Nav -->
		<nav class="topnav" aria-label="Main navigation">
			<a href="/#work"    onclick={(e) => { e.preventDefault(); scrollTo('work'); }}>Work</a>
			<a href="/#about"   onclick={(e) => { e.preventDefault(); scrollTo('about'); }}>About</a>
			<a href="/#contact" onclick={(e) => { e.preventDefault(); scrollTo('contact'); }}>Contact</a>
		</nav>

		<!-- Status pill -->
		<button class="status-pill" onclick={onOpenContact} aria-label="Open contact">
			<span class="dot-live" aria-hidden="true"></span>
			<span>Open to work</span>
			<span class="divider" aria-hidden="true"></span>
			<span class="muted">Press</span>
			<KeyCap kbd="C" size="sm" />
			<span class="pill-cta muted">to get in contact with me</span>
		</button>
	</div>
</header>

<style>
	.topbar {
		position: sticky;
		top: 0;
		z-index: 50;
		backdrop-filter: blur(14px);
		background: color-mix(in oklab, var(--bg) 80%, transparent);
		border-bottom: 1px solid var(--border-soft);
	}

	.topbar-inner {
		display: grid;
		grid-template-columns: 1fr auto 1fr;
		align-items: center;
		gap: 24px;
		padding-top: 14px;
		padding-bottom: 14px;
	}

	/* ── Brand ────────────────────────────────────────────────────────────── */
	.brand {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		font-family: var(--font-display);
		font-weight: 700;
		font-size: 18px;
		letter-spacing: -0.02em;
		color: var(--text);
		text-decoration: none;
	}
	.brand-mark { color: var(--accent); transform: translateY(-1px); }

	/* ── Nav ──────────────────────────────────────────────────────────────── */
	.topnav {
		display: flex;
		gap: 28px;
		justify-content: center;
		font-size: 14px;
		color: var(--text-dim);
	}
	.topnav a {
		position: relative;
		padding: 6px 2px;
		transition: color 160ms;
		text-decoration: none;
		color: inherit;
	}
	.topnav a:hover { color: var(--text); }
	.topnav a:hover::after {
		content: '';
		position: absolute;
		left: 0;
		right: 0;
		bottom: -2px;
		height: 2px;
		background: var(--accent);
		border-radius: 2px;
	}

	/* ── Status pill ──────────────────────────────────────────────────────── */
	.status-pill {
		justify-self: end;
		display: inline-flex;
		align-items: center;
		gap: 10px;
		padding: 6px 14px 6px 12px;
		border: 1px solid var(--border);
		border-radius: 999px;
		background: var(--surface);
		font-size: 13px;
		cursor: pointer;
		color: var(--text);
		transition: border-color 160ms;
	}
	.status-pill:hover { border-color: var(--accent); }

	.dot-live {
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background: #5ce7a8;
		box-shadow: 0 0 0 4px color-mix(in oklab, #5ce7a8 22%, transparent);
		animation: pulse 1.6s ease-in-out infinite;
		flex-shrink: 0;
	}

	.divider {
		width: 1px;
		height: 14px;
		background: var(--border);
	}

	/* Hide the long "to get in contact" text on narrow viewports */
	.pill-cta {
		white-space: nowrap;
	}
	@media (max-width: 960px) {
		.pill-cta { display: none; }
	}

	/* Collapse nav on mobile */
	@media (max-width: 760px) {
		.topbar-inner {
			grid-template-columns: 1fr auto;
		}
		.topnav { display: none; }
	}
</style>
