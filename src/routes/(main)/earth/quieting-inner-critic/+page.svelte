<script>
  import { base } from '$app/paths';
  import Journal from '$lib/components/Journal.svelte';
  import JournalButton from '$lib/components/JournalButton.svelte';
  export let journalData = {
    questions: [
      'When you hear criticism from others, how does it influence you?',
      'When you create an inner voice that is supportive, how does that influence you?',
      'How can you encourage your sense of self-confidence today?'
    ],
    title: 'Quieting the Inner Critic',
    bgColor: 'hsl(70, 100%, 0%)',
    bgImg: `${base}/assets/earth/journal-quieting-inner-critics.webp`,
    bgPosition: '50% 0',
    bgSize: 'auto 100%',
    bullets: '60, 100%, 50%'
  };
  export let jourButtonPos = {
    right: '33%',
    top: '33%',
    posType: 'fixed',
    alpha: '.5',
    glow: '85,75%,15%',
    mobTop: '8%'
  };
</script>

<svelte:head>
  <title>Earth: Quieting the Inner Critic</title>
</svelte:head>
<main class="content-page"  style="--grad-color: 200,20%,10%; --element-bg:  linear-gradient(90deg, hsla(var(--grad-color),0), hsla(var(--grad-color),0.3) 5%, hsla(var(--grad-color), 0.5) 25%, hsla(var(--grad-color),.5) 55%, hsla(var(--grad-color),.3) 60%, hsla(var(--grad-color),0) 75%), url({base}/assets/earth/quieting-the-inner-critic-bg.webp) 0 33%/cover no-repeat; --element-mob-bg: linear-gradient(hsla(var(--grad-color), .6), hsla(var(--grad-color), .6)),url({base}/assets/earth/quieting-the-inner-critic-bg.webp) 0 0/auto 100vh repeat; --desc-bg-color: hsla(45, 50%, 75%, .9); --element-color: 85, 90%, 33%; --subtitle-color: 80, 90%, 33%; --copy-color: var(--light-color);--cs1:320, 100%, 80%; --cs2: 320, 100%, 66%;">
  <!-- use the banner for the excercise title and description -->
  <section class="banner">
    <h2>Quieting the Inner Critic </h2>
    <p class="subtitle shiftgrad"><span>“Shame On You!”</span></p>
  </section>
  <section class="exercise">
      <JournalButton {...jourButtonPos} />

    <blockquote>
      <p>“When are you ever going to do that right?” <br>
      “Look at your friends! They can manage, so why can't you?” <br>
      “You're so lazy! What's the matter with you?”</p>
    </blockquote>
    <p>Do you have an inner voice that shames you and demeans you or one that criticizes everything you do? These inner messages erode our confidence and dignity and can  limit our ability to give and to love. The following three techniques quiet the inner critic.
    </p><br>
    <h3>Three Ways To Silence The Inner Critic</h3>
    <ol>
      <li>Imagine turning the volume down on the critical voice as if it were a radio or&#8230;</li>
      <li>
        Imagine the sound of the critic changing to a cartoonish voice. Make it very squeaky and silly or&#8230;
      </li>
      <li>
        Imagine the critic's voice and how it makes you feel, zooming out into space, with the moon and stars, so that you can barely hear it. The point is, move that voice out of your head.
      </li>
    </ol><br>

    <p>Be creative. Make your own routine and practice this anytime the inner critic arises. Please remember that establishing a new habit requires repetition. Repeat these techniques as often as possible.</p><br>
  </section>
</main>
<Journal {...journalData} />
