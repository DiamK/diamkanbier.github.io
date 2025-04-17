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
      <h1 class="text-4xl font-bold mb-4">Puzzlewalk</h1>
      <p class="description text-lg text-gray-200 mb-2">
        An AR walking game to boost rehab motivation through gamification and community
      </p>
      <p class="text-gray-200 text-base">
        Tools Used: <span class="font-medium">Figma</span>
      </p>
    </div>
  
    <!-- Project Goals -->
    <section class="project-goals mb-10">
      <h2 class="text-2xl font-bold mb-4">Project Goals</h2>
      <ul class="list-disc ml-6 space-y-2 text-gray-200">
        <li>Motivate patients with sPAV to walk further</li>
        <li>Encourage social support by connecting users in the same situation</li>
        <li>Create a prototype for NPi to continue development</li>
      </ul>
    </section>
  
    <!-- Project Overview -->
    <section class="project-details mb-10">
      <h2 class="text-2xl font-bold mb-4">Project Overview</h2>
      <p class="mb-4 text-gray-200">
        Therapists at NPi noticed that people with sPAV often struggle to stay motivated during rehab. Puzzlewalk was created to make walking feel more like a game. Each walk becomes a mission to find hidden puzzle pieces in an augmented reality world.
      </p>
      <p class="mb-4 text-gray-200">
        Players walk a certain distance to collect pieces, then put them together to complete a puzzle on their screen. Finishing a puzzle earns points, which can be used to unlock rewards. The idea is to make progress feel fun and satisfying.
      </p>
      <p class="mb-4 text-gray-200">
        Users can also spot others nearby and walk together. That sense of community helps take the edge off the pain and makes the experience more social and supportive.
      </p>
      <p class="mb-4 text-gray-200">
        My role was to turn these ideas into a working prototype in Figma. I focused on keeping everything simple and easy to follow, especially for people who might not be very tech-savvy. One of the hardest parts was figuring out how to make the AR puzzle concept feel playful but still realistic.
      </p>
      <p class="mb-4 text-gray-200">
        This project gave me a better understanding of how to design for people who aren't always comfortable with technology.
      </p>
    </section>
    
    <a 
    class="underline text-blue-300" 
    href="https://www.figma.com/proto/Pc85xF8C27UPXjczCV8vagcX/npi?node-id=1-2&t=xuKuA1tEiqovuz0r-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1" 
    target="_blank" rel="noopener noreferrer">
    Click here to check out the prototype!
  </a>
  
    <!-- Screenshots & Designs -->
    <section class="additional-images mt-10 mb-10">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <img src={`${base}/images/puzzlewalk1.png`} alt="Puzzlewalk AR map view" class="rounded-lg shadow-md" />
        <img src={`${base}/images/puzzlewalk2.png`} alt="Collecting puzzle pieces" class="rounded-lg shadow-md" />
        <img src={`${base}/images/puzzlewalk3.png`} alt="Puzzle assembly and shop screen" class="rounded-lg shadow-md" />
      </div>
    </section>
  </div>
  