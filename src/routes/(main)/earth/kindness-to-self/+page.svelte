<script>
  import { base } from '$app/paths';
  import Journal from '$lib/components/Journal.svelte';
  import JournalButton from '$lib/components/JournalButton.svelte';
  export let journalData = {
    questions: [
      'What can you do to be more kind to yourself this moment?',
      'How does kindness towards others help you?',
      'How can you act compassionately towards others, while at the same time taking proper care of yourself?'
    ],
    title: 'Kindness to Self',
    bgColor: 'hsl(70, 100%, 0%)',
    bgImg: `${base}/assets/earth/journal-kindess-to-self-bg2.jpg`,
    bgPosition: '66% 0',
    bgSize: 'auto 100%',
    bullets: '60, 100%, 50%'
  };
  export let jourButtonPos = {
    right: '5%',
    top: '52%',
    posType: 'fixed',
    alpha: '.6',
    glow: '60,50%,85%',
    mobTop: '7%'
  };
</script>

<svelte:head>
  <title>Earth: Kindness to Self</title>
</svelte:head>

<main class="content-page"  style="--element-bg: linear-gradient(90deg, hsla(45,75%,80%,0), hsla(45,75%,80%,0.85) 15%, hsla(45,75%,80%,0.85) 45%, hsla(45,75%,80%,0) 85%) 0 0/48em auto no-repeat, url({base}/assets/earth/earth_dakini_bg6.jpg) 0 33%/cover fixed no-repeat; --element-mob-bg: linear-gradient(hsla(45,75%,80%, .5), hsla(45,75%,80%, .5)), url({base}/assets/earth/earth_dakini_bg6.jpg) 0 0/auto 100vh scroll repeat; --desc-bg-color: hsla(45, 50%, 75%, .9);--desc-copy-color: var(--dark-neutral); --element-color: 85, 90%, 26%; --subtitle-color: 85, 100%, 40%; --cs1: 196, 100%, 50%; --cs2: 300, 100%, 80%;">
  <!-- use the banner for the excercise title and description -->
  <section class="banner">
    <h2>Kindness to Self</h2>
    <p class="subtitle shiftgrad"><span>
      Did You Leave Someone Behind?<br>
        Could It Be You?
    </span>
      </p>
  </section>
  <section class="exercise">

      
      <JournalButton {...jourButtonPos} />

      <figure class="quotes" style="--max-width: 18.5em;">
        <blockquote>
          <p>
            Good afternoon, ladies and gentlemen, this is your flight attendant speaking. May I have your complete attention please. If needed during our flight, oxygen masks will drop in front of you. Please secure your own mask before your child’s or anyone else’s in need.<br>
            Thank you and have a nice flight.<br>
            Welcome to the sky.
          </p>
        </blockquote>
      </figure>
      <p>As children, many of us were taught to be kind to others. But, how
        often did we hear, "Be kind to yourself"? Unfortunately, the inclination for self-kindness does not necessarily come naturally. It comes from childhood experience. The benefits of self-kindness are multi-faceted. Self-kindness is well-worth including in a daily routine. It proves to have many benefits for you and those you love and is somewhat like securing your own oxygen mask before you help others on the plane.</p>

      <h3>Three Steps to Self-Kindness</h3>
      <ol>
        <li>In the morning, when you brush your teeth or wash your face, look into the mirror and say something like the following: “Good morning, today I will be with you all day and take very good care of you. I will listen to you carefully and give to you all that I can. We will have a great day together! So let's go now.”</li>
        <li>
          During the day, stay with yourself as much as possible. Tune into your needs and respond to yourself in a generous and kind way. If you need a break from others, take a brief walk or go sit in your car and meditate or even call your mom. If you’re hungry, don’t wait for low blood sugar, find a snack or break early for lunch. If you find you are being harsh or critical to yourself, stop and be encouraging with kind thoughts. Be creative and have fun being kind in new ways!
        </li>
        <li>
          At night, before you sleep, notice what impact this has had on your day. If you have forgotten yourself most of the day, don’t give up. Remember you are forming a new habit, which takes some practice. Refresh your intentions to remember self-kindness for the following day. And then rest. As you repeat this for some days, the habit will internalize and gather strength. The changes will become obvious.
        </li>
    </ol>
  </section>
</main>
<Journal {...journalData} />
<!-- <div class="ani-objects leaf" id="aniObj1" style="--image: url({base}/assets/earth/leaf1.webp);"></div>
<div class="ani-objects leaf" id="aniObj2" style="--image: url({base}/assets/earth/leaf2.webp);"></div>
<style>
  .ani-objects {
    position: absolute;
    top: -5%;
    z-index: 3;
  }
  .ani-objects::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
  }
  .leaf {
    height: 1.40625em;
    width: .8125em; 
  }
  #aniObj1 {
    left: 66%;
    animation: 10s ease-out 11s infinite ani1X;
  }
  #aniObj1::after {
    background-image: var(--image);
    animation: 10s cubic-bezier(0.33333, 0, 0.66667, 0.33333) 11s infinite ani1Y;
  }
  #aniObj2 {
    left: 20%;
    animation: 10s ease-out 16s infinite ani2X;
  }
  #aniObj2::after {
    background-image: var(--image);
    animation: 10s cubic-bezier(0.33333, 0, 0.66667, 0.33333) 16s infinite ani2Y;
  }
  @keyframes ani1X {
    0% {
      transform: translateX(0) rotate(0);
    }
    50%, 100% {
      transform: translateX(2000%) rotate(-90deg);
    }
  }
  @keyframes ani1Y {
    0% {
      transform: translateY(0);
    }
    50%, 100% {
      transform: translateY(5000%);
    }
  }
  @keyframes ani2X {
    0% {
      transform: translateX(0);
    }
    50%, 100% {
      transform: translateX(-3000%);
    }
  }
  @keyframes ani2Y {
    0% {
      transform: translateY(0) rotate(0);
    }
    50%, 100% {
      transform: translateY(5000%) rotate(300deg);
    }
  }
</style> -->