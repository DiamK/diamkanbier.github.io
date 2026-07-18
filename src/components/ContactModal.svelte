<!--
  ContactModal — "Let's talk" overlay modal.

  Opens when the user presses C or clicks the contact CTA.
  Shows the email address with a one-click copy button, plus social links.

  Props:
    open     — whether the modal is visible
    onClose  — callback to dismiss the modal
    contact  — contact data from src/lib/data.ts
-->
<script lang="ts">
	import type { Contact } from '$lib/data';

	interface Props {
		open: boolean;
		onClose: () => void;
		contact: Contact;
	}

	let { open, onClose, contact }: Props = $props();

	let copied = $state(false);

	// Close on Escape key
	$effect(() => {
		if (!open) return;
		const onEsc = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
		window.addEventListener('keydown', onEsc);
		return () => window.removeEventListener('keydown', onEsc);
	});

	async function copyEmail() {
		try {
			await navigator.clipboard.writeText(contact.email);
		} catch {
			// Clipboard API unavailable — still show "copied" UI feedback
		}
		copied = true;
		setTimeout(() => { copied = false; }, 1800);
	}
</script>

{#if open}
	<!-- Veil — click outside to dismiss -->
	<div class="modal-veil" role="presentation" onclick={onClose}>
		<div class="modal" onclick={(e) => e.stopPropagation()} onkeydown={(e) => e.stopPropagation()} role="dialog" aria-modal="true" aria-label="Contact" tabindex="-1">
			<div class="modal-head">
				<span>CONTACT.EXE</span>
				<button class="modal-close mono" onclick={onClose}>ESC</button>
			</div>
			<div class="modal-body">
				<h3>Let's talk.</h3>
				<p>Drop me a line — I read every message.</p>

				<!-- Email copy row -->
				<button class="copy-row" onclick={copyEmail} aria-label="Copy email address">
					<span class="mono">{contact.email}</span>
					<span class="copy-action mono">{copied ? 'COPIED ✓' : 'COPY'}</span>
				</button>

				<!-- Social links -->
				<ul class="social-list">
					{#each contact.socials as s}
						<li>
							<span class="social-name">{s.label}</span>
							<a href={s.url} target="_blank" rel="noopener" class="mono muted">{s.handle}</a>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
{/if}

<style>
	/* .modal-veil and .modal base styles are in app.css */

	.copy-row {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 14px 16px;
		border: 1px dashed var(--border);
		border-radius: var(--r-md);
		background: var(--bg-2);
		cursor: pointer;
		margin-bottom: 16px;
		transition: border-color 160ms;
		width: 100%;
		text-align: left;
		color: var(--text);
	}
	.copy-row:hover { border-color: var(--accent); }

	.copy-action {
		font-family: var(--font-mono);
		font-size: 11px;
		letter-spacing: 0.18em;
		color: var(--accent);
		flex-shrink: 0;
	}

	.social-list {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
	}
	.social-list li {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 12px 0;
		border-bottom: 1px dashed var(--border-soft);
		font-size: 14px;
		gap: 12px;
	}
	.social-list li:last-child { border-bottom: 0; }

	.social-name { font-weight: 600; }
</style>
