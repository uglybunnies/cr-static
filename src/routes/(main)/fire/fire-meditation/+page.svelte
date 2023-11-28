<script>
  import { base } from '$app/paths';
  import Journal from '$lib/components/Journal.svelte';
  import JournalButton from '$lib/components/JournalButton.svelte';
  export let journalData = {
    questions: [
      'When you gaze into the fire, what does it evoke in you?',
      'When you are fearless, how does that serve you?',
      'What makes you feel alive and abundant with life energy?'
    ],
    title: 'Fire Meditation',
    bgColor: 'hsl(70, 100%, 0%)',
    bgImg: `${base}/assets/fire/journal-fire-meditation-bg2.webp`,
    bgPosition: '50% 0',
    bgSize: 'auto 100%',
    bullets: '15, 100%, 60%'
  };
  export let jourButtonPos = {
    right: '15%',
    top: '50%',
    posType: 'fixed',
    alpha: '1',
    glow: '190,50%,33%',
    mobTop: '8%'
  };
</script>

<svelte:head>
  <title>Fire: Fire Meditation</title>
</svelte:head>
<main class="content-page"  style="--grad-color: 221, 97%, 33%; --element-bg: linear-gradient(90deg, hsla(var(--grad-color),.7), hsla(var(--grad-color),0) 15%, hsla(var(--grad-color),0) 85%, hsla(var(--grad-color),.7)), url({base}/assets/fire/fire-meditation-bg.webp) 0 0/100% auto fixed no-repeat; --element-mob-bg: linear-gradient(hsla(var(--grad-color),.7),hsla(var(--grad-color),.7)), url({base}/assets/fire/fire-meditation-bg.webp) 33% 0/auto 100vh scroll repeat; --desc-bg-color: hsla(45, 50%, 75%, .9);--desc-copy-color: var(--light-color); --element-color: 25, 100%, 90%; --subtitle-color: 15, 100%, 85%; --copy-color: 25, 100%, 50%; background-blend-mode: darken, normal; --cs1: 351, 86%, 53%; --cs2: 320, 100%, 66%;">
  <section class="banner">

    <h2>Fire Meditation</h2>
    <p class="subtitle shiftgrad"><span>What Lights Your Fire?</span></p>
      <JournalButton {...jourButtonPos} />
      <br>
  </section>
  <section class="exercise">
    <figure class="quotes" style="--quote-color: 25, 100%, 90%; --max-width: 12em;">
      <blockquote>
        <p class="stagger">
          <span>Look</span>
          <span>Into the fire, any fire</span>
          <span>See</span>
          <span>The life force, that is you</span>
          <span class="ind2">Burning</span>
          <span class="ind3">Fearlessly</span>
          <span class="ind4">Without limit</span>
        </p>
      </blockquote>
      <figcaption>&mdash;Alana Siegel</figcaption>
    </figure>
<br><br><br>
  </section>
</main>
<Journal {...journalData} />
