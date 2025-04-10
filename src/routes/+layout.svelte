<script lang="ts">
    import VisitorCounter from '$components/VisitorCounter.svelte';
    import { onMount } from 'svelte';
    import '../app.css';
    import { base } from '$app/paths';

    let { children } = $props();
    let showEmail = $state(false);
    let isPressed = $state(false); // Changed to use $state for reactivity
    let email = "diam96@gmail.com"; 

    function triggerContact() {
        isPressed = true;
        showEmail = true;
        setTimeout(() => {
            isPressed = false;
        }, 150);
    }

    function handleKeydown(event: KeyboardEvent) {
        if (event.key.toLowerCase() === "c") {
            triggerContact();
        }
    }

    onMount(() => {
        window.addEventListener("keydown", handleKeydown);
        return () => window.removeEventListener("keydown", handleKeydown);
    });
</script>

<header class="bg-gradient-to-r from-[#0E374E] via-[#174B67] to-[#0E374E] text-white p-6">
    <div class="flex flex-col md:flex-row justify-between items-center ml-10">
        
        <!-- Left Side: Avatar + Name + Visitor Counter -->
        <div class="flex items-center space-x-4">
            <img src="{base}/images/avatar.svg" alt="Diam's Avatar" class="avatar"/>
            <div class="ml-20">
                <h1 class="text-4xl font-bold">Diam Kanbier</h1>
                <p class="text-lg ml-0.5">UX Designer</p>
                <div class="flex items-center mt-12">
                    <span class="mr-2">Welcome, visitor</span>
                    <VisitorCounter />
                </div>
            </div>
        </div>

        <!-- Right Side: Open to Work + Contact Interaction -->
        <div class="flex flex-col items-start mr-40">
            <p class="text-[#FFB84D] text-xl font-semibold uppercase tracking-wide">
                Currently Open to Work
            </p>
            <p class="mt-2 text-gray-300 text-xl cursor-pointer transition-opacity duration-500" class:hidden={showEmail}>
                Press 
                <button 
                    type="button" 
                    onclick={triggerContact} 
                    class="inline-block p-0 border-none bg-transparent"
                    aria-label="Get in contact">
                    <img
                        src="/images/c-button.png"
                        alt="C Button"
                        class="c-button brightness-0  {isPressed ? 'pressed' : ''}"
                    />
                </button>
                to get in contact with me
            </p>
            <p class="mt-2 text-gray-200 text-xl font-semibold transition-opacity duration-500" class:hidden={!showEmail}>
                {email}
            </p>
            <div class="socials">
                <a href="https://www.linkedin.com/in/diam-kanbier">
                    <img src="{base}/images/linkedin.svg" alt="LinkedIn logo" class="linkedin">
                </a>
            </div>
        </div>
    </div>
</header>

<main class="p-6">
    {@render children()}
</main>
