<script>
  import { base } from '$app/paths';
  import Journal from '$lib/components/Journal.svelte';
  import JournalButton from '$lib/components/JournalButton.svelte';
  export let journalData = {
    questions: [
      'How can you bring creativity into the mundane aspects of your daily life (e.g, dancing while workng the kitchen, dressing up beautifully on a Saturday for no reason, arranging snacks for your children in a playful design on the plate).',
      'What aspects of nature\'s creativity do you find wondrous?',
      'If you could break through your trepidation and give yourself freedom to express your genuine self creatively, how would that look?'
    ],
    title: 'Creativity Podcast',
    bgColor: 'hsl(180, 100%, 0%)',
    bgImg: `${base}/assets/fire/journal-podcast-creativity-bg2.webp`,
    bgPosition: '25% 0',
    bgSize: 'auto 100%',
    bullets: '15, 100%, 60%'
  };
  export let jourButtonPos = {
    right: '30%',
    top: '30%',
    posType: 'fixed',
    alpha: '.33',
    glow: '60,100%,100%',
    mobTop: '7%'
  };
</script>

<svelte:head>
  <title>Fire: Podcast--Creativity</title>
</svelte:head>
<main class="content-page"  style="--grad-color: 5, 90%, 85%; --element-bg: linear-gradient(90deg, hsla(var(--grad-color),0), hsla(var(--grad-color),0.8) 15%, hsla(var(--grad-color),0.8) 45%, hsla(var(--grad-color),0) 100%), url({base}/assets/fire/podcast-creativity-bg.webp) 50% 100%/200% auto fixed no-repeat; --element-mob-bg: linear-gradient(hsla(var(--grad-color), .5), hsla(var(--grad-color), .5)), url({base}/assets/fire/podcast-creativity-bg.webp) 0 0/auto 100vh scroll repeat; --element-color: 5, 90%, 33%; --subtitle-color: 5, 90%, 50%; background-blend-mode: screen, normal; --cs2:310, 55%, 50%; --cs1:25, 100%, 50%;">
  <!-- use the banner for the excercise title and description -->
  <section class="banner">
    <h2>Creativity Podcast</h2>
    <p class="subtitle shiftgrad"><span>
      Catch The Wave Of Inspiration!<br>
        Enthrone Your Creativity!
    </span></p>
    <br>
      <JournalButton {...jourButtonPos} />
  </section>
  <section class="exercise">
    <div class="audio">
      <iframe width="100%" height="20" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/982577275%3Fsecret_token%3Ds-s1t15TT3BPC&color=%23ffff00&inverse=true&auto_play=false&show_user=true"></iframe>
      <span class="runtime">22:00</span>
    </div>
    <br>
    <p>In a podcast Lily and Gray explore the topic of creativity. They discuss the pressure that comes with creating something supposedly good and the vulnerabilities of sharing their creations with others. They further discuss how they temper their mind’s critic through the practice of self-love, relaxed discipline and playfulness. They also talk about the challenges they face while learning to live in this creative state as they endeavor to stay open to the wave of inspiration.<br></p>
    <figure class="quotes" style="--max-width: 15em;">
      <blockquote>

        Let the natural rhythm of the day<br>
        remind you to pace yourself.<br>
        Rise up with with the sun<br>
        and settle down with the moon.
      </blockquote>
      <figcaption>&mdash;M. H. Nichols</figcaption>
    </figure>
  </section>
  <section class="creator-bio">
    <h3>About the Hosts</h3>
    <div class="flex-group">
      <img src="{base}/assets/lilyandgraypinto.jpg" alt="Podcasting twins, Gary and Lily Pinto">
      <p>Gray Pinto is a student of Acting, Directing and Screenwriting and is committed to serving the world with his art. Lily Pinto is a songwriter and musician. She hopes to bring music that reminds us what love is, how it feels and how it changes everything.</p>
    </div>
  </section>
</main>
<Journal {...journalData} />