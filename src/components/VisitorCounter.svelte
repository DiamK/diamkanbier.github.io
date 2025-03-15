<script>
    import { onMount } from "svelte";
    import { updateVisitorCount } from "$lib/firebase";
  
    let count = 0;
  
    onMount(async () => {
      count = await updateVisitorCount();
    });
  </script>
  
  <div class="flex items-center justify-center text-4xl font-mono">
    <div class="flex">
      {#each count.toString().split("") as digit}
        <div class="p-2 bg-black text-center mx-1 rounded">{digit}</div>
      {/each}
    </div>
  </div>
  