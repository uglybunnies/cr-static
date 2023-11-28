<script>
  import { base } from '$app/paths';
  import Journal from '$lib/components/Journal.svelte';
  import JournalButton from '$lib/components/JournalButton.svelte';
  export let journalData = {
    questions: [
      'How can you use water to soothe and heal yourself?',
      'When you are feeling the rise and fall of emotions like waves on the ocean, what then is that ocean that they fall back into?',
      'What unique part of you would you like to ripple out into the world a bit more?'
    ],
    title: 'Water Meditation',
    bgColor: 'hsl(180, 100%, 0%)',
    bgImg: `${base}/assets/water/journal-water-meditation-bg2.webp`,
    bgPosition: '0 0',
    bgSize: 'auto 100%',
    bullets: '185, 100%, 50%'
  };
  export let jourButtonPos = {
    right: '5%',
    top: '10%',
    posType: 'fixed',
    alpha: '.5',
    glow: '60,100%,100%',
    mobTop: '7%'
  };
</script>

<svelte:head>
  <title>Water: Water Meditation</title>
</svelte:head>
<main class="content-page" style="--grad-color: 180,25%,85%; --element-bg: linear-gradient(90deg, hsla(var(--grad-color),0), hsla(var(--grad-color),0.85) 15%, hsla(var(--grad-color),0.85) 75%, hsla(var(--grad-color),0)), linear-gradient(hsla(180, 50%, 50%, .3), hsla(180, 50%, 33%, .3)), linear-gradient(180deg, hsla(180, 100%, 100%, 0),hsla(180, 100%, 100%, .5) 40%,hsla(180, 100%, 100%, .5) 60%,hsla(180, 100%, 100%, 0)) 0 60%/ auto 60% fixed no-repeat, url({base}/assets/water/water_dakini_bg7.webp) 66% 100%/175% auto fixed no-repeat; --element-mob-bg: linear-gradient(180deg, hsla(var(--grad-color), .3) 33%, hsla(var(--grad-color), .7)), url({base}/assets/water/water_dakini_bg7.webp) 66% 100%/auto 175vh scroll repeat; --element-color: 211, 90%, 26%; --subtitle-color: 176, 100%, 33%; background-blend-mode: normal, luminosity, lighten, normal;">
  <!-- use the banner for the excercise title and description -->
  <section class="banner">
    <h2>Water Meditations</h2>
  </section>
  <section class="introduction poem">

    <JournalButton {...jourButtonPos} />
    <figure class="quotes" style="--max-width: 34em;">
      <blockquote class="stagger">
        <p>
          Go sit by a flowing stream <br>
          Melt into<br><br>
          
          &nbsp;&nbsp;&nbsp;Clear colors<br> 
          &nbsp;&nbsp;&nbsp;Soothing sounds<br><br>
          
          Loose yourself for a time<br>
          Then return renewed
        </p>
        <p class="nudge-up">
          Gently watch the raindrops <br>
Falling on clear pools <br><br>

See each drop circle out and out <br>
Let your self be like the rain drop <br>
Circling out in the clear pool of your mind <br>
        </p>
      </blockquote>
      <!-- <figcaption>
        &mdash;
      </figcaption> -->
    </figure>
  </section>

</main>
<Journal {...journalData} />
<style>
  .stagger .nudge-up:nth-child(2) {
    margin-top: -3.5em;
    margin-bottom: 4em;
  }
  @media screen and (orientation: portrait) {
    .stagger .nudge-up:nth-child(2) {
      margin-top: 0;
      margin-bottom: 1em;
    }
  }
</style>
