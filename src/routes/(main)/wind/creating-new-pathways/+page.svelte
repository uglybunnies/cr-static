<script>
  import { base } from '$app/paths';
  import Journal from '$lib/components/Journal.svelte';
  import JournalButton from '$lib/components/JournalButton.svelte';
  export let journalData = {
    questions: [
      'Consider what actions bring you the most joy throughout your day and write them down to remember.',
      'When was a time you decided to make major changes that enhanced your life greatly?',
      'If you were to design a new path going forward for yourself, what would it look like? If you have time, draw it or write about it.'
    ],
    title: 'Creating New Pathways',
    bgColor: 'hsl(180, 100%, 0%)',
    bgImg: `${base}/assets/wind/journal-creating-new-pathways-bg2.webp`,
    bgPosition: '45% 0%',
    bgSize: 'auto 100%',
    bullets: '120, 100%, 50%'
  };
  export let jourButtonPos = {
    right: '28%',
    top: '18%',
    posType: 'fixed',
    alpha: '.25',
    glow: '250,25%,50%',
    mobTop: '32%'
  };
</script>
<svelte:head>
  <title>Wind: Creating New Pathways</title>
</svelte:head>
<main class="content-page" style="--grad-color: 260, 100%, 15%; --element-bg: url({base}/assets/wind/dark-wind-horse.webp) 0 50%/100% auto fixed; --element-mob-bg: linear-gradient(180deg, hsla(var(--grad-color), .125) 33%, hsla(var(--grad-color), .8)), url({base}/assets/wind/dark-wind-horse.webp) 66% 0/auto 120vh; --element-color:240, 75%, 75%; --subtitle-color:240, 75%, 85%; --copy-color: var(--light-color); --cs1: 240, 75%, 75%; --cs2: 60, 100%, 95%;">
  <section class="banner">
    <h2>Creating New Pathways in the Brain</h2>
    <p class="subtitle shiftgrad"><span>Want To Give Your Brain A Happiness Workout?</span></p>
    <JournalButton {...jourButtonPos} />
  </section>
  <section class="exercise">
    <p>Here are five science-based exercises for increasing happiness, well-being and mental health. This model originated at Harvard University and has been used around the globe with highly positive results. These are best done in five minutes or less each day.</p>

<h3 class="subtitle-2">Here is a Way to Create Happiness Habits in Just Minutes a Day</h3>
<br>
<ol>
  <li>Take two minutes and write three new things you are grateful for. Commit yourself to do this consecutively for 21 days. This repetition trains the brain to scan for positive pathways instead of for threats and is an expedient way to train the brain.</li>

  <li>Enjoy 15 minutes a day of cardio activity. This activity allows your brain to relive positive experiences and trains the brain to know “My behavior makes a difference.” This is optimism.</li>

  <li>For two minutes a day journal one positive experience that you have had in the last 24 hours. This experience can be very small, such as sharing laughter with your friends. This journaling allows your brain to relive positive experiences, teaching you that your behavior matters.</li>

  <li>Take a break and take a breath. To pause and take a deep breath helps the mind to focus on one thing at a time, lowers stress and increases happiness.</li>

  <li>For two minutes each day, express kindness to a new person. Do this via text or email. This interaction creates a social connection and correlates to long-term happiness.</li>
</ol>
<hr>
<p>
  Learn about <a href="{base}/wind/generosity-and-the-brain">Generosity and The Brain</a>, listen to the sounds of the <a href="{base}/wind/music-chamber">Music Chamber</a>, try <a href="{base}/wind/changing-your-mood">Changing Your Mood</a> or explore more of the <a href="{base}/wind">Wind Element</p>
  </section>
</main>
<Journal {...journalData} />