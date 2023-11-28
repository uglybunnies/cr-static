<script>
  import { base } from '$app/paths';
  import Journal from '$lib/components/Journal.svelte';
  import JournalButton from '$lib/components/JournalButton.svelte';
  export let journalData = {
    questions: [
      'Try writing a comforting letter from your heart to yourself. How does it make you feel when you read it aloud?',
      'If you were your own therapist and you were also the client, what issues would you be discussing this week?',
      'How do you navigate when you have conflicts between your head and your heart? What experience do you recall when you had this dilemma?'
    ],
    title: 'Path to the Heart',
    bgColor: 'hsl(70, 100%, 0%)',
    bgImg: `${base}/assets/earth/journal-path-to-the-heart3.webp`,
    bgPosition: '50% 0',
    bgSize: '100% auto',
    bullets: '60, 100%, 50%'
  };
  export let jourButtonPos = {
    right: '1%',
    top: '82%',
    posType: 'fixed',
    alpha: '.4',
    glow: '60,0%,40%',
    mobTop: '31%'
  };
</script>

<svelte:head>
  <title>Earth: Path to the Heart</title>
</svelte:head>
<main class="content-page bleed  no-pad"  style="--grad-color: 200,20%,10%; --element-bg: linear-gradient(90deg, hsla(var(--grad-color),0), hsla(var(--grad-color),0.7) 70%, hsla(var(--grad-color), 0.7) 90%, hsla(var(--grad-color),0)) 0 0/100% auto no-repeat, url({base}/assets/earth/path-to-the-heart-bg.webp) 0% 100%/100% auto repeat; --element-mob-bg: linear-gradient(hsla(200,20%,10%, .5),hsla(200,20%,10%, .5)), url({base}/assets/earth/path-to-the-heart-bg.webp) 0% 0/auto 100vh repeat; --element-color: 85, 90%, 33%; --subtitle-color: 80, 90%, 33%; --copy-color: var(--light-color)">
  <!-- use the banner for the excercise title and description -->
  <section class="video">
    <iframe class="video-player" src="https://player.vimeo.com/video/686140219?h=681100e618&player_id=0&app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
  </section>

  <section id="transcript" class="transcript-group">

      <div class="content-item">

        <h2>Touch the Heart </h2>
      <JournalButton {...jourButtonPos} />
        <figure class="quotes" style="--max-width: 16.25em; --quote-color: var(--light-color);">
          <blockquote>
            There is no limit to the good<br>
            we can do when human hearts meet
          </blockquote>
          <figcaption>&mdash;Gregory David Roberts</figcaption>
        </figure>
        <h3>Path to the Heart</h3>
        <p>The heart has many meanings across different cultures. For some it’s the seat of the soul, for some the mind, for some the engine of the body and for some it’s just love. Yet for all of us it has resonance. For now, let’s hold our heart to be our ground, our base. If we can stay connected to it, we have a home that is dependable, a source of inherent wisdom, and an awareness that never sleeps. One might think we would not want to wander from this safe and powerful refuge. But at times we do.</p>

        <p>Many things take us away from this source. We are easily distracted and seduced by all sorts of life circumstances, love potions, winding halls of sorrow, habits, thoughts and desires. For example, perhaps we can recall a time of being so consumed by a relationship problem that we lose ourselves and start behaving in old ways from our family of origin that are completely inappropriate to the situation. We continue being captured by our drama and then wonder, “How did I get here? How do I get back?” It’s almost like trying to forge our way through an overgrown jungle of habits and emotion with no machete to clear a path back home. At times, the chaotic sounds of this jungle might even cause us to freeze in terror or fear, and we feel lost. The heart is our refuge at such moments. A beautiful balance is to simultaneously stay present with our own heart while we love and stay present with others.</p>
        
        <p>This video is a simple reminder: the heart is our hero and wisdom is our guide.</p>
      </div>
      <div class="transcript-item goto-links">
        <h3 class="side-title subtitle">Explore Earth</h3>
        <ul class="goto-content-links">
          <li><a href="../the-inner-critic">The Inner Critic</a></li>
          <li><a href="../kindness-to-self">Kindness to Self</a></li>
          <li><a href="../quieting-inner-critic">Quieting the Inner Critic</a></li>
          <li><a href="../self-hypnosis">Self Hypnosis</a></li>
          <li><a href="../">&#8230;and more</a></li>
        </ul>
      </div>
  </section>
</main>
<Journal {...journalData} />
