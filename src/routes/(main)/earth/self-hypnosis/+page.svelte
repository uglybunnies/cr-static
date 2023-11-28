<script>
  import { base } from '$app/paths';
  import Journal from '$lib/components/Journal.svelte';
  import JournalButton from '$lib/components/JournalButton.svelte';
  export let journalData = {
    questions: [
      'After having used self-hypnosis with one goal in mind for 7 consecutive days, what results do you find?',
      'What makes you feel safe?',
      'When you imagine in detail one of your goals being fully accomplished, how do you feel?'
    ],
    title: 'Self Hypnosis',
    bgColor: 'hsl(70, 100%, 0%)',
    bgImg: `${base}/assets/earth/journal-self-hypnosis.jpg`,
    bgPosition: '0 30%',
    bgSize: 'cover',
    bullets: '60, 100%, 50%'
  };
  export let jourButtonPos = {
    right: '10%',
    top: '10%',
    posType: 'fixed',
    alpha: '.3',
    glow: '60,33%,25%',
    mobTop: '6%'
  };
</script>

<svelte:head>
  <title>Earth: Self Hypnosis</title>
</svelte:head>
<main class="content-page center"  style="--grad-color: 240, 10%, 80%; --element-bg: linear-gradient(90deg, hsla(var(--grad-color),0),hsla(var(--grad-color),0.2) 10%, hsla(var(--grad-color),0.4) 20%,hsla(var(--grad-color),0.6) 50%, hsla(var(--grad-color),0.4) 90%, hsla(var(--grad-color),0) 100%) 0 0/100% auto no-repeat, url({base}/assets/earth/earth_dakini_section_overlay.png) 0 33%/cover fixed no-repeat; --element-mob-bg: linear-gradient(90deg, hsla(var(--grad-color), .1),hsla(var(--grad-color), .5) 25%,hsla(var(--grad-color), .5) 75%,hsla(var(--grad-color), .1) ), url({base}/assets/earth/earth_dakini_section_overlay.png) 0 0/auto 100vh scroll repeat; --desc-bg-color: hsla(45, 50%, 75%, .9); --desc-copy-color: var(--light-color); --element-color: 50, 50%, 75%; --subtitle-color: 50, 60%, 90%; --cs1: 210, 100%, 75%; --cs2: 250, 100%, 80%;">
  <!-- use the banner for the excercise title and description -->
  <section class="banner">
    <h2>Self Hypnosis</h2>
    <p class="subtitle shiftgrad">
      <span>Accomplish New Goals</span>
    </p>
  </section>
  <section class="exercise">
      <JournalButton {...jourButtonPos} />
    <div class="audio">
      <iframe width="100%" height="20" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1023317653%3Fsecret_token%3Ds-F5zsjcXsxld&amp;color=%23ffff00&amp;inverse=true&amp;auto_play=false&amp;show_user=true"></iframe>
      <span class="runtime">4:45</span>
    </div>
    <p><small>Audio presentation by Sandra Scales, Ph. D.</small></p>
      <h3>Have You Ever Tried to Hypnotize Yourself?</h3>
      <p>
        Here is a brief method for self-hypnosis which can help you relax, accomplish new goals, change habits, and increase performance. Learn with audio and read below.
      </p>
      <h4>To Begin</h4>
      <p>Find one goal that is important and is not in the category of major life change. It is best to start small and get used to the process and then increase your goals.</p>

      <p>State your goal in the present tense while you see yourself accomplishing it. For example, if you want to dance everyday, you could say the following:</p>

      <div class="figure-text">
        <img src="{base}/assets/earth/self_hypnosis.png" alt="Illustration of a seated woman visualizing herself dancing">
        <p class="larger element-color">“This is me, <br>
          I feel safe and protected. <br>
          I am dancing every day and enjoying myself, <br>
          and I feel good, deep inside.”</p>
      </div>
      <p>Here are some more examples:</p>
      <ul>
        <li>This is me, I feel safe and protected. I am speaking in front of a group, I am calm and confident and I feel good deep inside.</li>
        <li>This is me, I feel safe and protected. I am losing weight in a healthy way and I feel good deep inside.</li>
        <li>This is me, I feel safe and protected. I am exercising every day and enjoying myself and I feel good deep inside.</li>
      </ul>
      <p>It is important to say out loud, “I feel safe and protected and I feel good deep inside.” Allow your words and feelings to flow into the unconscious mind. Doing so will open the unconscious mind to new suggestions.</p>

      <p>Repeat this affirmation out loud 3 to 21 times in a session, as you visualize yourself. Doing this for 21 days is optimum, but even 3 days can bring some success.</p>

      <p>Use all your senses. The more senses you are able to use, the stronger your affirmation will be. Don’t worry if you cannot see a picture of yourself or your goal. Just imagine the best you can.</p>

      <p>Use all your senses:</p>

      <ul>
        <li>Auditory: Repeat out loud: I am dancing every day and enjoying myself, and I feel good deep inside.</li>
        <li>Visual: See and imagine what you are saying to yourself (i.e. a picture in front of you dancing. Remember, we’re using dancing as an example here.).</li>
        <li>Kinesthetic: When you say “I feel good” feel that you’re accomplishing your goal and you feel good deep inside.</li>
      </ul>
      <p>
        As you get used to the process it will become quite natural and you can continue with more significant goals.
      </p>
  </section>
</main>
<Journal {...journalData} />
