<script>
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Space: Dance (Charya) Workshop</title>
</svelte:head>
<main class="content-page bleed no-pad"  style="--grad-color: 255, 75%, 90%; --element-bg: linear-gradient(90deg, hsla(var(--grad-color),.125), hsla(var(--grad-color),0.9) 15%, hsla(var(--grad-color),0.9) 50%, hsla(var(--grad-color),0.7) 60%, hsla(var(--grad-color),0.95) 70%, hsla(var(--grad-color), 0.95) 90%, hsla(var(--grad-color),.25)) 0 0/100% auto no-repeat, url({base}/assets/space/voice-of-space-bg.webp) 0% 100%/100% auto fixed repeat; --element-mob-bg: linear-gradient(90deg, hsla(var(--grad-color), .7), hsla(var(--grad-color), .9) 15%,hsla(var(--grad-color), .9) 85%, hsla(var(--grad-color), .7)),url({base}/assets/space/voice-of-space-bg.webp) 0 100%/auto 100vh scroll repeat; --element-color: var(--dark-color); --subtitle-color: 255, 90%,33%;" >
  <!-- use the banner for the excercise title and description -->
  <section class="video">
    <iframe class="video-player" src="https://player.vimeo.com/video/502046506?h=df48ceaf27&badge=0&autopause=0&amp;player_id=0&app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Voice of Space"></iframe>
  </section>

  <section id="transcript" class="transcript-group">

      <div class="content-item">

        <h2>Dance (Charya) Workshop</h2>
        <p class="subtitle">An Ancient Healing Dance From The Himalayas</p>
        <p>There have been many human beings in ancient times who achieved a perfect balance of the heart and mind. Some of them passed down their achievements in order to help others attain the balance of inner and outer elements. This is called the Charya dance. In this workshop we will enjoy the rich tradition of charya through exploring the blissful natural movement of one’s body and awareness.</p>

        <p>We invite you to join us in this online workshop via zoom once every week for 3 months.</p>

        <div class="cta"><a href="https://forms.gle/ngmtjaZNyE8fpm2B9" class="cta-button" target="_blank">Register now</a></div>
        <div class="cta"><a href="" class="cta-button">Schedule</a></div>
        <h3>Awakening Charya Beginner's Course</h3>

        <p>During the dance workshop we will learn the following:</p>

        <ul>
          <li>Hand movements and mudras</li>

          <li>Feet movements</li>

          <li>Body postures</li>

          <li>Awareness yoga</li>

          <li>Breathing exercises</li>

          <li>Grounding, Present moment awareness and Joy meditation</li>

          <li>Mindfulness meditation of chakras and 5 elements</li>

          <li>Dance of the 5 elements</li>
        </ul>
      </div>
      <div class="transcript-item goto-links">
        <h3 class="side-title subtitle">Explore Space</h3>
        <ul class="goto-content-links">
          <li><a href="{base}/space/sky-eating" class="dark">Sky Eating</a></li>
          <li><a href="{base}/space/present-moment-meditation" class="dark">Present Moment Meditation</a></li>
          <li><a href="{base}/space/letting-go" class="dark">Letting Go</a></li>
          <li><a href="{base}/space/space-meditation" class="dark">Space Meditation</a></li>
          <li><a href="../" class="dark">&#8230;and more</a></li>
        </ul>
      </div>
  </section>


</main>
