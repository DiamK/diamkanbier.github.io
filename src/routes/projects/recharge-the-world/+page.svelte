<script>
    import { base } from '$app/paths';
  </script>
  
  <div class="project-page max-w-5xl mx-auto px-4 py-8">
    <!-- Escape Hatch -->
    <a class="back-button flex items-center text-blue-300 hover:text-blue-100 mb-8" href={`${base}/`}>
      <img src={`${base}/images/arrow_back.svg`} alt="arrow icon" class="w-6 h-6 mr-2" />
      Back to tiles
    </a>
  
    <!-- Project Header -->
    <div class="project-header mb-10">
      <h1 class="text-4xl font-bold mb-4">Recharge the World</h1>
      <p class="description text-lg text-gray-200 mb-2">
        Graphic design for a marketing campaign to raise awareness about battery recycling.
      </p>
      <p class="text-gray-200 text-base">
        Tools Used: <span class="font-medium">Adobe Illustrator, Photoshop</span>
      </p>
    </div>
  
    <!-- Project Goals -->
    <section class="project-goals mb-10">
      <h2 class="text-2xl font-bold mb-4">Project Goals</h2>
      <ul class="list-disc list-inside text-gray-200">
        <li>Raise awareness about battery recycling among young adults</li>
        <li>Increase the recycling rate from 45% to 65%</li>
        <li>Create shareable social posts that inspire action</li>
      </ul>
    </section>
  
    <!-- Project Overview -->
    <section class="project-details mb-10">
      <h2 class="text-2xl font-bold mb-4">Project Overview</h2>
      <p class="mb-4 text-gray-200">
        The marketing team at Stibat, the Dutch organization for battery recycling, asked for help creating a campaign aimed at young adults. Their goal was to increase recycling rates from 45% to 65%, and they wanted something bold that could grab the attention of people between 18 and 25.
      </p>
      <p class="mb-4 text-gray-200">
        We came up with an Instagram campaign built around the message: “Double tap to recharge the world.” The idea was simple: double tapping a post likes it and helps spread the message. It's familiar, quick, and easily shareable.
      </p>
      <p class="mb-4 text-gray-200">
        The campaign included three types of posts: eye-catching visuals to grab attention, informative slides about what recycled batteries can become, and clear calls to action encouraging people to drop off their used batteries.
      </p>
      <p class="mb-4 text-gray-200">
        I was responsible for the graphic design and overall art direction. My goal was to make it bold and have it keep attention, without losing clarity. Designing for social media taught me how important it is to communicate fast, especially on a platform like Instagram.
      </p>
      <p class="mb-4 text-gray-200">
        Our campaign was selected as the winner. We were invited to visit Stibat's headquarters to learn more about their work. They told us they planned to use parts of our campaign in their real world communication, though sadly I haven't seen any of it live yet.
      </p>
    </section>  

    <!-- Prototype Link -->
    <p class="mt-4 text-sm">
      <a
        class="text-blue-300 hover:text-blue-100"
        href="https://drive.google.com/file/d/1rotJMgM-nmkMCQuUWw4lIfbdSmU7CKIU/view"
        target="_blank"
        rel="noopener"
      >
        View campaign booklet →
      </a>
    </p>

    <!-- Visuals (optional) -->
    
    <section class="additional-images mt-10 mb-10">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <img src={`${base}/images/recharge1.png`} alt="Instagram mockup 1" class="rounded-lg shadow-md" />
        <img src={`${base}/images/recharge1.jpg`} alt="Instagram mockup 2" class="rounded-lg shadow-md" />
        <img src={`${base}/images/recharge3.png`} alt="Battery info slide" class="rounded-lg shadow-md" />
      </div>
    </section>
   
  </div>
  