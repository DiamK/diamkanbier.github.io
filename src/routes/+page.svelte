<script lang="ts">
	import { tweaks } from '$lib/tweaks.svelte';
	import { PROJECTS, NOW, ABOUT, CONTACT } from '$lib/data';

	import Hero from '$components/Hero.svelte';
	import FeaturedCard from '$components/FeaturedCard.svelte';
	import ProjectGrid from '$components/ProjectGrid.svelte';
	import NowSection from '$components/NowSection.svelte';
	import AboutSection from '$components/AboutSection.svelte';
	import ContactSection from '$components/ContactSection.svelte';

	// The featured project is always "employee-journey" (first in the list).
	// All others appear in the grid below it.
	const featuredSlug = 'employee-journey';
	const featured     = $derived(PROJECTS.find((p) => p.slug === featuredSlug)!);
	const gridProjects = $derived(
		tweaks.featuredOn
			? PROJECTS.filter((p) => p.slug !== featuredSlug)
			: PROJECTS
	);
</script>

<div class="app">
	<!-- 01 — Hero -->
	<Hero heroLayout={tweaks.heroLayout} />

	<!-- 01b — Featured project (toggled via tweaks panel) -->
	{#if tweaks.featuredOn && featured}
		<section class="section" id="featured">
			<div class="section-head">
				<div class="section-title">
					<span class="section-num">01</span>
					<h2>Selected work</h2>
				</div>
				<span class="section-meta">CASE STUDY</span>
			</div>
			<FeaturedCard project={featured} />
		</section>
	{/if}

	<!-- 02 — All projects grid -->
	<ProjectGrid projects={gridProjects} density={tweaks.density} />

	<!-- 03 — Currently / Now -->
	<NowSection items={NOW} />

	<!-- 04 — About -->
	<AboutSection about={ABOUT} />

	<!-- 05 — Contact -->
	<ContactSection contact={CONTACT} />

	<!-- Footer -->
	<footer class="foot">
		<span class="mono">© 2026 DIAM KANBIER</span>
		<span class="muted mono">DESIGNED IN HTML · MADE WITH CARE</span>
		<span class="mono">v3.0</span>
	</footer>
</div>
