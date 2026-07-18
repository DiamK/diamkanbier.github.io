<script>
    import { onMount } from "svelte";
    import { updateVisitorCount } from "$lib/firebase";
  
    let count = 0;
  
    onMount(async () => {
      count = await updateVisitorCount();
    });
  </script>
  
  <span class="font-mono font-bold text-[#FFB84D] text-xl tabular-nums">{count}</span>
  