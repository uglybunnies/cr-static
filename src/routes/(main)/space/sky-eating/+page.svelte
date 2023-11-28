<script>
  import { base } from '$app/paths';
  import Journal from '$lib/components/Journal.svelte';
  import JournalButton from '$lib/components/JournalButton.svelte';
  export let journalData = {
    questions: [
      'How has your sense of solidity changed from doing the practice, if at all?',
      'What makes you feel heavy and solid and what makes you feel light and open?',
      'What does the sky give to you?'
    ],
    title: 'Sky Eating',
    bgColor: 'hsl(180, 100%, 0%)',
    bgImg: `${base}/assets/space/journal-sky-eating-bg2.webp`,
    bgPosition: '0 0',
    bgSize: '100% auto',
    bullets: '240, 100%, 75%'
  };
  export let jourButtonPos = {
    right: '20%',
    top: '33%',
    posType: 'fixed',
    alpha: '.5',
    glow: '45,75%,80%',
    mobTop: '7%'
  };
</script>
<svelte:head>
  <title>Space: Sky Eating</title>
</svelte:head>
<main class="content-page" style="--grad-color: 255, 75%, 90%; --element-bg: linear-gradient(90deg, hsla(var(--grad-color),0), hsla(var(--grad-color),0.85) 15%, hsla(var(--grad-color),0.85) 75%, hsla(var(--grad-color),0)) 0 0/41em auto no-repeat, url({base}/assets/space/space-elephant-bg.webp) 0 66% /cover fixed no-repeat; --element-mob-bg: linear-gradient(90deg, hsla(var(--grad-color),0), hsla(var(--grad-color),0.85) 15%, hsla(var(--grad-color),0.85) 75%, hsla(var(--grad-color),0)), url({base}/assets/space/space-elephant-bg.webp) 57% 0/auto 100vh scroll repeat; --element-color: var(--dark-color); --subtitle-color: 255, 90%,33%;">
  <section class="banner">
    <h2>Sky Eating</h2>
    <br>
    <JournalButton {...jourButtonPos} />
  </section>
  <section class="exercise">
    <p>For centuries, Tibetan Meditation Masters have used this profound morning meditation. A renowned Buddhist master Thinley Norbu Rinpoche gave this meditation to his students in Nepal. It brings a clarity and openness to the mind and body.</p>

<ol>
  <li>Secretly go outside in the fresh clean air, and while standing, look at the blue sky. Of course, the sky doesn’t necessarily have to be blue, but it is nice if it is. Do this first thing in the morning.</li>

  <li>Then, exhale vigorously, imagining that all negativity and concepts are expelled with your breath.</li>
  
  <li>
    Next, shake your body like a rag doll releasing absolutely everything. This dispels all negativity. You can do this three times or ten times – it doesn’t matter.
    After you do this, rest and relax your mind.
  </li>
  
  <li>Then in the sky before you, if you like, visualize countless buddhas with their wisdom bodies, wisdom speech, and wisdom minds. Or you can imagine saints or other spiritual beings filling the sky. If you prefer, you can just imagine luminous blue light in the sky before you.</li>
  
  <li>Now all becomes like sky, very empty, vast and light.</li>
  
  <li>Then you take a deep breath and inhale this sky through your mouth.</li>
  
  <li>Now just relax. Don’t divide between the outer sky and the inner sky. Just purely remain and smoothly go about your day.</li>
</ol>

  </section>
</main>
<Journal {...journalData} />