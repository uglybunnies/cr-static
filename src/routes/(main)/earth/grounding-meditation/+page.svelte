<script>
  import { base } from '$app/paths';
  import Journal from '$lib/components/Journal.svelte';
  import JournalButton from '$lib/components/JournalButton.svelte';
  export let journalData = {
    questions: [
      'What does being grounded mean to you?',
      'What hidden emotions came to light and dissipated as you did this healing meditation?',
      'If, in the midst of a busy and stressful day, if you pause for a moment, relax your body and breathe deeply, how does that affect your immediate experience?'
    ],
    title: 'Grounding Meditation',
    bgColor: 'hsl(70, 100%, 0%)',
    bgImg: `${base}/assets/earth/journal-grounding-meditation.jpg`,
    bgPosition: '0 30%',
    bgSize: 'cover',
    bullets: '60, 100%, 50%'
  };
  export let jourButtonPos = {
    right: '5%',
    top: '15%',
    posType: 'fixed',
    alpha: '.25',
    glow: '45,100%,66%',
    mobTop: '15%'
  };
</script>

<svelte:head>
  <title>Earth: Grounding Meditation</title>
</svelte:head>
<main class="content-page set-to-aspect4-3"  style="--element-bg: linear-gradient(90deg, hsla(45,75%,80%,0), hsla(45,75%,80%,0.9) 15%, hsla(45,75%,80%,0.9) 50%, hsla(45,75%,80%,0) 85%) 0 0/52em auto no-repeat, url({base}/assets/earth/earth-meditation.webp) 0 80%/115% auto fixed repeat; --element-mob-bg: linear-gradient(180deg, hsla(45,75%,80%, .7), hsla(45,75%,80%, .7)), url({base}/assets/earth/earth-meditation.webp) 55% 0/auto 100vh scroll repeat; --desc-bg-color: hsla(45, 50%, 75%, .9);--desc-copy-color: var(--dark-neutral); --element-color: 85, 90%, 26%; --subtitle-color: 85, 100%, 33%; --cs1: 0, 100%, 70%; --cs2: 265, 100%, 80%; --bg-size-4-3: auto 100%; --bg-pos-4-3: 50% 0;">
  <section class="banner">
    <h2>Grounding Meditation</h2>
    <p class="subtitle shiftgrad"><span>This Meditation will Help When <br> Feeling “Spaced Out” or Confused.</span></p> <br>
      <JournalButton {...jourButtonPos} />
  </section>
  <section class="exercise">
    <figure class="quotes" style="--max-width: 18.5em;">
      <blockquote>
        Over the years knowingly or unknowingly, we have accumulated many negative emotions that remain hidden in our bodies. The following meditation helps remove those hidden emotions.
      </blockquote>
      <figcaption>&mdash;Punya Sagara</figcaption>
    </figure>
    <br>
    <div class="audio">
      <iframe width="100%" height="20" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/967274194&color=%23ffff00&inverse=true&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
      <span class="runtime">5:25</span>
    </div>
    <p><small>Audio presentation by Punya Sagara</small></p>
    <p>You can listen as meditation instructor Punya Sagara introduces a Grounding and Healing Meditation.</p>
    <hr>
    <p class="continue-links light">Get a taste of <a href="{base}/earth/fresh-mind-cooking">Freshmind Cooking</a>, learn about the <a href="{base}/earth/art-workshop">Art Workshop</a>, meet the <a href="{base}/earth/voice-of-earth">Voice of Earth</a> or explore more of the <a href="{base}/earth">Earth Element</a>.</p>
  </section>
</main>
<Journal {...journalData} />
