<!--
  CommandHint — Fixed bottom-left keycap shortcut reminder.

  Shows the four most useful keyboard shortcuts as a pill in the corner.
  Hidden on small screens (viewport < 1100px wide or < 880px tall).

  Props:
    onOpenContact — called when the user clicks the C hint (optional shortcut)

  No logic lives here — this is a purely presentational component.
  Actual key handling is in +layout.svelte.
-->
<script lang="ts">
	import KeyCap from '$components/KeyCap.svelte';

	interface Props {
		onOpenContact?: () => void;
	}

	let { onOpenContact }: Props = $props();
</script>

<div class="cmd-hint" role="complementary" aria-label="Keyboard shortcuts">
	<KeyCap kbd="C" size="sm" />
	<span>contact</span>
	<span class="sep">·</span>
	<KeyCap kbd="W" size="sm" />
	<span>work</span>
	<span class="sep">·</span>
	<KeyCap kbd="A" size="sm" />
	<span>about</span>
	<span class="sep">·</span>
	<KeyCap kbd="?" size="sm" />
	<span>help</span>
</div>

<style>
	.cmd-hint {
		position: fixed;
		left: 24px;
		bottom: 24px;
		display: inline-flex;
		align-items: center;
		gap: 8px;
		padding: 8px 14px;
		border: 1px solid var(--border);
		background: color-mix(in oklab, var(--surface) 90%, transparent);
		backdrop-filter: blur(10px);
		border-radius: 999px;
		font-size: 12px;
		color: var(--text-dim);
		z-index: 40;
		font-family: var(--font-body);
	}

	.sep { color: var(--muted); }

	/* Hide on screens too small to be useful */
	@media (max-height: 880px), (max-width: 1100px) {
		.cmd-hint {
			display: none;
		}
	}
</style>
