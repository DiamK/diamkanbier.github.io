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
        <h1>Fireball Animation</h1>
        <p class="description">Learning to animate fire and smoke</p>
        <br>
        <h3>Tools Used: Blender</h3>
    </div>
        <!-- Project Details -->
        <section class="project-details">
            <h2>About the Project</h2>
            <p>
                For my animation class I paired up with another student. At the time I was really enjoying working with Blender and she really liked drawing cute characters. We figured we'd try to combine the two things and try to animate a 2D drawn character in a 3D environment in Blender.

We chose the song Girl in Blue by Animal sun because we both really enjoyed it and envisioned the scene right away. We built a storyboard, she started drawing and I started building the world.

The biggest challenge we faced was first getting the drawn character into Blender. After we figured out how to it was a tough but very fun challenge to animate everything correctly and keyframe everything to the right second of the song!

Check out the animation below !
            </p>
        </section>

    <!-- Video Embed -->
    <div class="video-container">
        <iframe 
            title="Girl in Blue animation"
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/K67Qpnb-WWs?si=pmXT7oVDbDG_o42e" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
        </iframe>
    </div>
</div>
