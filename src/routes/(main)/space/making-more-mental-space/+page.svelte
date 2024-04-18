<script>
  import { base } from '$app/paths';
  import Journal from '$lib/components/Journal.svelte';
  import JournalButton from '$lib/components/JournalButton.svelte';
  export let journalData = {
    questions: [
      'What does mental space mean to you?',
      'When you clean and order your house, how does that affect your inner space?',
      'When you complete this exercise and your concerns are addressed, what is left?'
    ],
    title: 'Making More Mental Space',
    bgColor: 'hsl(70, 100%, 0%)',
    bgImg: `${base}/assets/space/journal-making-space.webp`,
    bgPosition: '50% 0',
    bgSize: 'cover',
    bullets: '240, 100%, 75%'
  };
  export let jourButtonPos = {
    right: '15%',
    top: '10%',
    posType: 'fixed',
    alpha: '.25',
    glow: '255,100%,100%',
    mobTop: '7%'
  };
</script>

<svelte:head>
  <title>Space: Making More Mental Space</title>
</svelte:head>
<main class="content-page center" style="--grad-color: 255, 75%, 90%; --element-bg: linear-gradient(90deg, hsla(var(--grad-color),0),hsla(var(--grad-color),0.5) 10%, hsla(var(--grad-color),0.7) 20%,hsla(var(--grad-color),0.9) 50%, hsla(var(--grad-color),0.7) 80%, hsla(var(--grad-color),.5) 90%, hsla(var(--grad-color),0) 100%) 0 0/100% auto no-repeat, url({base}/assets/space/making-mental-space-bg.webp) 0 0/ cover fixed no-repeat; --element-mob-bg: linear-gradient(90deg, hsla(var(--grad-color), .9), hsla(var(--grad-color), .7)), url({base}/assets/space/making-mental-space-bg.webp) 0 0/auto 100vh scroll repeat;  --element-color: var(--dark-color); --subtitle-color: 255, 90%,33%; --cs2: 255, 50%, 75%; --cs1: 180, 100%, 33%;">
  <section class="banner">
    <h2>Making More Mental Space <small>3:14</small></h2>
    <p class="subtitle shiftgrad">
      <span>Clearing Space Is Finding Your Power Base</span>
    </p>
  </section>
  <section class="exercise">
    <JournalButton {...jourButtonPos} />
    <div class="audio">
      <iframe width="100%" height="20" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/996577441%3Fsecret_token%3Ds-T182k3ZAoxc&color=%23ffff00&inverse=true&auto_play=false&show_user=true" title="Making More Mental Space"></iframe>
      <span class="runtime">3:14</span>
    </div>
    <p><small>Audio presentation by Sandra Scales, Ph. D.</small></p>
    <p>When your mind is crowded and overwhelmed, here is a simple technique developed at Chicago University that will clear some mental space so you can begin to take step-by-step action. Thousands of therapists have used this method over the years with great success. Before you start, have a small stack of paper and a pen ready.</p>
    
    <ol>
      <li>Close your eyes and ask yourself, What is the main thing bothering me now? Write this on a piece of paper and move it to one side.</li>
      <li>What else comes to mind that is bothering you? Write that out on a separate piece of paper and move that to one side.</li>
      <li>Ask again, What is bothering me now? Write that down as well, on a separate piece of paper and put it aside.</li>
      <li>Anything else? If so, write it down and put it aside. Keep doing this until nothing else comes to mind when you ask the question.</li>
      <li>Then when your concerns are all written and put aside, how do you feel? Pause and take some time in the space you've created (keep the papers on the side).</li>
      <li>When you are ready, read one of your concerns. Let that concern come back into your mind and take action on it.</li>
      <li>Keep the papers until all the written concerns are resolved.</li>
    </ol>

    <p>You are learning how to manage your concerns one-by-one without becoming overwhelmed.</p>
<hr>
    <p class="continue-links light">Continue exploring with <a href="{base}/space/space-meditation">Space Mediation</a> or <a href="{base}/space/present-moment-meditation">Present Moment Meditation</a>, meet the <a href="{base}/space/voice-of-space">Voice of Space</a> or explore more of the <a href="{base}/space">Space Element</a>.</p>
  </section>
  <section class="creator-bio">
    <h3>About the Instructor</h3>
      <p>Dr. Scales is an author and photographer. Her works include <em>Sacred Voices of the Nyingma Masters</em> and <em>Sacred Words Spoken</em>. She holds a Ph.D. in East-West Psychology and consults privately.</p>
  </section>
</main>
<Journal {...journalData} />
