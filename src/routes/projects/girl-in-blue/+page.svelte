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
        <h1>Girl in Blue</h1>
        <p class="description">A 2D character animated inside a 3D environment</p>
        <br>
        <h3>Tools Used: Blender</h3>
    </div>
    
    <!-- Project Details -->
    <section class="project-details">
        <h2>About the Project</h2>
        <p>
            For my animation class I teamed up with another student. At that time, I was really into Blender, and she loved drawing cute characters. We thought it would be cool to combine our skills and try animating her 2D illustrations within a 3D scene.
    
            We picked the song "Girl in Blue" by Animal Sun because we both liked the vibe and immediately imagined how the scene would look. After sketching out our storyboard, she started on the character art, while I got to work creating the 3D environment.
    
            One of the biggest challenges was getting her 2D drawings into Blender in a way that actually worked. Once we managed that, my next challenge was timing the animation precisely to the music—tricky but super fun to figure out!
    
            Check out the full animation below!
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
