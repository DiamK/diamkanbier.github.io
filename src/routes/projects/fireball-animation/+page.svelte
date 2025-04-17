<script>
    import { base } from '$app/paths';
  </script>
  
  <div class="project-page max-w-5xl mx-auto px-4 py-8">
    <!-- Escape Hatch -->
    <a class="back-button flex items-center text-blue-300 hover:text-blue-100 mb-8" href={`${base}/`}>
        <img src={`${base}/images/arrow_back.svg`} alt="arrow icon" class="w-6 h-6 mr-2">
        Back to tiles
    </a>
    
    <!-- Project Header -->
    <div class="project-header mb-10">
        <h1 class="text-4xl font-bold mb-4">Fireball Animation</h1>
        <p class="description text-lg text-gray-200 mb-2">
            Learning to animate fire and smoke with dynamic particle effects.
        </p>
        <p class="text-gray-200 text-base">
            Tools Used: <span class="font-medium">Blender</span>
        </p>
    </div>
    
<!-- Project Goals -->
<section class="project-goals mb-10">
    <h2 class="text-2xl font-bold mb-4">Project Goals</h2>
    <ul class="list-disc ml-6 space-y-2 text-gray-200">
        <li>Enhance my Blender animation skills</li>
        <li>Experiment with advanced particle and smoke simulation effects</li>
        <li>Create a realistic and visually compelling fireball to be used for VFX</li>
    </ul>
</section>

<!-- Project Overview -->
<section class="project-details mb-10">
    <h2 class="text-2xl font-bold mb-4">Project Overview</h2>
    <p class="mb-4 text-gray-200">
      I started this project with the idea of creating a video where I could literally summon a fireball in my hand. So I began by learning how to animate the fireball using advanced particle and smoke simulations in Blender.
    </p>
    <p class="mb-4 text-gray-200">
      As I progressed, I experimented with integrating the animated fireball into a live-action setting as a VFX element. However, due to the complexity and time constraints, it remains a work in progress. This project has been a valuable learning experience that sets the stage for more refined VFX work in the future.
    </p>
  </section>
    <!-- Video Embed -->
    <div class="video-container flex justify-center">
        <iframe 
            title="Fireball Animation"
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/K67Qpnb-WWs?si=pmXT7oVDbDG_o42e" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            class="rounded-lg shadow-lg">
        </iframe>
    </div>
  </div>
  