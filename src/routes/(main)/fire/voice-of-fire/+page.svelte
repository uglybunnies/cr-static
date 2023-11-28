<script>
    import { base } from '$app/paths';
  import Journal from '$lib/components/Journal.svelte';
  import JournalButton from '$lib/components/JournalButton.svelte';
  export let journalData = {
    questions: [
      'What 3 things are you most passionate about and why?',
      'What 3 things are you most passionate about never doing again and why?',
      'Try to live in the warmth of your heart for one full day. Then, at night note down your experience.'
    ],
    title: 'The Voice of Fire',
    bgColor: 'hsl(70, 100%, 0%)',
    bgImg: `${base}/assets/fire/journal-voice-of-fire.webp`,
    bgPosition: '50% 0',
    bgSize: 'cover',
    bullets: '15, 100%, 60%'
  };
  export let jourButtonPos = {
    right: '1%',
    top: '82%',
    posType: 'fixed',
    alpha: '.25',
    glow: '60,100%,100%',
    mobTop: '31%'
  }
</script>
<svelte:head>
  <title>Fire: Voice of Fire</title>
</svelte:head>
<main class="content-page bleed no-pad"  style="--grad-color: 25, 100%, 85%; --element-bg: linear-gradient(90deg, hsla(var(--grad-color),.125), hsla(var(--grad-color),0.8) 15%, hsla(var(--grad-color),0.8) 50%, hsla(var(--grad-color),0.3) 60%, hsla(var(--grad-color),0.9) 70%, hsla(var(--grad-color), 0.7) 90%, hsla(var(--grad-color),.125)) 0 0/100% auto no-repeat, url({base}/assets/fire/voice-of-fire-bg.webp) 0/auto repeat;  --element-mob-bg: linear-gradient(hsla(var(--grad-color), .7), hsla(var(--grad-color), .9)), url({base}/assets/fire/voice-of-fire-bg.webp) 0 0/auto 100vh repeat; --element-color: 15, 100%, 40%; --subtitle-color: 15, 100%, 50%;" >
    <!-- use the banner for the excercise title and description -->
    <section class="video">
      <iframe class="video-player" src="https://player.vimeo.com/video/842381353?h=df48ceaf27&badge=0&autopause=0&amp;player_id=0&app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Voice of Fire"></iframe>
    </section>
    <section id="transcript" class="transcript-group">
      <div class="transcript-item">
        <h2>The Voice of Fire Transcript</h2>
        <JournalButton {...jourButtonPos} />
        <div class="transcript">
          <p>I am fire. My nature is fierce and unpredictable. I create and destroy. I rage and I soothe. My blaze is delightful; my glow is charming. I am the light and the warmth of the sun. Without my sunlight all the beauty of life could not be seen, your food could not grow and you could not stay warm. I keep you safe! When a storm looms at sea, that beacon of brilliant light bringing you safely to shore is me. When you cook for your families, that flame is me. As you tuck your children into their warm beds for the night, that warmth is me. I bring goodness and marvelous creations to you. But, if I am not in balance with my sister elements, I cannot help but become aggressive and out of control and I can cause catastrophic disasters.</p>

          <p>In these modern times intense imbalance looms everywhere. We no longer gather around the warmth of the hearth and connect to one another, nor work together to solve our problems. Now technology has almost completely taken over and there's no time for this communion. Can you see that alienation has become a big problem?</p>
          
          <p>Please come to me as my sun rises and turns the skies to rose and gold. Pause and be with these colors I have created for you. When my sunlight melts the morning dew and the bright afternoon warms the Earth, I am there to greet you. As my sun falls into the painted sky and twilight ensues, still I'm there with a candle to light your way.</p>
          
          <p>Your inner fire is actually no different from the outer fire. When your inner fire is out of control, you can be hot-headed and ablaze with anger. You also can cause great harm. Sometimes you can become unpredictable and make moves in a flash. Have you ever made a decision in the heat of the moment like meeting a beautiful girl on Monday and asking her to marry you on Tuesday? This could indicate a need to cool down. When your fire element is low, you might feel you are burned out and unable to function. That's when you need the warmth of me and must find that underlying ember.</p>
          
          <p>When your fire is balanced, your heart is warm with love and affection and you can find yourself abounding with energy, inspiration and joy. Amazingly, when you are fired up with enthusiasm, cities can be built. With the flame of burning desire, artists sculpt and paint masterpieces that grace and adorn your Earth. Your passion has helped create your world, your children, your homes, your poems and all your love songs. Never underestimate the power of your inner fire.</p>
        </div>
      </div>
      <div class="transcript-item goto-links">
        <h3 class="side-title subtitle">Explore Fire</h3>
        <ul class="goto-content-links">
          <li><a href="{base}/fire/dissolving-anger" class="dark">Dissolving Anger</a></li>
          <li><a href="{base}/fire/fire-meditation" class="dark">Fire Meditation</a></li>
          <li><a href="{base}/fire/stop-obsessive-thinking" class="dark">Stop Obsessive Thinking</a></li>
          <li><a href="{base}/fire/sharing-fire" class="dark">Sharing the Passion of Fire</a></li>
          <li><a href="../" class="dark">&#8230;and more</a></li>
        </ul>
      </div>
    </section>
</main>
<Journal {...journalData} />