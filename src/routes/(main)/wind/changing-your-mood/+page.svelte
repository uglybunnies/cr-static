<script>
  import { base } from '$app/paths';
  import { onMount }  from 'svelte';
  import Slides from '$lib/components/Slides.svelte';  
  import Journal from '$lib/components/Journal.svelte';
  import JournalButton from '$lib/components/JournalButton.svelte';
  export let journalData = {
    questions: [
      'What instantly puts you in a good mood?',
      'What are your worst moods?',
      'What concrete steps can you take to change an unwanted mood?'
    ],
    title: 'Changing Your Mood',
    bgColor: 'hsl(180, 100%, 0%)',
    bgImg: `${base}/assets/wind/journal-changing-your-mood-bg2.webp`,
    bgPosition: '50% 50%',
    bgSize: 'auto 100%',
    bullets: '120, 100%, 50%'
  };
  export let jourButtonPos = {
    right: '-5em',
    top: '12em',
    posType: 'absolute',
    alpha: '.25',
    glow: '250,70%, 50%',
    mobTop: '20%'
  };
  /**
   *  {
        type: '', // one of 3, text, image or video
        title: '', // used for the caption
        desc: '', // used for the slide alt
        slideMedia: '', // src for media file
        slideMediaFallback: '', // for use as image fallback
        thumb: '', // src of thumbnail
        thumbFallback: '', // src of responsive thumb fallback
        alt:'', // alt copy of the thumb
        bgSettings: '', // background property values for text slides
        copyColor: '', // foreground color for text slides
        fontWeight: '', // font weight for text slides

      },
      Easy And Entertaining Ways
To Change Your Mood
If You're Depressed, Sad, Or Anxious,
Try Something New
Share your personal mood-shifting story here.
   */

  export let slideData = {
    slides: [
      {
        type: 'slide',
        title: '<h2>Easy and Entertaining Ways<br>to Change Your Mood</h2>',
        desc: '<p>If you\'re depressed, sad, or anxious, try something new. Share your personal mood-shifting story here.</p><p>Please edit, spellcheck and keep under 150 words. Send to <a href="mailto:creativeresilience@khyentsefoundation.org">creativeresilience@khyentsefoundation.org</a>. We will post as many of the stories as possible.</p>',
        slideMedia: '',
        slideMediaFallback: '',
        thumb: '',
        thumbFallback: '',
        alt:'',
        bgSettings: 'radial-gradient(hsla(300, 100%, 7%, 7), hsla(300, 100%, 2%, .2)), hsl(255, 0%, 0%)',
        copyColor: 'var(--light-color)',
        fontWeight: '300',
      },

      {
        type: 'slide',
        title: '<h2>Pity-Party</h2>',
        desc: '<p>When I am really feeling sorry for myself and having a "pity-party"  I have to move quickly to not get caught, so I snap into action and think of what I can do for someone else who needs cheering up. My favorite action for this is to find something of mine that I really love and think who would like it. Then I put it in a priority mail box and mail it off to them. This changes my mood every time and brings me immediate joy. The art of forgetting myself and thinking of  someone else never fails me.</p><p><small>—Rita</small></p>',
        slideMedia: '',
        slideMediaFallback: '',
        thumb: '',
        thumbFallback: '',
        alt:'',
        bgSettings: 'radial-gradient(hsla(300, 100%, 7%, 7), hsla(300, 100%, 2%, .2)), hsl(255, 0%, 0%)',
        copyColor: 'var(--light-color)',
        fontWeight: '300',
      },

      {
        type: 'slide',
        title: '<h2>Blowing Bubbles</h2>',
        desc: '<p>When I lived in Australia, though I felt quite connected to the land, I personally felt isolated and alone. One day I was completely depressed, I forced myself to go out and for some unknown odd reason, I bought bubbles. I walked out to the beach and as I sent the bubbles across the water, I noticed the rainbows in them and thought how magical they were. As I watched them float away and out into space, when some bubbles popped my mind seemed to pop with them and open. As I watched the rest dance away into the sky, I just let everything in my mind float away with them and remembered how every thing changes.</p><p><small>—Yvonne</small></p>',
        slideMedia: '',
        slideMediaFallback: '',
        thumb: '',
        thumbFallback: '',
        alt:'',
        bgSettings: 'radial-gradient(hsla(300, 100%, 7%, 7), hsla(300, 100%, 2%, .2)), hsl(255, 0%, 0%)',
        copyColor: 'var(--light-color)',
        fontWeight: '300',
      },

      {
        type: 'slide',
        title: '<h2>Salty Buttered Tea</h2>',
        desc: '<p>About 30 years ago I first visited Paro, Bhutan. One afternoon, my host and I house-hopped to visit some of his friends. After three or four houses, it became increasingly difficult for me to keep drinking the buttered tea we were being served, even if it was just a gesture to taste some to show appreciation.  The buttered tea was creamy with yak butter and salty, quite unlike the English tea served with milk and sugar I was used to.  My host, a very wise man, noticed my predicament and suggested, "Think of it as cream soup.."</p><p>At the next visit, not only did I enjoy the soup, it was not even creamy and salty enough.</p><p>How powerful was this trick of changing one\'s own perception! What a profound teaching! It totally changed my life.</p><p><small>—Florence</small></p>',
        slideMedia: '',
        slideMediaFallback: '',
        thumb: '',
        thumbFallback: '',
        alt:'',
        bgSettings: 'radial-gradient(hsla(300, 100%, 7%, 7), hsla(300, 100%, 2%, .2)), hsl(255, 0%, 0%)',
        copyColor: 'var(--light-color)',
        fontWeight: '300',
      },

      {
        type: 'slide',
        title: '<h2>Power of a Smile</h2>',
        desc: '<p>When I’m deep in my inner darkness, here is a method I use as an antidote. I go out walking and allow myself to make eye contact with someone—and  smile, not just an upward arc of a few muscles of the corner of my mouth, but a full face smile. There is no need to converse. I keep my eyes wide open and by raising my eyebrows,  my unhappy eyes are transformed as I  smile with a genuine expressions of openness. A weight is lifted by this simple avenue of human connection. Though I may not be offered a smile in return, sometimes when someone smiles back, it is truly a gift, a circle completed. Then there is a little light to show the way.</p><p><small>—Stefan</small></p>',
        slideMedia: '',
        slideMediaFallback: '',
        thumb: '',
        thumbFallback: '',
        alt:'',
        bgSettings: 'radial-gradient(hsla(300, 100%, 7%, 7), hsla(300, 100%, 2%, .2)), hsl(255, 0%, 0%)',
        copyColor: 'var(--light-color)',
        fontWeight: '300',
      },

      {
        type: 'slide',
        title: '<h2>The Power of Words</h2>',
        desc: '<p>When I\'m feeling alone, I read the words of my favorite poets. Their words resonate with my soul, creating a connection with me. Connection means everything to me and takes away my aloneness. For me, words have immense power. And beautiful words have the power to change the way I see and the way I feel.</p><p><small>—Julie</small></p>',
        slideMedia: '',
        slideMediaFallback: '',
        thumb: '',
        thumbFallback: '',
        alt:'',
        bgSettings: 'radial-gradient(hsla(300, 100%, 7%, 7), hsla(300, 100%, 2%, .2)), hsl(255, 0%, 0%)',
        copyColor: 'var(--light-color)',
        fontWeight: '300',
      },

      {
        type: 'slide',
        title: '<h2>Other Wind Pages</h2>',
        desc: '<p><a href="../inaction-to-action">Inaction to Action</a><br><a href="../generosity-and-the-brain">Generosity and the Brain</a><br><a href="../creating-new-pathways">Creating New Pathways</a><br><a href="../">Return to Wind</a></p>',
        slideMedia: '',
        slideMediaFallback: '',
        thumb: '',
        thumbFallback: '',
        alt:'',
        bgSettings: 'radial-gradient(hsla(300, 100%, 7%, 7), hsla(300, 100%, 2%, .2)), hsl(255, 0%, 0%)',
        copyColor: 'var(--light-color)',
        fontWeight: '300',
      },
    ]
  };
  let count = slideData.slides.length;
  let zoomed = false;

  onMount(() => {
    window.location.assign('#slide-1');
    window.scrollBy({left: 0, top: window.innerHeight, behavior: 'instant'});
  });

  function updateSlides(event) {
    let target = event.target;
    let link = target.closest('a');
    let next = document.querySelector('.slide-next');
    let prev = document.querySelector('.slide-prev');
    if (!link && target.tagName === 'IMG') {      
      target.style.scale = (!zoomed) ? 1.5 : 1;
      target.classList.toggle('large');
      zoomed = !zoomed;
    }
    else {
      let url = document.location;
      let slideHash = url.hash.split('-');
      let slideIndex = parseInt(slideHash[1]);
      // determine if an image is zoomed (only one at a time should be possible)
      let zoomedImg = document.querySelector('.media-image[style]');

      // reset the image zoom if a zoomed image is found
      if (zoomedImg) {
        zoomedImg.removeAttribute('style');
        zoomedImg.classList.remove('large');
        zoomed = false;
      }
      // next should be the slide after the current or set to the first slide if 
      // the last slide is showing
      next.href = (slideIndex === count) ? '#slide-1':`#slide-${slideIndex + 1}`;

      // prev should be the slide before the current or set to the last slide if 
      // the first slide is showing
      prev.href = (slideIndex < 2)? `#slide-${count}` : `#slide-${slideIndex - 1}`;
    }
  }
