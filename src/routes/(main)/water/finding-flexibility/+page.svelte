<script>
  import { base } from '$app/paths';
  import Journal from '$lib/components/Journal.svelte';
  import JournalButton from '$lib/components/JournalButton.svelte';
  export let journalData = {
    questions: [
      'If you were more flexible in your life, what would you do differently?',
      'What happens in relationships when you are too flexible and have no boundaries, much like when a river overflows its banks?',
      'What can you change in your life experience and what can you not change? To be very clear, try making two separate lists, in order to clarify these personal points.'
    ],
    title: 'Finding Flexibility',
    bgColor: 'hsl(180, 100%, 0%)',
    bgImg: `${base}/assets/water/journal-finding-flexibility.webp`,
    bgPosition: '50% 50%',
    bgSize: 'cover',
    bullets: '185, 100%, 50%'
  };
  export let jourButtonPos = {
    right: '10%',
    top: '10%',
    posType: 'fixed',
    alpha: '.25',
    glow: '211,100%,80%',
    mobTop: '7%'
  };
</script>

<svelte:head>
  <title>Water: Finding Flexibility</title>
</svelte:head>
<main class="content-page center" style="--element-bg: url({base}/assets/water/raindrops.webp) 0 75%/100% auto no-repeat;--element-mob-bg: url({base}/assets/water/raindrops.webp) 0 0/auto 100vh repeat; --element-color: 211, 90%, 26%; --subtitle-color: 176, 100%, 33%; --cs1: 280, 100%, 45%; --cs2: 255, 100%, 50%;">

  <!-- use the banner for the excercise title and description -->
  <section class="banner">
    <h2>Finding Flexibility </h2>
    <p class="subtitle shiftgrad"><span>How Flexible is Your Mind?</span></p>
<br>
      <JournalButton {...jourButtonPos} />
  </section>

  <section class="exercise contrast">
    
    <p>Resilience recognises difficulty and is adaptable, patient and playful in the midst of change. </p>

    <p>Examples of nature's resilience surround us and can be seen everywhere. Rivers find ways to flow around newly fallen rocks. Flora and fauna return after fire sweeps through. </p>
    <p>Willow trees and bamboo bend to survive when strong winds blow. We neither want to be swept away completely by change nor stubbornly resist it.</p>
    <p>So to begin to work with flexibility we can think about what we can change or control and what we can't. Surprisingly, merely asking the question, "Is this within my control?" brings acceptance and a shift in perspective.</p>
    <div class="group umbrella" style="--background: url({base}/assets/water/uumbrella.webp) 81% 0%/28em auto no-repeat;">
      <div class="item a-right">
        <h3 class="subtitle">we can't</h3>
        <ul>
          <li>Control the weather</li>
          <li>Control other people's thoughts or feelings</li>
          <li>Change what we need <br> (food, clothing, shelter)</li>
          <li>Change the past</li>
          <li>Halt the flow of change</li>
          <li>Eradicate war… yet</li>
        </ul>
      </div>
      <div class="item">
        <h3 class="subtitle">we can</h3>
        <ul>
          <li>Wear the right clothes</li>
          <li>Be aware of our own thoughts and feelings</li>
          <li>Change what we want <br> (new phone, big tv, a dog)</li>
          <li>Focus on the present</li>
          <li>Explore what change offers</li>
          <li>Cultivate a peaceful mind</li>
        </ul>
      </div>
    </div>
    <hr>
    <p class="continue-links light">Listen to the <a href="{base}/water/podcast-resilience">Resilience Podcast</a>,
      try <a href="{base}/water/water-meditation">Water Meditation</a>, practice the <a href="{base}/water/art-of-listening">Art of Listening</a> or explore more of the <a href="{base}/water">Water Element</a>.</p>
  </section>
</main>
<Journal {...journalData} />
