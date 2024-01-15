<script>
  import { base } from '$app/paths';  import Journal from '$lib/components/Journal.svelte';
  import JournalButton from '$lib/components/JournalButton.svelte';
  export let journalData = {
    questions: [
      'What are the various roles you effortlessly flow between each day such as father, mother, teacher, or artist? Which one is your favorite?',
      'What flood-like emotions can cause a disaster for you and how do you prevent yourself from being completely swept away?',
      'What rocks and boulders are in your life right now and how can you flow around them with more ease?'
    ],
    title: 'Voice of Water',
    bgColor: 'hsl(180, 100%, 0%)',
    bgImg: `${base}/assets/water/journal-voice-of-water.webp`,
    bgPosition: '0% 66%',
    bgSize: 'cover',
    bullets: '185, 100%, 50%'
  };
  export let jourButtonPos = {
    right: '1%',
    top: '82%',
    posType: 'fixed',
    alpha: '.4',
    glow: '60,100%,100%',
    mobTop: '31%'
  };
</script>

<svelte:head>
  <title>Water: Voice of Water</title>
</svelte:head>
<main class="content-page bleed no-pad"  style="--grad-color: 180,25%,85%; --element-bg: linear-gradient(90deg, hsla(var(--grad-color),.125), hsla(var(--grad-color),0.75) 15%, hsla(var(--grad-color),0.85) 45%, hsla(var(--grad-color),0.5) 60%, hsla(var(--grad-color),0.85) 75%, hsla(var(--grad-color),0.75) 90%, hsla(var(--grad-color),.25)) 0 0/100% auto no-repeat, linear-gradient(hsla(200, 100%, 25%, .6), hsla(185, 51%, 50%, .8)), url({base}/assets/water/water-element-lg-bg-lighten.webp) 100% 100%/150% auto no-repeat fixed; --element-mob-bg: linear-gradient(180deg, hsla(200, 100%, 50%, .5), hsla(185, 51%, 88%, .7)), url({base}/assets/water/water-element-lg-bg-lighten.webp) 0 0/auto 100vh repeat scroll; --element-color: 211, 85%, 26%;  --subtitle-color: 176, 100%, 40%;" >
  <!-- use the banner for the excercise title and description -->
  <section class="video">
    <iframe class="video-player" src="https://player.vimeo.com/video/793644954?h=bc2da611a7?autoplay=1&autopause=1" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
  </section>

  <section id="transcript" class="transcript-group">

    <div class="transcript-item">
        <h2>The Voice of Water Transcript</h2>

      <JournalButton {...jourButtonPos} />
        <div class="transcript" style="--transcript-bg: 195, 60%, 55%; --scrollbar-thumb-color: var(--light-color); --text-shadow: none;">
          <p>
          Hello, I am water and I am the shapeshifter of all the elements. Every form I take is exquisite. I have so many useful and gorgeous forms, it's hard for me not to be somewhat arrogant. Furthermore, if you don't mind me saying, I am beautiful. Sometimes my sisters tell me I'm a bit full of myself, but that's absurd, so I just ignore them and go splash in the surf.
          </p>
          <p>
          You can easily find me right now. Just turn on the tap and feel my cool, elusive energy that cleanses your hands and refreshes everything in your world. I'm the raindrop disguised as a snowflake and I am the mirror in the quiet lake reflecting the moon and the stars. Even with disguises, I always remember who I am. Do you wear disguises? Do you always remember who you are?
          </p>
          <p>
          I can fall from the greatest heights, freely, without fear and never be hurt. I simply flow over rocks and boulders, following the path of least resistance. The rivers of your world, moving toward the sea, have for centuries carried your cargo, from port to port. My many colored clouds are the art in the sky and I am the artist. Have you noticed how my clouds appear, change and disappear? I have heard that your thoughts are like my clouds, is that true?
          </p>
          <p>
          My raindrops can flood and crush seaports and villages and landslides caused by me can cover your homes in a moment's notice. This is too intense for me to speak about. Imagine being me, dependent on the balance of all nature and powerless to stop these horrible events.
          </p>
          <p>
          My beloved turquoise, blue and deep green oceans are a secret world of wondrous creatures. Hundreds of different fish are a display of divine color and form, darting and swirling like a never-ending ballet production. Have you ever breathed in the fragrance of the ocean or tasted the salt on your lips? When you gaze over the ocean do you remember the mysterious world beneath?
          </p>
          <p>
          Even with all this glory, so much danger threatens. Cans and plastic are filling my oceans. Fish get entangled and die. Poison and trash are in my rivers and can enter your drinking water. Schools of lovely small fish perish by the thousands. Please, for the sake of all we hold dear, remember to keep our waters pure and safe.
          </p>
          <p>
          Your inner water is your life blood and when your elements are in balance, your inner water helps your mind relax and be fluid so it can adapt to rocky circumstances. Haven't you ever been with someone who has no boundaries and who seeps into your life with invasive questions flowing like water, no banks on the river?   What about a person with a crackling dry voice and rigid body language? Too much, too little, it's all a matter of balance.
          </p>
          <p>
          Do you know that in some places when a person is crying or upset, everyone runs to give them a glass of water to soothe them? You see, I am a healer. My water can be your medicine. Do think about all this. Remember to keep your river banks healthy and balance the waves of your emotions.
          </p>
          <p>
          If you would like, please come now and explore with me the beauty of water.
          </p>
        </div>
      </div>
      <div class="transcript-item goto-links">
        <h3 class="side-title subtitle">Explore Water</h3>
        <ul class="goto-content-links">
          <li><a href="../art-of-listening" class="dark">The Art of Listening</a></li>
          <li><a href="../finding-flexibility" class="dark">Finding Flexibility</a></li>
          <li><a href="../water-meditation" class="dark">Water Meditation</a></li>
          <li><a href="../sharing-water#slide-1" class="dark">Sharing Visions of Water</a></li>
          <li><a href="../" class="dark">&#8230;and more</a></li>
        </ul>
      </div>
  </section>
</main>
<Journal {...journalData} />
