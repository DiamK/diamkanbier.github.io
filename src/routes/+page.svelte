<script lang="ts">
    import ProjectTile from '$components/ProjectTile.svelte';
    import { base } from '$app/paths';

    let hoveredTile: string | null = null;

    // PROJECTS ARRAY
    const projects = [
        {
            title: "Girl in Blue",
            description: "Animation of a 2D character in a 3D world",
            category: "Animation",
            year: 2023,
            icon: `${base}/images/gib_thumbnail.png`,
            path: "girl-in-blue",
        },
        {
            title: "Employee Journey",
            description: "Redesign of the job application process at Financieelsysteem, improving UX through team-matching and a streamlined hiring flow",
            category: "UX Design",
            year: 2024,
            icon: `${base}/images/ej.png`,
            path: "employee-journey",
        },
        {
            title: "Recharge the World",
            description: "Marketing campaign to incentivise recycling batteries",
            category: "Graphic Design",
            year: 2022,
            icon: `${base}/images/rtw_thumbnail.png`,
            path: "recharge-the-world",
        },
        {
            title: "Edge of Night",
            description: "Kinetic typography animation of the song Edge of Night from The Lord of the Rings",
            category: "Animation",
            year: 2022,
            icon: `${base}/images/eon_thumbnail2.png`,
            path: "edge-of-night",
        },
        {
            title: "Finish the Jam",
            description: "Sing along until the traffic is gone!",
            category: "UX Design",
            year: 2023,
            icon: `${base}/images/ftj_thumbnail.png`,
            path: "finish-the-jam",
        },
        {
            title: "Puzzlewalk",
            description: "Designing an app to help the elderly with sPAV walk more",
            category: "UX Design",
            year: 2024,
            icon: `${base}/images/puzzle_thumbnail.jpg`,
            path: "puzzlewalk",
        },
        {
            title: "Fireball animation",
            description: "Learning fire and smoke animation in Blender",
            category: "Animation",
            year: 2023,
            icon: `${base}/images/fireball_thumbnail.png`,
            path: "fireball-animation",
        }
    ];

    // Group past work by discipline, in a fixed display order.
    const DISCIPLINE_ORDER = ["UX Design", "Animation", "Graphic Design"];
    const groupedProjects = DISCIPLINE_ORDER
        .map((name) => ({ name, items: projects.filter((p) => p.category === name) }))
        .filter((group) => group.items.length > 0);
</script>

<section class="max-w-12xl p-8 grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-12">
    <!-- Left column: New Case Study (top) → Past Work (below) -->
    <div class="flex flex-col gap-16">

        <!-- Currently Working On — featured project (HealthVault) -->
        <div>
            <h2 class="text-[#FFB84D] text-xl font-bold mb-4">Side Project</h2>

            <a
                href="https://legalhealth.nl/"
                target="_blank"
                rel="noopener noreferrer"
                class="group flex flex-col sm:flex-row gap-6 p-6 rounded-xl bg-[#0E374E] border border-[#FFB84D]/40 shadow-md hover:border-[#FFB84D] hover:shadow-[0_6px_20px_rgba(255,184,77,0.25)] hover:-translate-y-0.5 transition duration-300"
            >
                <!-- Thumbnail (placeholder until a real image is added) -->
                <div class="relative w-full sm:w-40 h-32 sm:h-auto shrink-0 rounded-lg overflow-hidden bg-gradient-to-br from-[#174B67] to-[#031A27] flex items-center justify-center">
                    <span class="text-3xl font-extrabold text-[#FFB84D]/80 tracking-tight">HV</span>
                </div>

                <!-- Content -->
                <div class="flex flex-col">
                    <div class="flex flex-wrap items-center gap-2 mb-2">
                        <span class="text-xs text-white bg-gray-700 px-2 py-[2px] rounded-full">Full-stack · UX &amp; Development</span>
                        <span class="text-xs font-semibold text-[#0E374E] bg-[#FFB84D] px-2 py-[2px] rounded-full">In progress</span>
                    </div>
                    <h3 class="text-2xl font-bold text-white group-hover:text-gray-200 transition">HealthVault</h3>
                    <p class="text-gray-300 text-sm mt-2 flex-grow">
                        HealthVault puts injury claim clients back in control of their own medical data. I work on both the UX and the front-end, designing how sensitive medical evidence flows from client to lawyer to insurer without oversharing.
                    </p>
                    <span class="mt-3 text-sm font-semibold text-[#FFB84D] group-hover:translate-x-0.5 transition">View presentation →</span>
                </div>
            </a>
        </div>

        <!-- Past Work — grouped by discipline -->
        <div>
            <h2 class="text-[#FFB84D] text-xl font-bold mb-6">Past Work</h2>

            {#each groupedProjects as group}
                <h3 class="text-[#FFB84D]/80 text-sm font-semibold uppercase tracking-wide mt-8 mb-3">
                    {group.name}
                </h3>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {#each group.items as project}
                        <article
                            class="transition duration-300 ease-in-out transform min-h-[150px] flex flex-col"
                            class:opacity-60={hoveredTile !== null && hoveredTile !== project.title}
                            class:scale-105={hoveredTile === project.title}
                            on:mouseenter={() => hoveredTile = project.title}
                            on:mouseleave={() => hoveredTile = null}
                        >
                            <ProjectTile
                                title={project.title}
                                description={project.description}
                                icon={project.icon}
                                path={project.path}
                            />
                        </article>
                    {/each}
                </div>
            {/each}
        </div>

    </div>

    <!-- About Me -->
    <aside class="self-start w-[90%] lg:w-[90%]">
        <h2 class="text-[#FFB84D] text-xl font-bold">About Me</h2>
        <br>
        <p>I'm an analytical and empathic UX Designer with a bachelor's in Communication & Multimedia Design and a solid foundation in IT. What drives me is curiosity about human behaviour. Why do people do what they do? What do they experience? What do they need?
            <br>
            <br>
            To me, good design starts with empathy. That means seeing people not just as 'users,' but as real human beings with genuine motivations, emotions, and behaviour. 
            <br>
            <br>
            Gaming has been part of my life for as long as I can remember, and it shapes a lot of how I think about design. Every interaction, every friction point, dictates how I feel about a digital experience and that carries into how I approach UX.
            <br>
            <br>
            Outside of work I explore animation, game design, and psychology, usually as different ways of understanding the same thing: how people perceive and interact with the world around them.
        </p>
    </aside>
</section>
