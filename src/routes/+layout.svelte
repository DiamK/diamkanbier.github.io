<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import '../app.css';

	import TopBar from '$components/TopBar.svelte';
	import TweaksPanel from '$components/TweaksPanel.svelte';
	import ContactModal from '$components/ContactModal.svelte';
	import HelpOverlay from '$components/HelpOverlay.svelte';
	import CommandHint from '$components/CommandHint.svelte';

	import { tweaks } from '$lib/tweaks.svelte';
	import { CONTACT } from '$lib/data';

	// ── Radius preset map ────────────────────────────────────────────────────
	const RADIUS_MAP = {
		sharp:  { sm: '2px',  md: '4px',  lg: '6px'  },
		soft:   { sm: '6px',  md: '10px', lg: '16px' },
		pillow: { sm: '10px', md: '16px', lg: '24px' }
	} as const;

	// ── Apply palette CSS vars whenever tweaks.palette changes ───────────────
	$effect(() => {
		const [accent, accent2, bg] = tweaks.palette;
		const root = document.documentElement;
		root.style.setProperty('--accent', accent);
		root.style.setProperty('--accent-2', accent2);
		root.style.setProperty('--bg', bg);
	});

	// ── Apply radius CSS vars whenever tweaks.rounded changes ────────────────
	$effect(() => {
		const r = RADIUS_MAP[tweaks.rounded] ?? RADIUS_MAP.soft;
		const root = document.documentElement;
		root.style.setProperty('--r-sm', r.sm);
		root.style.setProperty('--r-md', r.md);
		root.style.setProperty('--r-lg', r.lg);
	});

	// ── Overlay state ────────────────────────────────────────────────────────
	let contactOpen   = $state(false);
	let helpOpen      = $state(false);
	let tweaksPanelOpen = $state(false);

	// ── Helper: scroll to a section if on home, or navigate there ────────────
	function scrollToSection(id: string) {
		if (window.location.pathname === '/') {
			document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
		} else {
			goto(`/#${id}`);
		}
	}

	// ── Global keyboard shortcuts ─────────────────────────────────────────────
	// C → contact modal    W → jump to Work    A → jump to About
	// H → go home          T → tweaks panel    ? → help overlay
	// ESC → close overlays
	onMount(() => {
		function handleKey(e: KeyboardEvent) {
			// Don't fire inside text inputs
			const tag = (e.target as HTMLElement)?.tagName?.toLowerCase();
			if (tag === 'input' || tag === 'textarea' || tag === 'select') return;
			if (e.metaKey || e.ctrlKey || e.altKey) return;

			const k = e.key.toLowerCase();

			if (k === 'c') {
				contactOpen = !contactOpen;
				helpOpen = false;
				e.preventDefault();
			} else if (k === '?' || (e.key === '/' && e.shiftKey)) {
				helpOpen = !helpOpen;
				contactOpen = false;
				e.preventDefault();
			} else if (k === 'w') {
				scrollToSection('work');
			} else if (k === 'a') {
				scrollToSection('about');
			} else if (k === 'h') {
				goto('/');
			} else if (k === 't') {
				tweaksPanelOpen = !tweaksPanelOpen;
				e.preventDefault();
			} else if (k === 'escape') {
				contactOpen = false;
				helpOpen = false;
			}
		}

		window.addEventListener('keydown', handleKey);
		return () => window.removeEventListener('keydown', handleKey);
	});

	let { children } = $props();
</script>

<TopBar onOpenContact={() => { contactOpen = true; }} />

<main>
	{@render children()}
</main>

<!-- ── Floating / overlay shells ──────────────────────────────────────────── -->

<!-- Tweaks toggle button (bottom-right corner) -->
<button
	class="tweaks-toggle"
	class:tweaks-toggle-active={tweaksPanelOpen}
	onclick={() => { tweaksPanelOpen = !tweaksPanelOpen; }}
	title="Toggle tweaks panel (T)"
	aria-label="Toggle tweaks panel"
>
	<!-- Gear icon -->
	<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
		<circle cx="12" cy="12" r="3"/>
		<path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
	</svg>
</button>

<TweaksPanel open={tweaksPanelOpen} />

<ContactModal
	open={contactOpen}
	onClose={() => { contactOpen = false; }}
	contact={CONTACT}
/>

<HelpOverlay
	open={helpOpen}
	onClose={() => { helpOpen = false; }}
/>

<CommandHint onOpenContact={() => { contactOpen = true; }} />

<style>
	/* ── Tweaks toggle button ─────────────────────────────────────────────── */
	.tweaks-toggle {
		position: fixed;
		right: 16px;
		bottom: 16px;
		z-index: 199;
		width: 40px;
		height: 40px;
		border-radius: 50%;
		border: 1px solid var(--border);
		background: var(--surface);
		color: var(--muted);
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		transition: border-color 160ms, color 160ms, background 160ms;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
	}
	.tweaks-toggle:hover {
		border-color: var(--accent);
		color: var(--accent);
	}
	.tweaks-toggle.tweaks-toggle-active {
		background: var(--accent);
		border-color: var(--accent);
		color: #0a1220;
	}
</style>
