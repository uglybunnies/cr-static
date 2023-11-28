<script>
  import { base } from '$app/paths';
  import Journal from '$lib/components/Journal.svelte';
  import JournalButton from '$lib/components/JournalButton.svelte';
  export let journalData = {
    questions: [
      'When you get stuck, what helps you find your flow?',
      'When have you experienced the greatest flow in your life?',
      'When feeling ‘“in flow”, stop and ask yourself, “What feels different about this state?” Then note it down and reflect on it now and then.'
    ],
    title: 'Flow',
    bgColor: 'hsl(180, 100%, 0%)',
    bgImg: `${base}/assets/water/journal-podcast-flow.jpg`,
    bgPosition: '0 0',
    bgSize: 'cover',
    bullets: '185, 100%, 50%'
  };
  export let jourButtonPos = {
    right: '30%',
    top: '10%',
    posType: 'fixed',
    alpha: '.7',
    glow: '60,100%,100%',
    mobTop: '15%'
  };
</script>

<svelte:head>
  <title>Water: Podcast--Flow</title>
</svelte:head>
<main class="content-page"  style="--element-bg: linear-gradient(90deg, hsla(180,25%,85%,0), hsla(180,25%,85%,0.85) 15%, hsla(180,25%,85%,0.85) 75%, hsla(180,25%,85%,0)) 0 0/41em auto no-repeat, linear-gradient(hsla(180, 100%, 50%, .4), hsla(180, 100%, 33%, .4)) , url({base}/assets/water/water_dakini_bg7.webp) 75% 100%/220% auto fixed no-repeat; --element-mob-bg: linear-gradient(180deg, hsla(180,25%,85%,0.3) 33%, hsla(180,25%,85%,.8)), url({base}/assets/water/water_dakini_bg7.webp) 50% 50%/auto 200vh scroll repeat; --element-color: 211, 90%, 26%; --subtitle-color: 176, 100%, 33%; background-blend-mode: normal, hue, normal; --cs1: 193, 100%, 55%; --cs2: 300, 100%, 60%;">
  <!-- use the banner for the excercise title and description -->
  <section class="banner">
    <h2>Flow</h2>
    <p class="subtitle shiftgrad">
      <span>
        What Is Flow?<br>
        Do You Have It?<br>
        Does It Help You?
      </span>
    </p>
    <br>
      <JournalButton {...jourButtonPos} />
  </section>
  <section class="exercise">
    <div class="audio">
      <iframe width="100%" height="20" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/982577275%3Fsecret_token%3Ds-s1t15TT3BPC&color=%23ffff00&inverse=true&auto_play=false&show_user=true"></iframe>
      <span class="runtime">19:06</span>
    </div>
    <br>
    <p>In this episode, Grey and Lily discuss resilience and how they find their natural rhythms. They invite us to ponder M. H. Nichols poem "For The Overwhelmed". <br></p>
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
