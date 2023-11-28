<script>
  import { base } from '$app/paths';
  import Journal from '$lib/components/Journal.svelte';
  import JournalButton from '$lib/components/JournalButton.svelte';
  export let journalData = {
    questions: [
      'If you would like to calm your emotional state by using your breath, try the following ancient yoga technique taught by the Buddha in the sutra, Anapanasmriti. Simply focus on the air going in and out of your nostrils. After some time, note how you feel.',
      'If you would like to experiment with your inner winds, try this Tibetan healing meditation: Imagine a loved one who is sad up in the space in front of you. Then breathe in their sadness and breathe out healing love. Continue until the sorrow is transformed to love in you both.',
      'Think of times when you have felt free like the wind. What can you do to create more freedom in your life now?'
    ],
    title: 'The Voice of Wind',
    bgColor: 'hsl(255, 100%, 0%)',
    bgImg: `${base}/assets/wind/journal-voice-of-wind-bg2.webp`,
    bgPosition: '55% 100%',
    bgSize: 'auto 100%',
    bullets: '120, 100%, 50%'
  };
  export let jourButtonPos = {
    right: '1%',
    top: '82%',
    posType: 'fixed',
    alpha: '.25',
    glow: '140,75%,50%',
    mobTop: '31%'
  };
</script>
<svelte:head>
  <title>Wind: Voice of Wind</title>
</svelte:head>
<main class="content-page bleed no-pad"  style="--grad-color: 170, 100%, 100%; --element-bg: linear-gradient(90deg, hsla(var(--grad-color), 0), hsla(var(--grad-color), .5) 15%, hsla(var(--grad-color), .8) 45%, hsla(var(--grad-color), .8) 55%, hsla(var(--grad-color), 0) 66%, hsla(var(--grad-color), .7) 70%, hsla(var(--grad-color), .7) 80%), url({base}/assets/wind/voice-of-wind-bg3.webp) 0% 100%/120% auto fixed no-repeat; --element-mob-bg: linear-gradient(180deg, hsla(var(--grad-color), .5), hsla(var(--grad-color), .8)), url({base}/assets/wind/voice-of-wind-bg3.webp) 0 0/auto 100vh scroll repeat; --element-color: 140, 75%, 33%; --subtitle-color: 140, 75%, 40%; --copy-color: var(--dark-neutral);" >
  <!-- <main class="content-page bleed no-pad"  style="--grad-color: 255, 75%, 90%; --element-bg: linear-gradient(90deg, hsla(var(--grad-color),.125), hsla(var(--grad-color),0.9) 15%, hsla(var(--grad-color),0.9) 50%, hsla(var(--grad-color),0.7) 60%, hsla(var(--grad-color),0.95) 70%, hsla(var(--grad-color), 0.95) 90%, hsla(var(--grad-color),.25)) 0 0/100% auto no-repeat, url({base}/assets/space/voice-of-space-bg.webp) 0% 0/100% auto fixed no-repeat; --element-color: var(--dark-color); --subtitle-color: 255, 90%,33%;" > -->
  <!-- use the banner for the excercise title and description -->
  <section class="video">
    <iframe class="video-player" src="https://player.vimeo.com/video/842380339?badge=0&autopause=0&amp;player_id=0&app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Voice of Space"></iframe>
  </section>



  <section id="transcript" class="transcript-group">
    <div class="transcript-item">
      <h2>The Voice of Wind Transcript</h2>
      <JournalButton {...jourButtonPos} />
      <div class="transcript" style="--transcript-bg: 80, 100%, 40%; --scrollbar-thumb-color: var(--light-color); --text-shadow: .0625em .0625em .0625em var(--dark-color-alpha3);">
        <p>Good day. I am the wind—the one element who travels the globe continually. In fact, you might say I am the world traveler of our family. You know me, I’m sure. I am the gentle breeze against your cheek and the one who cools you on warm summer days. I dance with my sisters and all creations on Earth. My favorite sport is making the ocean waves. Have you ever surfed one of my prize-winning waves? Have you heard their sound as they break into the shore? I especially love to dance near the ocean. The salt fills me and calms me before I travel on.</p>

        <p>I am music. Every sound rides with me as I whistle and wander across the globe. Without me, no flute could be heard. Famous maestros direct my symphonies and their melodious sounds echo throughout time. All things on Earth are my instruments. The loose pipes banging on the barn, the leaves rustling, the dry branches of ancient trees crackling and breaking, the choir singing, the drums beating, the sitars playing while the ragas fill the sunrise sky—have you heard my concertos? As you speak, your voice rides on me. Your baby’s first word needed me. You couldn’t even have a fight with your husband without me. As you can see, I’m extremely valuable.</p>
        
        <p>You can always find me. The willow tree bows with grace as I pass by. The rice paddies shimmer like gentle waves when I am near. Seeds and pollen are dispersed, making trees, flowers and food flourish on mother Earth. I whirl and dance, but never dance the same dance twice. Often I am very lonely. Just when I want to stay awhile and make a new friend or rest in a giant redwood tree, I have to blow on. The saddest thing for me, however, is when the elements are severely imbalanced, and I am forced to increase my speed and ferocity, creating tornados, hurricanes, and increased forest fires. I am very sorry about all this.</p>
        
        <p>Your inner elements and the outer elements are always mingling and are dependent on one another. I want you to know we are always together. In fact, we are inseparable—we unite with each breath. You flow into me; I flow into you. I move all your thoughts and emotions. You can notice how your thoughts fly away just like wispy clouds moving through an open sky.</p>
        <p>Please don’t pressure me. If I get blocked and stuck with nowhere to go, this causes your emotions to become extreme—anxiety, anger, weeping, and much more. Yet, when you relax into your natural breath and gently breathe with me, we float together into a world of peace.</p>
      </div>
    </div>
    <div class="transcript-item goto-links">
      <h3 class="side-title subtitle">Explore Wind</h3>
      <ul class="goto-content-links">
        <li><a href="{base}/wind/inaction-to-action" class="dark">Inaction to Action</a></li>
        <li><a href="{base}/wind/music-chamber" class="dark">Music Chamber</a></li>
        <li><a href="{base}/wind/changing-your-mood" class="dark">Changing Your Mood</a></li>
        <li><a href="{base}/wind/sharing-wind" class="dark">Sharing the Beauty of Wind</a></li>

        <li><a href="../" class="dark">&#8230;and more</a></li>
      </ul>
    </div>
</section>

</main>
<Journal {...journalData} />
