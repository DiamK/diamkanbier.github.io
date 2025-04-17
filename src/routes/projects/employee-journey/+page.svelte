<script>
    import { base } from '$app/paths';
  </script>
  
  <div class="project-page max-w-5xl mx-auto px-4 py-8">
  
    <!-- Escape Hatch -->
    <a
      class="back-button flex items-center text-blue-300 hover:text-blue-100 mb-8"
      href={`${base}/`}
    >
      <img
        src={`${base}/images/arrow_back.svg`}
        alt="Back icon"
        class="w-6 h-6 mr-2"
      />
      Back to tiles
    </a>
  
    <!-- Project Header -->
    <div class="project-header mb-10">
      <h1 class="text-4xl font-bold mb-4">Employee Journey</h1>
      <p class="text-lg text-gray-200 mb-2">
        Improving the usability of the digital job application process for Financieelsysteem B.V.
      </p>
      <p class="text-base text-gray-200">
        Tools used: <span class="font-medium">Figma, Miro, user interviews</span>
      </p>
    </div>
  
    <!-- Problem Statement -->
    <section class="problem mb-10">
      <h2 class="text-2xl font-bold mb-4">Problem</h2>
      <p class="mb-4 text-gray-200">
        Financieelsysteem B.V. had no real way for candidates to apply. The careers page was confusing, there was no apply button, and applications came in by generic email; resulting in zero clarity or conversion.
      </p>
    </section>
  
    <!-- Research & Insights -->
    <section class="research mb-10">
      <h2 class="text-2xl font-bold mb-4">Research &amp; Insights</h2>
      <ul class="list-disc ml-6 space-y-2 text-gray-200">
        <li><strong>Effectiveness:</strong> No apply button means candidates can’t complete their goal.</li>
        <li><strong>Efficiency:</strong> Absence of search and filters forces users to scroll every listing.</li>
        <li><strong>Aesthetics:</strong> Minimal styling gave an unprofessional first impression.</li>
        <li><strong>Error Tolerance:</strong> No validation or confirmation leaves users unsure if they applied.</li>
        <li><strong>Ease of Learning:</strong> Buzzword‑heavy listings confused new graduates.</li>
      </ul>
    </section>
  
    <!-- Process Highlights -->
    <section class="process mb-10">
      <h2 class="text-2xl font-bold mb-4">Process Highlights</h2>
      <ol class="list-decimal ml-6 space-y-2 text-gray-200">
        <li>
          <strong>Audit & Interviews:</strong> Mapped a 0% completion flow—stakeholders were surprised no one could apply.
        </li>
        <li>
          <strong>Journey Mapping:</strong> Converted the employee journey into a candidate map, revealing three main drop‑off points.
        </li>
        <li>
          <strong>Prototyping:</strong> Ran three wireframe iterations; expert reviews cut confusion by 60%.
        </li>
      </ol>
    </section>
  
    <!-- Evidence Screens -->
    <figure class="mb-10">
      <img
        src={`${base}/images/employee-journey-map.svg`}
        alt="Diagram of the candidate journey stages"
        class="rounded-lg shadow-md w-full max-w-2xl mx-auto"
      />
      <figcaption class="text-gray-400 text-sm mt-2 text-center">
        Journey map showing key candidate steps and pain points.
      </figcaption>
    </figure>
  
    <figure class="mb-10">
      <img
        src={`${base}/images/vacatures.svg`}
        alt="Wireframe of the careers landing page"
        class="rounded-lg shadow-md w-full max-w-2xl mx-auto"
      />
      <figcaption class="text-gray-400 text-sm mt-2 text-center">
        Landing page prototype with company values and clear call to action.
      </figcaption>
    </figure>
  
    <figure class="mb-10">
      <img
        src={`${base}/images/Vacaturepagina.svg`}
        alt="Prototype of the vacancy listing page"
        class="rounded-lg shadow-md w-full max-w-2xl mx-auto"
      />
      <figcaption class="text-gray-400 text-sm mt-2 text-center">
        Vacancy page with filter bar and prominent apply button.
      </figcaption>
    </figure>
  
    <!-- Reflection & Next Steps -->
    <section class="reflection mb-10">
      <h2 class="text-2xl font-bold mb-4">What I Learned &amp; Next Steps</h2>
      <ul class="list-disc ml-6 space-y-2 text-gray-200">
        <li>Agree on core requirements up front to avoid scope creep.</li>
        <li>Protect dedicated design time so research doesn’t overshadow prototyping.</li>
        <li>Use rapid expert reviews to catch major usability issues early.</li>
        <li>Next steps: build error states, mobile responsiveness, and richer interactions.</li>
      </ul>
    </section>

    <p class="mt-4 text-sm text-blue-300">
        <a href="https://www.figma.com/proto/xASOgxfKJpYHhHWvcaSyoU/Afstuderen?node-id=201-455&starting-point-node-id=201%3A455&t=Cg8yafCXOZQLtB2R-1" target="_blank" rel="noopener">View full prototype →</a>
      </p>
      
  
  </div>
  