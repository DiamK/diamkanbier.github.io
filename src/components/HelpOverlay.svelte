<!--
  HelpOverlay — Keyboard shortcuts reference modal.

  Opens when the user presses ? (Shift+/).
  Lists all available keyboard shortcuts.

  Props:
    open     — whether the overlay is visible
    onClose  — callback to dismiss it

  TO ADD A SHORTCUT: add an entry to the `items` array below,
  then wire up the actual behaviour in +layout.svelte.
-->
<script lang="ts">
	import KeyCap from '$components/KeyCap.svelte';

	interface Props {
		open: boolean;
		onClose: () => void;
	}

	let { open, onClose }: Props = $props();

	const shortcuts = [
		{ kbd: 'C',   label: 'Open contact' },
		{ kbd: 'W',   label: 'Jump to work' },
		{ kbd: 'A',   label: 'Jump to about' },
		{ kbd: 'H',   label: 'Go home' },
		{ kbd: 'T',   label: 'Toggle tweaks panel' },
		{ kbd: 'ESC', label: 'Close overlay' },
		{ kbd: '?',   label: 'Toggle this menu' }
	];

	$effect(() => {
		if (!open) return;
		const onEsc = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
		window.addEventListener('keydown', onEsc);
		return () => window.removeEventListener('keydown', onEsc);
	});
</script>

{#if open}
	<div class="modal-veil" role="presentation" onclick={onClose}>
		<div class="modal" onclick={(e) => e.stopPropagation()} onkeydown={(e) => e.stopPropagation()} role="dialog" aria-modal="true" aria-label="Keyboard shortcuts" tabindex="-1">
			<div class="modal-head">
				<span>SHORTCUTS</span>
				<button class="modal-close mono" onclick={onClose}>ESC</button>
			</div>
			<div class="modal-body">
				<ul class="kbd-list">
					{#each shortcuts as { kbd, label }}
						<li>
							<KeyCap {kbd} size="sm" />
							<span>{label}</span>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
{/if}

<style>
	.kbd-list {
		list-style: none;
		padding: 0;
		margin: 0;
		display: grid;
		gap: 12px;
	}
	.kbd-list li {
		display: flex;
		align-items: center;
		gap: 14px;
		font-size: 14px;
		color: var(--text-dim);
	}
</style>
