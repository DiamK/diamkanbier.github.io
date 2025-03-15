<script lang="ts">
  import { createEventDispatcher } from "svelte";

  export let title: string;
  export let description: string;
  export let category: string;
  export let icon: string;
  export let path: string;

  import { base } from '$app/paths';

  const dispatch = createEventDispatcher();

  function handleMouseEnter() {
      dispatch("hovered", title);
  }

  function handleMouseLeave() {
      dispatch("unhovered");
  }
</script>

<a 
    href={`${base}/projects/${path}`} 
    class="block h-full group"
    on:mouseenter={handleMouseEnter}
    on:mouseleave={handleMouseLeave}
>
<article class="project-tile flex items-center gap-4 p-4 bg-[#0E374E] rounded-xl shadow-md border border-gray-700 hover:shadow-lg transition duration-300 h-full">
        <!-- Icon with Category Tag -->
        <div class="flex flex-col items-center">
            <div class="relative w-16 h-16 rounded-lg bg-gray-800 overflow-hidden flex items-center justify-center">
                {#if icon}
                    <img src={icon} alt={title} class="w-full h-full object-cover" />
                {/if}
                <span class="absolute inset-0 bg-black opacity-20"></span> <!-- Image overlay -->
            </div>
            <span class="mt-2 text-xs text-white bg-gray-700 px-2 py-[2px] rounded-full whitespace-nowrap">{category}</span>
        </div>

        <!-- Title & Description (flex-grow fix) -->
        <div class="flex flex-col flex-grow h-full">
            <h3 class="text-lg font-semibold text-white group-hover:text-gray-200 transition mt-2">{title}</h3>
            <p class="text-gray-400 text-sm flex-grow mt-1" >{description}</p>
        </div>
    </article>
</a>

