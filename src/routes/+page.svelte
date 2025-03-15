<script lang="ts">
    import { onMount } from "svelte";
    import VisitorCounter from "$components/VisitorCounter.svelte";
    import ProjectTile from '$components/ProjectTile.svelte';
    import { base } from '$app/paths';

    let hoveredTile: string | null = null;

    // PROJECTS ARRAY
    const projects = [
        {
            title: "Girl in Blue",
            description: "Animation of a 2D character in a 3D world",
            category: "Animation",
            icon: `${base}/images/gib_thumbnail.png`,
            path: "girl-in-blue",
        },
        {
            title: "Employee Journey",
            description: "Redesign of the job application process at Financieelsysteem, improving UX through team-matching and a streamlined hiring flow",
            category: "UX Design",
            icon: `${base}/images/ej.png`,
            path: "employee-journey",
        },
        {
            title: "Recharge the World",
            description: "Marketing campaign to incentivise recycling batteries",
            category: "Graphic Design",
            icon: `${base}/images/rtw_thumbnail.png`,
            path: "recharge-the-world",
        },
        {
            title: "Edge of Night",
            description: "Kinetic typography animation of the song Edge of Night from The Lord of the Rings",
            category: "Animation",
            icon: `${base}/images/eon_thumbnail2.png`,
            path: "edge-of-night",
        },
        {
            title: "Finish the Jam",
            description: "Sing along until the traffic is gone!",
            category: "UX Design",
            icon: `${base}/images/ftj_thumbnail.png`,
            path: "finish-the-jam",
        },
        {
            title: "Puzzlewalk",
            description: "Designing an app to help the elderly with sPAV walk more",
            category: "UX Design",
            icon: `${base}/images/puzzle_thumbnail.jpg`,
            path: "puzzlewalk",
        },
        {
            title: "Fireball animation",
            description: "Learning fire and smoke animation in Blender",
            category: "Animation",
            icon: `${base}/images/fireball_thumbnail.png`,
            path: "fireball-animation",
        }
    ];

    // OVERLAY SCRIPT MET LOCALSTORAGE
    let showOverlay = true;

    function hideOverlay() {
        const leftDoor = document.querySelector('.door.left') as HTMLElement;
        const rightDoor = document.querySelector('.door.right') as HTMLElement;

        if (leftDoor && rightDoor) {
            leftDoor.style.transform = 'rotateY(-90deg)';
            rightDoor.style.transform = 'rotateY(90deg)';
        }

        setTimeout(() => {
            showOverlay = false;
            localStorage.setItem("hasSeenOverlay", "true"); // Opslaan in localStorage
        }, 1500);
    }

    // Check bij laden of de gebruiker de overlay al heeft gezien
    onMount(() => {
        if (localStorage.getItem("hasSeenOverlay") === "true") {
            showOverlay = false; // Niet meer tonen als het al gezien is
        }
    });
</script>

{#if showOverlay}
    <div class="overlay">
        <div class="doors">
            <div class="door left"></div>
            <div class="door right"></div>
        </div>
        <div class="overlay-text">
            <h1>Hi! I'm Diam</h1>
            <p>Welcome to my portfolio</p>
            <button class="enter-btn" on:click={hideOverlay}>Enter</button>
        </div>
    </div>
{/if}

<section class="max-w-12xl p-8 grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-12">
    <!-- Project Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {#each projects as project}
            <article 
                class="transition duration-300 ease-in-out transform min-h-[150px] flex flex-col"
                class:blur-[1px]={hoveredTile !== null && hoveredTile !== project.title}
                class:scale-105={hoveredTile === project.title}
                on:mouseenter={() => hoveredTile = project.title}
                on:mouseleave={() => hoveredTile = null}
            >
                <ProjectTile
                    title={project.title}
                    description={project.description}
                    category={project.category}
                    icon={project.icon}
                    path={project.path}
                />
            </article>
        {/each}
    </div>

    <!-- About Me -->
    <aside class="self-start w-[90%] lg:w-[80%]">
        <h2 class="text-[#FFB84D] text-xl font-bold">About Me</h2>
        <br>
        <p>I am a 28-year-old UX Designer who recently graduated from The Hague University of Applied Sciences.
            <br>
            <br>
            I have a strong passion for understanding human behavior and designing intuitive experiences that truly meet users' needs. My approach is highly user-centered, combining psychology and data-driven insights to create solutions that are both functional and engaging.
        </p>
    </aside>
</section>
