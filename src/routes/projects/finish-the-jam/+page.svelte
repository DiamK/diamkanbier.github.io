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
        <h1>Finish the Jam</h1>
        <p class="description">A 2D character animated inside a 3D environment</p>
        <br>
        <h3>Tools Used: Blender</h3>
    </div>
        <!-- Project Details -->
        <section class="project-details">
            <h2>About the Project</h2>
            <p>
                The company Daily Ops was looking for a way to reduce irritation and road rage in traffic jams. They wanted an application that people could use to socialise with others stuck in traffic jams.

                ​
                
                To achieve this the application had to obey to the traffic laws in regard to mobile phone usage. As a result the app was designed to be able to be controlled hands free by the usage of a maximum of 4 motion controls, to make use of a speech guide and to be easy to read in a quick glance.
                
                ​
                
                The app is based off a game called "finish the lyric" where the player has to continue singing the song after it stops playing.
                
                 
                
                Click here to view the prototype!
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