</script>
<svelte:head>
  <title>Wind: Changing Your Mood</title>
</svelte:head>
<main on:click={updateSlides} class="content-page bleed shorten"  style="--grad-color:240, 100%, 95%; --element-bg: linear-gradient(90deg, hsla(var(--grad-color), 0), hsla(var(--grad-color), 0) 5%, hsla(var(--grad-color), 0) 50%, hsla(var(--grad-color), 0) 75%), url({base}/assets/wind/changing-mood-bg2.webp) 0% 0%/100% auto repeat fixed;--element-mob-bg: linear-gradient(180deg, hsla(var(--grad-color), 0) 33%, hsla(var(--grad-color), .9)), url({base}/assets/wind/changing-mood-bg2.webp) 0 0/auto 120vh repeat scroll;  --element-color:240, 50%, 50%; --subtitle-color:240, 50%, 60%; --cs1: 80, 100%, 60%; --cs2: 40, 100%, 60%;">

  <section class="exercise top-layer">
    <h2>Easy Ways to Change Your Mood</h2>
    <p class="subtitle shiftgrad"><span>
      If You're Depressed, Sad, Or Anxious,
        Try Something New
    </span></p>
      <p>Share your personal mood-shifting story here.</p>
      <p>Please edit, spellcheck and keep under 150 words. Send to <a href="mailto:creativeresilience@khyentsefoundation.org" class="dark">creativeresilience@khyentsefoundation.org</a>. <br>We will post as many of the stories as possible.</p>
      <JournalButton {...jourButtonPos} />
      <br><br>
  </section>
  <Slides {...slideData}/>
  <section class="exercise"></section>
</main>
<Journal {...journalData} />