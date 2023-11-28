<script>
  import { base } from '$app/paths';
  import Journal from '$lib/components/Journal.svelte';
  import JournalButton from '$lib/components/JournalButton.svelte';
  export let journalData = {
    questions: [
      'How does the way you feel as you cook affect the food you\'re cooking?',
      'When you finish cooking and serve your food to loved ones, how do you feel?',
      'What foods are uplifting for you to eat?'
    ],
    title: 'Fresh Mind Cooking',
    bgColor: 'hsl(70, 100%, 0%)',
    bgImg: `${base}/assets/earth/journal-fresh-mind-cooking-bg2.webp`,
    bgPosition: '60% 50%',
    bgSize: 'auto 100%',
    bullets: '60, 100%, 50%'
  };
  export let jourButtonPos = {
    right: '1%',
    top: '82%',
    posType: 'fixed',
    alpha: '.7',
    glow: '60,100%,50%',
    mobTop: '31%'
  };
</script>

<svelte:head>
  <title>Earth: Fresh Mind Cooking</title>
</svelte:head>
<main class="content-page bleed no-pad"  style="--element-bg: linear-gradient(90deg, hsla(60,75%,80%,.125), hsla(60,75%,80%,0.9) 15%, hsla(60,75%,80%,0.9) 50%, hsla(60,75%,80%,0.5) 60%, hsla(60,75%,80%,0.8) 70%, hsla(60,75%,80%, 0.7) 90%, hsla(60,75%,80%,.25)) 0 0/100% auto no-repeat, url({base}/assets/earth/cooking-bg.webp) 50% 100%/160% auto fixed no-repeat; --element-mob-bg: linear-gradient(hsla(50, 75%, 80%, .7), hsla(50, 75%, 80%, .7)), url({base}/assets/earth/cooking-bg.webp) 50% 0/auto 100vh scroll repeat; --element-color: 85, 90%, 26%; --subtitle-color: 80, 100%, 33%">
  <!-- use the banner for the excercise title and description -->
  <section class="video">
    <iframe class="video-player" src="https://vimeo.com/showcase/8073501/embed" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
  </section>

  <section id="transcript" class="transcript-group">

      <div class="content-item">

        <h2>Fresh Mind Cooking</h2>
        <p class="subtitle">Five Lessons</p>
        <p>Sharon Crayton invites us into her kitchen as she teaches her unique and simple recipes with a gentle touch of mindful awareness in this video series.</p>
        <JournalButton {...jourButtonPos} /><br>
        <h3>Recipes</h3>
            <ul>
              <li><a href="vegetable-soup" class="dark">Preparing a Vegetable Soup</a></li>
              <li><a href="cooking-with-herbs" class="dark">Cooking With Herbs</a></li>
              <li><a href="meal-salad" class="dark">A Meal Salad</a></li>
              <li><a href="galettes" class="dark">Galettes</a> (french tarts)</li>
              <li><a href="black-bean-soup" class="dark">Black Bean Soup and Essential Oil Playdough</a></li>
            </ul>

<br>
  <section class="creator-bio">
    <h3>About Sharon</h3>
    <p>Sharon Crayton is a Chef and the author of the cookbook, One Taste, Vegetarian Home-Cooking From Around the World. She is a co-founder of the Sparrow Cafe in Aptos, California. Sharon says,</p>
    <p>“My passion in the kitchen is to use fresh seasonal ingredients, herbs, and whatever is available in my fridge and cupboard. I don't like to make a big deal about cooking. However, I do love others to feel good and be nourished with delicious food. I try to have a fresh mind attitude as I look in my fridge everyday to see what I can make. Also I try to keep a mindful awareness and appreciate whatever is happening in the moment. I find this makes my cooking fun and magical. It's my wish that everyone can find their own creative magic in the kitchen as they cook for themselves and their loved ones.”</p>
  </section>
      </div>
      <div class="transcript-item goto-links">
        <h3 class="side-title subtitle">Explore Earth</h3>
        <ul class="goto-content-links">
          <li><a href="../quieting-inner-critic" class="dark">Quieting the Inner Critic</a></li>
          <li><a href="../kindness-to-self" class="dark">Kindness to Self</a></li>
          <li><a href="../grounding-meditation" class="dark">Grounding Meditation</a></li>
          <li><a href="../self-hypnosis" class="dark">Self Hypnosis</a></li>
          <li><a href="../" class="dark">&#8230;and more</a></li>
        </ul>
      </div>
  </section>


</main>
<Journal {...journalData} />
