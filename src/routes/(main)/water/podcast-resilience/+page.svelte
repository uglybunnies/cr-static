<script>
  import { base } from '$app/paths';
  import Journal from '$lib/components/Journal.svelte';
  import JournalButton from '$lib/components/JournalButton.svelte';
  export let journalData = {
    questions: [
      'How do you bounce back from rejection?',
      'What are the different aspects of your resilience and how do they help you? Write them on a quick list.',
      'Be daring! Be resilient! Dance as if no one is watching -- even if they are.Then write down your experience.'
    ],
    title: 'Resilience',
    bgColor: 'hsl(180, 100%, 0%)',
    bgImg: `${base}/assets/water/journal-podcast-resilience3.webp`,
    bgPosition: '45% 0',
    bgSize: 'auto 100%',
    bullets: '185, 100%, 50%'
  };
  export let jourButtonPos = {
    right: '22%',
    top: '27%',
    posType: 'fixed',
    alpha: '.6',
    glow: '60,50%,100%',
    mobTop: '12%'
  };
</script>

<svelte:head>
  <title>Water: Podcast--Resilience</title>
</svelte:head>
<main class="content-page"  style="--grad-color: 180,25%,85%;--element-bg: linear-gradient(90deg, hsla(var(--grad-color),0), hsla(var(--grad-color),0.85) 15%, hsla(var(--grad-color),0.85) 75%, hsla(var(--grad-color),0)) 0 0/41em auto no-repeat, url({base}/assets/water/water_dakini_bg7.webp) 50% 100%/200% auto fixed no-repeat; --element-mob-bg: linear-gradient(180deg, hsla(var(--grad-color), .3) 33%, hsla(var(--grad-color), .8)), url({base}/assets/water/water_dakini_bg7.webp) 50% 100%/auto 200vh scroll repeat; --element-color: 211, 90%, 26%; --subtitle-color: 176, 100%, 33%; background-blend-mode: normal, saturation, normal; --cs1: 220, 80%, 50%; --cs2: 30, 100%, 75%;">
  <!-- use the banner for the excercise title and description -->
  <section class="banner">
    <h2>Resilience</h2>
    <p class="subtitle shiftgrad"><span>Are You an Eagle or a Mouse?</span></p>
    <br>
      <JournalButton {...jourButtonPos} />
  </section>
  <section class="exercise">
    <div class="audio">
      <iframe width="100%" height="20" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/982577275%3Fsecret_token%3Ds-s1t15TT3BPC&color=%23ffff00&inverse=true&auto_play=false&show_user=true"></iframe>
      <span class="runtime">15:34</span>
    </div>
    <br>
    <p>In this episode, Grey and Lily discuss resilience and how they find their natural rhythms. They invite us to ponder M. H. Nichols poem "For The Overwhelmed". <br></p>
    <figure class="quotes" style="--max-width: 15em;">
      <blockquote>

        Let the natural rhythm of the day<br>
        remind you to pace yourself.<br>
        Rise up with with the sun<br>
        and settle down with the moon.
      </blockquote>
      <figcaption>&mdash;M. H. Nichols</figcaption>
    </figure>
  </section>
  <section class="creator-bio">
    <h3>About the Hosts</h3>
    <div class="flex-group">
      <img src="{base}/assets/lilyandgraypinto.jpg" alt="Podcasting twins, Gary and Lily Pinto">
      <p>Gray Pinto is a student of Acting, Directing and Screenwriting and is committed to serving the world with his art. Lily Pinto is a songwriter and musician. She hopes to bring music that reminds us what love is, how it feels and how it changes everything.</p>
    </div>
  </section>
</main>
<Journal {...journalData} />