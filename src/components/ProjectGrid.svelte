<!--
  ProjectGrid — "All projects" section with density-aware grid layout.

  Grid columns change based on density:
    compact — 4 columns (2 on tablet, 1 on mobile)
    regular — 3 columns (2 on tablet, 1 on mobile)
    comfy   — 2 columns (1 on mobile)

  Props:
    projects — Project[] from src/lib/data.ts
    density  — 'compact' | 'regular' | 'comfy' (from tweaks)
-->
<script lang="ts">
	import type { Project } from '$lib/data';
	import ProjectTile from '$components/ProjectTile.svelte';

	interface Props {
		projects: Project[];
		density: 'compact' | 'regular' | 'comfy';
	}

	let { projects, density }: Props = $props();
</script>

<section class="section" id="work">
	<div class="section-head">
		<div class="section-title">
			<span class="section-num">02</span>
			<h2>All projects</h2>
		</div>
		<span class="section-meta">{projects.length} TILES · CLICK TO OPEN</span>
	</div>

	<div class="grid grid-{density}">
		{#each projects as project (project.slug)}
			<ProjectTile {project} {density} />
		{/each}
	</div>
</section>

<style>
	.grid {
		display: grid;
		gap: 18px;
	}
	.grid-regular { grid-template-columns: repeat(3, 1fr); }
	.grid-compact { grid-template-columns: repeat(4, 1fr); gap: 12px; }
	.grid-comfy   { grid-template-columns: repeat(2, 1fr); gap: 24px; }

	@media (max-width: 1100px) {
		.grid-regular { grid-template-columns: repeat(2, 1fr); }
		.grid-compact { grid-template-columns: repeat(2, 1fr); }
	}
	@media (max-width: 760px) {
		.grid-regular,
		.grid-compact,
		.grid-comfy { grid-template-columns: 1fr; }
	}
</style>
