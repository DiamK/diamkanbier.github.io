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
        <h1 class="text-4xl font-bold mb-4">Edge of Night</h1>
        <p class="description text-lg text-gray-200 mb-2">
            A kinetic typography animation created in After Effects
        </p>
        <p class="text-gray-200 text-base">
            Tools Used: <span class="font-medium">After Effects</span>
        </p>
    </div>
    
    <!-- Project Goals -->
    <section class="project-goals mb-10">
        <h2 class="text-2xl font-bold mb-4">Project Goals</h2>
        <ul class="list-disc ml-6 space-y-2 text-gray-200">
            <li>Improve my skills in After Effects</li>
            <li>Experiment with kinetic typography</li>
            <li>Create an animation that holds the viewer's attention</li>
        </ul>
    </section>
    
    <!-- Project Overview -->
    <section class="project-details mb-10">
      <h2 class="text-2xl font-bold mb-4">Project Overview</h2>
      <p class="mb-4 text-gray-200">
        During an animation masterclass, I discovered Adobe After Effects and immediately fell in love with its creative possibilities. I challenged myself to create a kinetic typography animation that would push my skills to the next level.
      </p>
      <p class="mb-4 text-gray-200">
        Kinetic typography appealed to me as a dynamic way to bring text to life, evoke emotions, and capture the viewer's attention. To add a personal touch, I chose to animate the "Edge of Night" scene from The Lord of the Rings: Return of the King. Because I love the Lord of the Rings.
      </p>
      <p class="mb-4 text-gray-200">
        The biggest challenge for me on this project was refining my approach to selecting and applying the ideal animation techniques and visual effects among the countless possibilities in After Effects.
    </p>
    <p class="mb-4 text-gray-200">
        This project turned my creative concept into reality while sharpening my skills in integrating expressive 2D text with dynamic motion. Check out the final animation below!
      </p>
      
    
    </section>
    
    <!-- Video Embed -->
    <div class="video-container flex justify-center">
        <iframe 
            title="Edge of Night animation"
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/qxxkrc0d2XU?si=s3aIihpVylaqJB0Q" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            class="rounded-lg shadow-lg">
        </iframe>
    </div>
  </div>
  