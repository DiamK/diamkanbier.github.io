<!--
  Avatar — rotating ring text SVG + circular portrait area.

  Props:
    size       — diameter in px (default 220)
    ringText   — text repeated around the spinning ring

  Photo: static/images/avatar.svg — swap src to any image file to change it.
-->
<script lang="ts">
	import { base } from '$app/paths';

	interface Props {
		size?: number;
		ringText?: string;
	}

	let {
		size = 220,
		ringText = 'DIGITAL DESIGNER · UX RESEARCHER · '
	}: Props = $props();

	const r = $derived(size / 2);
	const ringR = $derived(r - 8);
	// Repeat the text twice so it wraps the full circle without gaps
	const fullRingText = $derived((ringText + ringText).slice(0, 80));
</script>

<div class="avatar-wrap" style:width="{size}px" style:height="{size}px">
	<!-- Rotating ring text -->
	<svg
		class="ring-svg"
		width={size}
		height={size}
		viewBox="0 0 {size} {size}"
		aria-hidden="true"
	>
		<defs>
			<path
				id="ringPath"
				d="M {r},{r} m -{ringR},0 a {ringR},{ringR} 0 1,1 {2 * ringR},0 a {ringR},{ringR} 0 1,1 -{2 * ringR},0"
			/>
		</defs>
		<text
			font-family="'JetBrains Mono', ui-monospace, monospace"
			font-size="11"
			letter-spacing="2.4"
			fill="var(--muted)"
			font-weight="600"
		>
			<textPath href="#ringPath" startOffset="0">{fullRingText}</textPath>
		</text>
	</svg>

	<!-- Portrait circle -->
	<div class="portrait">
		<img src="{base}/images/avatar.svg" alt="Diam Kanbier" class="avatar-img" />
	</div>
</div>

<style>
	.avatar-wrap {
		position: relative;
		flex-shrink: 0;
	}

	.ring-svg {
		position: absolute;
		inset: 0;
		animation: spinSlow 30s linear infinite;
	}

	.portrait {
		position: absolute;
		inset: 18px;
		border-radius: 50%;
		background: linear-gradient(160deg, var(--surface-2), var(--surface));
		border: 1px solid var(--border);
		overflow: hidden;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.avatar-img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	/* spinSlow is defined globally in app.css */
</style>
