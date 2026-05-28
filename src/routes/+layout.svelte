<script lang="ts">
    import VisitorCounter from '$components/VisitorCounter.svelte';
    import { onMount } from 'svelte';
    import '../app.css';
    import { base } from '$app/paths';
  
    let { children } = $props();
  
    // Reactive state
    let showEmail = $state(false);
    let isPressed = $state(false);
    const email = "diam96@gmail.com";
  
    function triggerContact() {
      isPressed = true;
      showEmail = true;
      setTimeout(() => (isPressed = false), 150);
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
    <div class="flex flex-col md:flex-row justify-between items-center ml-10 md:ml-10">
      
      <!-- Left Side: Avatar + Name + Visitor Counter -->
      <div class="flex items-center space-x-4">
        <img src="{base}/images/avatar.svg" alt="Diam's Avatar" class="avatar"/>
        <div class="ml-20 md:ml-20">
          <h1 class="text-4xl font-bold">Diam Kanbier</h1>
          <p class="text-lg ml-0.5">UX Designer</p>
          <div class="flex items-center mt-12">
            <span class="mr-2">Welcome, visitor</span>
            <VisitorCounter />
          </div>
        </div>
      </div>
  
      <!-- Right Side: Open to Work + Contact Interaction -->
      <div class="flex flex-col items-start mr-[9rem] md:mr-[9rem]">
        <p class="text-[#FFB84D] text-xl font-semibold uppercase tracking-wide">
          Currently Open to Work
        </p>
  
        <!-- DESKTOP ONLY: “Press C” -->
        <p
          class="press-c hidden sm:block mt-2 text-gray-300 text-xl cursor-pointer transition-opacity duration-500"
          class:opacity-0={showEmail}
          class:pointer-events-none={showEmail}
        >
          Press
          <button
            type="button"
            onclick={triggerContact}
            class="inline-block p-0 border-none bg-transparent"
            aria-label="Get in contact"
          >
            <img
              src="{base}/images/c-button.png"
              alt="C Button"
              class="c-button"
              class:pressed={isPressed}
            />
          </button>
          to get in contact with me
        </p>
  
        <!-- MOBILE ONLY: tappable button -->
        <button
          class="mobile-only block sm:hidden mt-4 bg-[#FFB84D] text-[#0E374E] font-semibold py-2 px-4 rounded transition-opacity duration-500"
          onclick={triggerContact}
          class:opacity-0={showEmail}
          class:pointer-events-none={showEmail}
        >
          Show contact info
        </button>
  
        <!-- E‑mail + LinkedIn, fades in when showEmail -->
        <div
          class="flex items-center space-x-4 mt-4 transition-opacity duration-500"
          class:opacity-100={showEmail}
          class:opacity-0={!showEmail}
          class:pointer-events-none={!showEmail}
        >
          <p class="text-gray-200 text-xl font-semibold">{email}</p>
          <a href="https://www.linkedin.com/in/diam-kanbier" target="_blank" rel="noopener">
            <img src="{base}/images/linkedin.svg" alt="LinkedIn logo" class="linkedin w-8 h-8" />
          </a>
        </div>
      </div>
    </div>
  </header>
  
  <main class="p-6">
    {@render children()}
  </main>
  