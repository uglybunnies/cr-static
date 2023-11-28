<script>
  import { base } from '$app/paths';
  import Journal from '$lib/components/Journal.svelte';
  import JournalButton from '$lib/components/JournalButton.svelte';
  export let journalData = {
    questions: [
      'Who\'s your boss, you or your inner critic?',
      'What makes you miserable?',
      'What\'s your favorite way to put yourself down?'
    ],
    title: 'The Inner Critic',
    bgColor: 'hsl(70, 100%, 0%)',
    bgImg: `${base}/assets/earth/journal-inner-critic.webp`,
    bgPosition: '0 66%',
    bgSize: 'cover',
    bullets: '60, 100%, 50%'
  };
  export let jourButtonPos = {
    right: '2%',
    top: '55%',
    posType: 'fixed',
    alpha: '.4',
    glow: '60,100%,100%',
    mobTop: '7%'
  };
</script>

<svelte:head>
  <title>Earth: The Inner Critic</title>
</svelte:head>
<main class="content-page"  style="--element-bg: linear-gradient(90deg, hsla(45,75%,80%,0), hsla(45,75%,80%,0.85) 15%, hsla(45,75%,80%,0.85) 45%, hsla(45,75%,80%,0) 85%) 0 0/48em auto no-repeat, url({base}/assets/earth/earth_10.jpg) 0 0/100% auto fixed no-repeat; --element-mob-bg: linear-gradient(hsla(45,75%,80%, .5),hsla(45,75%,80%, .5)), url({base}/assets/earth/earth_10.jpg) 0 0/auto 100vh scroll repeat; --desc-bg-color: hsla(45, 50%, 75%, .9);--desc-copy-color: var(--dark-neutral); --element-color: 85, 90%, 26%; --subtitle-color: 85, 136%, 40%; --cs1: 265, 100%, 50%; --cs2: 175, 100%, 50%; --cs3: 360, 100%, 50%; --cs4: 25, 100%, 50%;">
  <!-- use the banner for the excercise title and description -->
  <section class="banner">
    <h2>The Inner Critic</h2>
    <p class="subtitle shiftgrad"><span>What’s Making You Miserable?</span></p>

  </section>
  <section class="exercise">

      <JournalButton {...jourButtonPos} />

      <figure class="quotes" style="--max-width: 18.5em;">
        <blockquote>
            Your task isn’t to search for love<br>
            Your task is to find and remove<br>
            All the barriers you have built against it<br>
        </blockquote>
        <figcaption>&mdash;The Sufi mystic Rumi</figcaption>
      </figure>
    <p>What’s the biggest barrier you’ve built against love, happiness or well-being? If you pay attention you might notice there is an incessant critical voice in your head. Does it give you any slack? You’re saying things to yourself you wouldn’t say to your worst enemy!</p>

      <p>You can listen and learn how to relate with this critical part of you in new, life-enhancing ways. Christine invites you to have some fun dismantling barriers that block your capacity for love, ease, and joy.</p>
      <div class="audio">
        <iframe width="100%" height="20" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/967273027%3Fsecret_token%3Ds-F5zsjcXsxld&amp;color=%23ffff00&amp;inverse=true&amp;auto_play=false&amp;show_user=true"></iframe>
        <span class="runtime">11:36</span>
      </div>
      <p><small>Audio presentation by Christine Longaker</small></p>
  </section>
  <section class="creator-bio">
    <p>Christine Longaker is the author of Facing Death and Finding Hope which is translated into nine languages. She offers international training about resilience and self-compassion.</p>
  </section>
</main>
<Journal {...journalData} />
