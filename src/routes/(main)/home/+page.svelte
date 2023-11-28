<script>
    import { base } from '$app/paths';
</script>
<svelte:head>
  <title>Welcome to Creative Resilience</title>
</svelte:head>
<main class="home-page">
  <section class="intoduction" style="--copy-color: var(--light-color);">
    <h2>Welcome to Creative Resilience</h2>
    <p>Introductory statement</p>
  </section>
  <section class="element right-side" style="--bgImage: linear-gradient(270deg, hsla(0,0%, 0%, 1), hsla(0, 0%, 0%, 0) 40%), url({base}/assets/space/space_dakini_home_bg.webp) 0 0/100% auto no-repeat; --mobBg: url({base}/assets/space-mandala.webp) 50% -7%/ 75% auto no-repeat; --copy-color: var(--light-color);">
    <p><i>Space</i> is infinitely vast yet welcoming,
      a boundless skyscape where all is possible.
      Our inner qualities of space are an expanse
      in which our openness and generosity find expression.
      Space is the moment in between breaths where innate freedom is ours. </p>
    <p class="element-links"><a href="{base}/space/voice-of-space">The Voice of Space</a> <br>
      <a href="{base}/space">Explore Space</a>
    </p>
  </section>
  <section class="element" style="--bgImage: linear-gradient(to right, hsla(0,0%, 100%, .6) 40%, hsla(0, 0%, 100%, 0)),url({base}/assets/wind/wind_dakini_bg.webp) 0 0/100% auto no-repeat; --mobBg: url({base}/assets/wind-mandala.webp) 5% 1%/ 75% auto no-repeat;">
    <p><i>Wind</i> in its natural state is the essence of movement,
      sometimes gentle, sometimes fierce, weightless yet forceful,
      invisible yet ever present.
      Our inner qualities of wind provide our agility,
      our transport, our lightness of being.
      Wind is our very breath of life.
      </p>
    <p class="element-links">
      <a href="{base}/wind/voice-of-wind" class="dark">The Voice of Wind</a> <br>
      <a href="{base}/wind" class="dark">Explore Wind</a>
    </p>
  </section>
  <section class="element right-side" style="--bgImage:linear-gradient(90deg, hsla(0,0%, 100%, 0), hsla(0, 0%, 100%, .5) 60%), url({base}/assets/water/water-element-home-bg.webp) 0 0/100% auto no-repeat; --mobBg: url({base}/assets/water-mandala.webp) 50% -6%/ 75% auto no-repeat;">
    
    <p><i>Water</i> in its balanced state, is flowing,
      sweet, soothing and free of all impurities.
      Our own inner qualities of water are the same
      and allow us to be adaptable and fluid.
      The element of water lets us dance gracefully throughout our day.</p>
    <p class="element-links">
      <a href="{base}/water/voice-of-water" class="dark">The Voice of Water</a> <br>
      <a href="{base}/water" class="dark">Explore Water</a>

    </p>
  </section>
  <section class="element" style="--bgImage: linear-gradient(to right, hsla(0,0%, 100%, .7) 40%, hsla(0, 0%, 100%, 0)),url({base}/assets/earth/earth-dakini-bg.webp) 0 0/100% auto no-repeat; --mobBg: url({base}/assets/earth-mandala.webp) 50% -7%/ 75% auto no-repeat;">
<p><i>Earth</i> is our natural support, an endless source
  of nourishment, our place of repose.
  Our own inner qualities of earth give us stability
  and structure and are the ground on which the mind
  can rest, renew and create.
  Earth is the essence of generosity, the mother who cannot help but care for us. </p>
    <p class="element-links">
      <a href="{base}/earth/voice-of-earth" class="dark">The Voice of Earth</a> <br>
      <a href="{base}/earth" class="dark">Explore Earth</a>
    </p>
  </section>
  <section class="element right-side" style="--bgImage: linear-gradient(90deg, hsla(0,0%, 100%, 0) 40%, hsla(0, 0%, 100%, .7)), url({base}/assets/fire/fire-home-bg.webp) 0 0/100% auto no-repeat; --mobBg: url({base}/assets/fire-mandala.webp) 50% -7%/ 75% auto no-repeat;">
    <p><i>Fire</i> in its balanced state is always glowing and clear,
      mysteriously magnetizing, our source of warmth.
      The inner qualities of fire surprise us with passion,
      transform in just moments and give birth to the new.
      Fire is our fierce beauty.</p>
    <p class="element-links">
      <a href="{base}/fire/voice-of-fire" class="dark">The Voice of Fire</a> <br>
      <a href="{base}/fire" class="dark">Explore Fire</a>
    </p>
  </section>
</main>