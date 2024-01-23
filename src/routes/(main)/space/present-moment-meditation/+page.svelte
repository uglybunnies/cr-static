<script>
  import { base } from '$app/paths';
  import Journal from '$lib/components/Journal.svelte';
  import JournalButton from '$lib/components/JournalButton.svelte';  export let journalData = {
    questions: [
      'When you escape mentally from the challenges of the present moment where does your mind take you?',
      'When you are with others do they notice if your mind is somewhere else?',
      'What is it like for you to “Be here now” and be truly present?'
    ],
    title: 'Present Moment Meditation',
    bgColor: 'hsl(70, 100%, 0%)',
    bgImg: `${base}/assets/space/journal-present-moment.webp`,
    bgPosition: '50% 100%',
    bgSize: 'cover',
    bullets: '240, 100%, 75%'
  };
  export let jourButtonPos = {
    right: '25%',
    top: '40%',
    posType: 'fixed',
    alpha: '.25',
    glow: '25,100%,75%',
    mobTop: '10%'
  };
</script>
<svelte:head>
  <title>Space: Present Moment Meditation</title>
</svelte:head>

  <!-- <main class="content-page center" style="--grad-color: 255, 50%, 25%; --element-bg: linear-gradient(90deg, hsla(var(--grad-color), .5), hsla(var(--grad-color),0.7) 20%,hsla(var(--grad-color),0.9) 50%, hsla(var(--grad-color),0.7) 80%, hsla(var(--grad-color), .5) 90%, hsla(var(--grad-color), .5) 100%) 0 0/100% auto no-repeat, url({base}/assets/space/present-moment-meditation-bg.webp) 0 0/ cover fixed no-repeat;  --element-color: 285, 40%, 75%; --subtitle-color: 285, 100%, 80%; --copy-color: var(--light-color); background-blend-mode: color-burn, normal;"> -->
    <main class="content-page" style="--grad-color: 255, 50%, 80%; --element-bg: linear-gradient(90deg, hsla(var(--grad-color), .15), hsla(var(--grad-color),0.25) 15%,hsla(var(--grad-color),0.25) 50%, hsla(var(--grad-color),0.15)) 0 0/100% auto no-repeat, url({base}/assets/space/present-moment-meditation-bg-2.webp) 0 70%/ cover fixed no-repeat; --element-mob-bg: linear-gradient(90deg, hsla(var(--grad-color), .15), hsla(var(--grad-color), .3) 15%, hsla(var(--grad-color), .3) 85%, hsla(var(--grad-color), .15)), url({base}/assets/space/present-moment-meditation-bg-2.webp) 49% 0/auto 100vh scroll repeat;  --element-color: 255, 50%, 40%; --subtitle-color: 255, 50%, 50%; background-blend-mode:  normal; --cs2:120, 75%, 66%; --cs1: 117, 100%, 29%;">
  <section class="banner">
    <h2>Present Moment Meditation</h2>
    <p class="subtitle shiftgrad"><span>Are You Here Now?</span></p>
    <JournalButton {...jourButtonPos} />
  </section>
  <section class="exercise">
    <figure class="quotes" style="--max-width: 13em;">
      <blockquote>
          When we are holding<br>
          to the spell of the past,<br>
          how can we focus<br>
          on what is in front of us?
      </blockquote>
      <figcaption>
        &mdash;The Ramayana
      </figcaption>
    </figure>
    <div class="audio">
      <iframe width="100%" height="20" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/965350666%3Fsecret_token%3Ds-ioYJpHG5i34&color=%23ffff00&inverse=true&auto_play=false&show_user=true"></iframe>
      <span class="runtime">9:04</span>
    </div>
    <p><small>Audio presentation by Punya Sagara.</small></p>

    <p>Often anxiety and discomfort come from concerns about the past and worries about the future. In the above meditation, Punya Sagara guides us into the beauty of the present moment. Punya Sagara is a meditation instructor from one of the great Himalayan wisdom traditions in Nepal.</p>

  </section>
</main>
<Journal {...journalData} />