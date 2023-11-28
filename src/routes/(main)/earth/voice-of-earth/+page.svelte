<script>
  import { base } from '$app/paths';
  import Journal from '$lib/components/Journal.svelte';
  import JournalButton from '$lib/components/JournalButton.svelte';
  export let journalData = {
    questions: [
      'If you were teaching a first grade class what would you teach the children about the earth?',
      'When did you first think about the need to care for mother earth and what were your own ideas?',
      'What jewels are hidden within your secret depths?'
    ],
    title: 'The Voice of Earth',
    bgColor: 'hsl(70, 100%, 0%)',
    bgImg: `${base}/assets/earth/journal-voice-of-earth.jpg`,
    bgPosition: '0 55%',
    bgSize: 'cover',
    bullets: '60, 100%, 50%'
  };
  export let jourButtonPos = {
    right: '1%',
    top: '82%',
    posType: 'fixed',
    alpha: '.25',
    glow: '60,100%,100%',
    mobTop: '31%'
  };
</script>
<svelte:head>
  <title>Earth: Voice of Earth</title>
</svelte:head>
<main class="content-page bleed no-pad"  style="--grad-color: 45,75%,80%;--element-bg: linear-gradient(90deg, hsla(var(--grad-color),.125), hsla(var(--grad-color),0.9) 15%, hsla(var(--grad-color),0.9) 50%, hsla(var(--grad-color),0.7) 60%, hsla(var(--grad-color),0.95) 70%, hsla(var(--grad-color), 0.95) 90%, hsla(var(--grad-color),.25)) 0 0/100% auto no-repeat, url({base}/assets/earth/earth_dakini_bg7.webp) 0% 50%/160% auto fixed no-repeat; --element-mob-bg: linear-gradient(180deg, hsla(var(--grad-color), .7), hsla(var(--grad-color), .9)), url({base}/assets/earth/earth_dakini_bg7.webp) 0 0/auto 100vh scroll repeat; --element-color: 85, 90%, 26%; --subtitle-color: 80, 100%, 33%;" >
  <!-- use the banner for the excercise title and description -->
  <section class="video">
    <iframe class="video-player" src="https://player.vimeo.com/video/838336369?h=df48ceaf27&badge=0&autopause=0&amp;player_id=0&app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Voice of Earth"></iframe>
  </section>



  <section id="transcript" class="transcript-group">
    <div class="transcript-item">
      <h2>The Voice of Earth Transcript</h2>
      <JournalButton {...jourButtonPos} />
      <div class="transcript" style="--transcript-bg: 80, 100%, 40%; --scrollbar-thumb-color: var(--light-color); --text-shadow: .0625em .0625em .0625em var(--dark-color-alpha3);">
        <p>Thank you. Hello. I hope you are having a beautiful day here on Earth. Please could I have your attention for just a few moments? I am mother Earth, and like all mothers, I only want to give continuously to you, your families, your world. The nourishment I have to give you is immense! But I need you to care for me so that I am not depleted. If I am depleted, how can I give?</p>
        <p>Even though there has been a lapse in caring for me, I’m happy to say that my flowers still bloom, my tall strong trees still offer shade, and my grapevines still turn a deep red just for your delight. Endless rolling fields abundant with delicious food, just to be served at your table. My meadows, forests and jungles shelter and feed the most magnificent animals in your world – lions, tigers, deers, rabbits, koalas, kangaroos, horses, donkeys.</p>
        <p>Even though you may not think of it, your home is built upon me, your children run and play on me. Pyramids for the pharaohs of Egypt, castles for the royal families of France, and monasteries for monks and nuns, were all constructed upon me.</p>
        <p>In my most secret and mysterious depths, sparkling jewels and gold lay hidden. Over centuries I have tried to unveil these gradually to please you with adornments. But here we must be very cautious, or all will be taken from me, and there will be no more to give.</p> 
        <p>But it’s never too late. You can start thinking now. You can think about the garbage and toxins thrown on me that poison the food and water that all living creatures need. You can start thinking about the forests and the lands upon which your food is grown.</p>
        <p>My wish is to provide for you as long as I am beneath you. Please come home to me. I am your ground. I am your base. Take care of me so that I can take care of you.</p>
        <p>Not only am I outside of you, but I am also in you, I reside there as your base of awareness. Your inner Earth cares for you, supports you, creates your stability and steadies your emotion. Have you ever experienced your inner Earth when it is imbalanced? When you lose your ground, and feel scattered and adrift? Earth has music for those who can hear, and I will play a song for you if you listen. As we listen to one another, the familiar melody of coming home fades away any sense of separation because I am always with you.</p>
        <p>When you touch the ground, you touch the entirety of the Earth, and when you touch your heart you can be in contact with all hearts - how wonderful!</p>
        <p>So please come follow me now and explore the beauty of Earth. Perhaps you will even find some secret jewels sparkling within yourself.</p>
      </div>
    </div>
    <div class="transcript-item goto-links">
      <h3 class="side-title subtitle">Explore Earth</h3>
      <ul class="goto-content-links">
        <li><a href="{base}/earth/the-inner-critic" class="dark">The Inner Critic</a></li>
        <li><a href="{base}/earth/path-to-the-heart" class="dark">Path to the Heart</a></li>
        <li><a href="{base}/earth/kindness-to-self" class="dark">Kindness to Self</a></li>
        <li><a href="{base}/earth/sharing-earth" class="dark">Sharing the Beauty of Earth</a></li>
        <li><a href="{base}/earth/" class="dark">&#8230;and more</a></li>
      </ul>
    </div>
</section>

</main>
<Journal {...journalData} />
