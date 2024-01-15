<script>
  import { base } from '$app/paths';
  import Journal from '$lib/components/Journal.svelte';
  import JournalButton from '$lib/components/JournalButton.svelte';
  export let journalData = {
    questions: [
      'Where does your inner space meet outer space?',
      'Right now, if you imagine seeing the problem you are facing floating in the middle of vast space, how does this distance bring a fresh perspective?',
      'Master photographers value the presence of objects and the space around them equally when creating their art. What happens if you begin to notice the space around objects as well as the objects in your field of vision?'
    ],
    title: 'The Voice of Space',
    bgColor: 'hsl(255, 100%, 0%)',
    bgImg: `${base}/assets/space/journal-voice-of-space.webp`,
    bgPosition: '0 0',
    bgSize: 'cover',
    bullets: '240, 100%, 75%'
  };
  export let jourButtonPos = {
    right: '1%',
    top: '82%',
    posType: 'fixed',
    alpha: '.25',
    glow: '60,15%,50%',
    mobTop: '31%'
  };
</script>
<svelte:head>
  <title>Space: Voice of Space</title>
</svelte:head>
<main class="content-page bleed no-pad"  style="--grad-color: 255, 100%, 40%; --element-bg: linear-gradient(hsla(var(--grad-color), .3), hsla(255, 50%, 50%, .5)), url({base}/assets/space/voice-of-space-bg.webp) 0% 0/100% auto fixed no-repeat; --element-mob-bg: url({base}/assets/space/voice-of-space-bg.webp) 0 0/auto 100vh scroll repeat; --element-color: 255, 90%, 80%; --subtitle-color: 255, 90%, 85%; --copy-color: var(--light-color);" >
  <!-- <main class="content-page bleed no-pad"  style="--grad-color: 255, 75%, 90%; --element-bg: linear-gradient(90deg, hsla(var(--grad-color),.125), hsla(var(--grad-color),0.9) 15%, hsla(var(--grad-color),0.9) 50%, hsla(var(--grad-color),0.7) 60%, hsla(var(--grad-color),0.95) 70%, hsla(var(--grad-color), 0.95) 90%, hsla(var(--grad-color),.25)) 0 0/100% auto no-repeat, url({base}/assets/space/voice-of-space-bg.webp) 0% 0/100% auto fixed no-repeat; --element-color: var(--dark-color); --subtitle-color: 255, 90%,33%;" > -->
  <!-- use the banner for the excercise title and description -->
  <section class="video">
    <iframe class="video-player" src="https://player.vimeo.com/video/842380796?h=df48ceaf27&badge=0&autopause=0&amp;player_id=0&app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Voice of Space"></iframe>
  </section>



  <section id="transcript" class="transcript-group">
    <div class="transcript-item">
      <h2>The Voice of Space Transcript</h2>
      <JournalButton {...jourButtonPos} />
      <div class="transcript" style="--transcript-bg: 80, 100%, 40%; --scrollbar-thumb-color: var(--light-color); --text-shadow: .0625em .0625em .0625em var(--dark-color-alpha3);">
        <p>Hallo. I am the guardian of space, and my name is Dhatvishvari. Our great mother space would like give a message to you now. Please listen.</p>
        <p>Thank you. I am the vast mother space and want to welcome you. I am the mother of all the elements—earth, water, wind and fire—and they live and dance in my womb, just like you and all your ancestors have. I am the night sky that holds all the twinkling stars and the moon that glows through me. I am the never-ending continuity, the great expanse with no center or edge. I greet you all without judgment or discrimination and welcome everyone with acceptance.</p>

        <p>I am ancient and modern and have embraced kings and queens, sages and bandits, priests and gypsies, rock stars and super models. Ravens and robins fly through me. Your massive iron birds roar across my skies. I surround lions and tigers, elephants and zebras and everything in your world—every moment. And even though you don’t see me, I also surround you.</p>

        <p>Not long ago on Earth, space was everywhere. The elements could stay balanced and move in harmony. If problems arose, there was space to resolve them quite naturally. My spaciousness is a great healer, the source of resolution and invisible wisdom. But now, with so many buildings tight together and so much pollution filling my sky, it’s extremely difficult for the elements. They cannot use my space to play, be free and resolve their problems as they once did. On your Earth, I am being crowded out. You must have noticed already the increased presence of floods, fires, hurricanes and excessive heat that burns the crops.</p>

        <p>Believe it or not, my beautiful sky is also inside of you. Your sky is the wisdom space where all thoughts, emotions and feelings arise and where they all dissolve. If you can just give space around all you think, feel and see, you may find a fresh, vivid beauty and awareness that can help you as you navigate your life. So many times I have heard voices cry out in desperation, “I just need some space. Give me a little space!” That’s when you’re being crowded and it seems that someone is trying to take over your mind space. Have you noticed the sky space between your thoughts, or are your thoughts strung together tightly like pearls, rigidly on a string, ready to snap, break and scatter at any moment? So please remember me when your life gets crowded and your mind gets tight. Having my space between your thoughts will ease your stress, calm your nights and brighten your days. Remember, when you have a spacious mind, the world opens to you and you can become a master of space.</p>

        <p>Please come and explore the beauty of my vast and infinite sky-space.</p>
      </div>
    </div>
    <div class="transcript-item goto-links">
      <h3 class="side-title subtitle">Explore Space</h3>
      <ul class="goto-content-links">
        <li><a href="{base}/space/sky-eating">Sky Eating</a></li>
        <li><a href="{base}/space/present-moment-meditation">Present Moment Meditation</a></li>
        <li><a href="{base}/space/dance-workshop">Dance Workshop</a></li>
        <li><a href="{base}/space/sharing-space">Sharing the Beauty of Space</a></li>
        
        <li><a href="../">&#8230;and more</a></li>
      </ul>
    </div>
</section>

</main>
<Journal {...journalData} />
