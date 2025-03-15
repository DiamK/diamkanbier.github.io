<script>
  import { base } from '$app/paths';
</script>


<div class="project-page">
    <!-- Escape Hatch -->
    <a class="back-button" href={`${base}/`}>
        <img src="{`${base}/images/arrow_back.svg`}" alt="arrow icon">
        Back to tiles
    </a>
    

    <!-- Header -->
    <div class="project-header">
        <h1>Puzzlewalk</h1>
        <p class="description">A 2D character animated inside a 3D environment</p>
        <br>
        <h3>Tools Used: Blender</h3>
    </div>
        <!-- Project Details -->
        <section class="project-details">
            <h2>About the Project</h2>
            <p>
                Therapists for patients with sPAV often notice that the patient's self-management could use some work. While the patients know that proper self-management is crucial to achieve rehabilitation, it's hard for them to stay motivated to walk under so much pain and pressure.

​This app was designed to help the patients with their self-management through gamification and socalisation. The player has to walk a certain distance to find pieces of a puzzle in the augmented reality world on their phone. After collecting the pieces they will be able to put the jiggsaw puzzles together and get rewarded with credits to spend in the shop to buy something small.

​They will also be able to see nearby patients who are in the same boat as them. Connecting with those people will help distract them from the pain in their legs. By searching for puzzlepieces together it helps them walk those crucial extra meters for progress!

Look through the whole application
Here!
            </p>
        </section>

    <!-- Video Embed -->
    <div class="video-container">
        <iframe 
            title="Girl in Blue animation"
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/Xn0H4Y5__lk?si=6XR6kEVJlJ3Zxx_9" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
        </iframe>
    </div>


</div>
