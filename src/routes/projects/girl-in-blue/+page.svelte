<script>
    import { base } from '$app/paths';
  </script>
  
  <div class="project-page max-w-5xl mx-auto px-4 py-8">
    <!-- Escape Hatch -->
    <a class="back-button flex items-center text-blue-300 hover:text-blue-100 mb-8" href={`${base}/`}>
        <img src={`${base}/images/arrow_back.svg`} alt="arrow icon" class="w-6 h-6 mr-2">
        Back to tiles
    </a>
    
    <!-- Header -->
    <div class="project-header mb-10">
        <h1 class="text-4xl font-bold mb-4">Girl in Blue</h1>
        <p class="description text-lg text-gray-200 mb-2">A 2D character animated inside a 3D environment</p>
        <p class="text-gray-200 text-base">Tools Used: <span class="font-medium">Blender</span></p>
    </div>
    
    <!-- Project Goals -->
    <section class="project-goals mb-10">
        <h2 class="text-2xl font-bold mb-4">Project Goals</h2>
        <ul class="list-disc ml-6 space-y-2 text-gray-200">
              <li>Enhance my Blender animation skills</li>
              <li>Integrate 2D illustrations into a 3D environment</li>
              <li>Create a visually engaging narrative that resonates</li>
        </ul>
    </section>
    
<!-- Project Overview -->
<section class="project-details mb-10">
    <h2 class="text-2xl font-bold mb-4">Project Overview</h2>
    <p class="mb-4 text-gray-200">
        For my animation class I teamed up with another student. At that time, I was really into Blender, and she loved drawing cute characters. We thought it would be cool to combine our skills and try animating her 2D illustrations within a 3D scene.
    </p>
    <p class="mb-4 text-gray-200">
        We picked the song "Girl in Blue" by Animal Sun because we both liked the vibe and immediately imagined how the scene would look. After sketching out our storyboard, she started on the character art, while I got to work creating the 3D environment.
    </p>
    <p class="mb-4 text-gray-200">
        One of the biggest challenges was getting her 2D drawings into Blender in a way that actually worked. Once we managed that, my next challenge was timing the animation precisely to the music — tricky but super fun to figure out!
    </p>
    <p>Ultimately, the final animation not only captured our creative vision but also helped me significantly improve my technical skills in Blender.
    </p>
  </section>
  
    <!-- Video Embed -->
    <div class="video-container flex justify-center">
        <iframe 
            title="Girl in Blue animation"
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/Xn0H4Y5__lk?si=6XR6kEVJlJ3Zxx_9" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            class="rounded-lg shadow-lg">
        </iframe>
    </div>
  </div>
  