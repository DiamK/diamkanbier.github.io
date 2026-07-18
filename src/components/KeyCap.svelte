<!--
  KeyCap — animated keyboard keycap that physically presses when the matching
  key is held on the keyboard.

  Props:
    kbd   — the key this cap represents, e.g. "C", "?", "ESC", "↑", "↓"
    size  — 'sm' (18px) | 'md' (22px, default) | 'lg' (28px)

  The keycap listens for keydown/keyup on window and animates accordingly.
  Special cases: "ESC" matches Escape, "↑"/"↓" match arrow keys, "?" matches
  Shift+/ as well as the literal ? key.
-->
<script lang="ts">
	import { onMount } from 'svelte';

	interface Props {
		kbd: string;
		size?: 'sm' | 'md' | 'lg';
	}

	let { kbd, size = 'md' }: Props = $props();

	let pressed = $state(false);

	// Dimension presets matching the design spec
	const dims = $derived(
		size === 'sm'
			? { px: 6, py: 1, fs: 11, h: 18 }
			: size === 'lg'
				? { px: 10, py: 4, fs: 14, h: 28 }
				: { px: 8, py: 2, fs: 12, h: 22 }
	);

	onMount(() => {
		const norm = (k: string) => (k || '').toLowerCase();

		function matches(e: KeyboardEvent): boolean {
			const target = norm(kbd);
			if (target === 'esc') return e.key === 'Escape';
			if (target === '↑') return e.key === 'ArrowUp';
			if (target === '↓') return e.key === 'ArrowDown';
			if (target === '?') return e.key === '?' || (e.key === '/' && e.shiftKey);
			return norm(e.key) === target;
		}

		const down = (e: KeyboardEvent) => { if (matches(e)) pressed = true; };
		const up   = (e: KeyboardEvent) => { if (matches(e)) pressed = false; };
		const blur = () => { pressed = false; };

		window.addEventListener('keydown', down);
		window.addEventListener('keyup', up);
		window.addEventListener('blur', blur);
		return () => {
			window.removeEventListener('keydown', down);
			window.removeEventListener('keyup', up);
			window.removeEventListener('blur', blur);
		};
	});
</script>

<span
	class="keycap"
	class:pressed
	style:min-width="{dims.h}px"
	style:height="{dims.h}px"
	style:padding="{dims.py}px {dims.px}px"
	style:font-size="{dims.fs}px"
>{kbd}</span>

<style>
	.keycap {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		border-radius: 6px;
		background: var(--surface-2);
		border: 1px solid var(--border);
		border-bottom-width: 2px;
		font-family: var(--font-mono);
		font-weight: 600;
		line-height: 1;
		color: var(--text);
		box-shadow: 0 1px 0 rgba(0, 0, 0, 0.3);
		transform: translateY(0);
		transition:
			transform 80ms ease-out,
			background 120ms,
			color 120ms,
			border-color 120ms,
			box-shadow 160ms;
		user-select: none;
	}

	.keycap.pressed {
		background: var(--accent);
		border-color: var(--accent);
		border-bottom-width: 1px;
		color: #0a1220;
		transform: translateY(1px);
		box-shadow:
			0 0 0 4px color-mix(in oklab, var(--accent) 28%, transparent),
			inset 0 1px 0 rgba(0, 0, 0, 0.08);
	}
</style>
