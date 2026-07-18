<!--
  ContactSection — "Let's connect" section with CTA and social links list.

  LEFT — Headline, body copy, email button, and keyboard shortcut hint.
  RIGHT — Socials list (LinkedIn, Email, Read.cv, Are.na).

  TO UPDATE CONTACT INFO: edit src/lib/data.ts → CONTACT

  Props:
    contact        — Contact object from src/lib/data.ts
    onOpenContact  — opens the ContactModal overlay (optional)
-->
<script lang="ts">
	import type { Contact } from '$lib/data';
	import KeyCap from '$components/KeyCap.svelte';

	interface Props {
		contact: Contact;
		onOpenContact?: () => void;
	}

	let { contact, onOpenContact }: Props = $props();
</script>

<section class="section contact" id="contact">
	<div class="section-head">
		<div class="section-title">
			<span class="section-num">05</span>
			<h2>Let's connect</h2>
		</div>
		<span class="section-meta">
			PRESS <KeyCap kbd="C" size="sm" />
		</span>
	</div>

	<div class="contact-grid">
		<!-- Lead text + CTA -->
		<div class="contact-lead">
			<h3 class="contact-headline">
				Got a problem worth solving?<br />
				<span class="accent-text">I'd love to hear about it.</span>
			</h3>
			<p>
				Available for freelance, contract, or full-time UX / digital design roles
				starting mid-2026.
			</p>
			<div class="contact-actions">
				<a class="btn btn-primary" href="mailto:{contact.email}">
					<span>{contact.email}</span>
					<svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
						<path d="M3 8 H13 M9 4 L13 8 L9 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
					</svg>
				</a>
				{#if onOpenContact}
					<span class="kbd-hint">
						<KeyCap kbd="C" size="sm" />
						<span class="muted">copy to clipboard</span>
					</span>
				{/if}
			</div>
		</div>

		<!-- Socials list -->
		<ul class="socials" aria-label="Social links">
			{#each contact.socials as s}
				<li>
					<a href={s.url} target={s.url.startsWith('http') ? '_blank' : undefined} rel="noopener">
						<span class="social-label">{s.label}</span>
						<span class="social-handle mono">{s.handle}</span>
						<svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
							<path d="M3 8 H13 M9 4 L13 8 L9 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
						</svg>
					</a>
				</li>
			{/each}
		</ul>
	</div>
</section>

<style>
	.contact-grid {
		display: grid;
		grid-template-columns: 1.3fr 1fr;
		gap: 48px;
		align-items: start;
	}

	/* ── Lead ────────────────────────────────────────────────────────────── */
	.contact-headline {
		font-family: var(--font-display);
		font-size: clamp(28px, 3.5vw, 44px);
		font-weight: 600;
		letter-spacing: -0.03em;
		margin: 0 0 16px;
		line-height: 1.1;
	}

	.contact-lead p {
		color: var(--text-dim);
		margin: 0 0 24px;
		line-height: 1.6;
	}

	.contact-actions {
		display: flex;
		align-items: center;
		gap: 16px;
		flex-wrap: wrap;
	}

	.kbd-hint {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		font-size: 13px;
	}

	/* ── Socials list ────────────────────────────────────────────────────── */
	.socials {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		border: 1px solid var(--border);
		border-radius: var(--r-md);
		background: var(--surface);
		overflow: hidden;
	}

	.socials li { border-bottom: 1px solid var(--border-soft); }
	.socials li:last-child { border-bottom: 0; }

	.socials a {
		display: grid;
		grid-template-columns: 1fr 1fr auto;
		align-items: center;
		gap: 16px;
		padding: 16px 18px;
		transition: background 160ms, color 160ms;
		text-decoration: none;
		color: var(--text);
	}
	.socials a:hover { background: var(--surface-2); color: var(--accent); }

	.social-label  { font-weight: 600; font-size: 15px; }
	.social-handle { font-size: 13px; color: var(--text-dim); }

	/* ── Responsive ──────────────────────────────────────────────────────── */
	@media (max-width: 760px) {
		.contact-grid { grid-template-columns: 1fr; gap: 28px; }
	}
</style>
