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
      <h1 class="text-4xl font-bold mb-4">Finish the Jam</h1>
      <p class="description text-lg text-gray-200 mb-2">
          A hands-free app designed to help reduce road rage during traffic jams
      </p>
      <p class="text-gray-200 text-base">
          Tools Used: <span class="font-medium">Figma</span>
      </p>
  </div>
  
  <!-- Project Goals -->
  <section class="project-goals mb-10">
      <h2 class="text-2xl font-bold mb-4">Project Goals</h2>
      <ul class="list-disc ml-6 space-y-2 text-gray-200">
          <li>Create a hands-free interface that complies with traffic laws</li>
          <li>Reduce irritation and road rage by encouraging social interaction</li>
          <li>Develop an engaging prototype for in-traffic distraction</li>
      </ul>
  </section>

  <!-- Project Overview -->
  <section class="project-details mb-10">
    <h2 class="text-2xl font-bold mb-4">Project Overview</h2>
    <p class="mb-4 text-gray-200">
      Daily Ops commissioned an app to reduce irritation and road rage in traffic jams. Our challenge was finding a solution that remained completely hands-free and compliant with traffic laws.
    </p>
    <p class="mb-4 text-gray-200">
        To comply with mobile phone regulations, the app only works when driving under 10 km/h. We designed a simple interface controlled by just a few gestures recognized by the camera, making it safe and intuitive to use.
    </p>
    <p class="mb-4 text-gray-200">
        Inspired by the game “Finish the Lyric,” the app plays a short music clip and prompts users to sing the next line, adding a playful twist to an otherwise stressful situation.
    </p>
    <p class="mb-4 text-gray-200">
      We delivered a working Figma prototype that demonstrates the gesture controls and interface design, providing Daily Ops with a clear foundation for future development.  
    </p>
    <a 
    class="underline text-blue-300" 
    href="https://www.figma.com/proto/KSkW6DF0pY7Pt6GC7Dy7RUlT/Finish-the-Jam?node-id=101-2&p=f&t=mU3GZrmbs95nswfv-1&scaling=scale-down&content-scaling=fixed&page-id=20%3A0" 
    target="_blank" rel="noopener noreferrer">
    Click here to check out the prototype!
  </a>
  </section>
  
  <!-- Additional Images -->
  <section class="additional-images mb-10">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <img src={`${base}/images/finishjam_1.png`} alt="Finish the Jam flow 1" class="rounded-lg shadow-md">
      </div>
  </section>
</div>
