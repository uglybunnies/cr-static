<script>
  import { base } from '$app/paths';
  import Journal from '$lib/components/Journal.svelte';
  import JournalButton from '$lib/components/JournalButton.svelte';  export let journalData = {
    questions: [
      'How far can you let your sense of inner space expand and what happens when you do that?',
      'How many stars are in the sky? How many thoughts in your mind? Try setting a timer for one minute and count your thoughts. What is your count?',
      'This simple Zen meditation technique is said to offer surprising results. To explore this, do as follows: Contract yourself into the tiniest particle imaginable and stay there some moments. Now what do you find?'
    ],
    title: 'Space Meditation',
    bgColor: 'hsl(70, 100%, 0%)',
    bgImg: `${base}/assets/space/journal-space-meditaiton.webp`,
    bgPosition: '50% 0',
    bgSize: 'cover',
    bullets: '240, 100%, 75%'
  };
  export let jourButtonPos = {
    right: '20%',
    top: '40%',
    posType: 'fixed',
    alpha: '.4',
    glow: '255,75%,60%',
    mobTop: '7%'
  };
</script>
<svelte:head>
  <title>Space: Space Meditation</title>
</svelte:head>
<main class="content-page center" style="--grad-color: 255, 100%, 50%; --element-bg: linear-gradient(hsla(var(--grad-color), .3), hsla(255, 50%, 50%, .5)), url({base}/assets/space/space-dakini-dark-rich-bg.webp) 0% 100%/180% auto no-repeat fixed; --element-mob-bg: linear-gradient(hsla(var(--grad-color), .3), hsla(255, 50%, 50%, .5)), url({base}/assets/space/space-dakini-dark-rich-bg.webp) 0 0/auto 120vh scroll repeat; --element-color: 45, 90%, 75%; --subtitle-color: 45, 90%, 85%; background-blend-mode: hard-light, normal; --copy-color: 455, 100%, 95%; --cs1: 26, 100%, 70%; --cs2: 296, 40%, 69%;">
  <section class="banner">
    <h2>Space Meditation</h2>
    <p class="subtitle shiftgrad">
      <span>Where is the Edge of the Sky?</span>
    </p>
    <JournalButton {...jourButtonPos} />
  </section>
  <section class="exercise">

    <figure class="quotes" style="--max-width: 13em; --quote-color: 455, 100%, 95%; --text-out: .0625em .0625em .0625em hsla(var(--dark-color), 1);">
      <blockquote>
        <p>
          On a clear night <br>
          Gaze up at the stars<br>
          Let yourself expand<br>
          Into the galaxy<br><br>
          
          Let the open space<br>
          Clear away your worries<br>
          And the vast space fill your body<br>
          dissolving your limitations<br><br>
          
          Let the outer sky<br>
          Meet the inner sky<br>
          becoming the silence of peace
        </p>
      </blockquote>
      <!-- <figcaption>
        &mdash;
      </figcaption> -->
    </figure>
    <br><br>
    <p>As you move on, remember the sky within and let it become the playground for your thoughts -- the stars in your inner sky.</p>
    <br><br>
    <hr>
    <p class="continue-links">
      Meet the <a href="{base}/space/voice-of-space">Voice of Space</a>, try <a href="{base}/space/letting-go">Letting Go</a>, enjoy the <a href="{base}/space/sharing-space">Beauty of Space</a> or explore more of the <a href="{base}/space">Space Element</a>.
    </p>
  </section>
</main>
<Journal {...journalData} />