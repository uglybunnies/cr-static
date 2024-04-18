<script>
    import { base } from '$app/paths';
</script>
<svelte:head>
  <title>Meet the Guardians and Elements</title>
</svelte:head>
<main class="info-page">
  <section class="introduction"  style="--copy-color: var(--light-color); --element-color: var(--copy-color);">
    <h2 style="--h2-font-size: var(--h4-font-size);">Meet the Guardians and Elements</h2>
    <p>
      From butterflies to human beings and computers to spinach--everything in our world is made of the five elements: earth, water, wind, fire and space. For centuries different cultures have recognized their importance and have used the elements as a key to unlocking self-mastery, healing and balancing disruptive circumstances. When the body’s elements are in balance, we experience physical and emotional well-being. When the elements on earth are balanced, peace and harmony can reign. The five elements are ever giving and always there to connect with and serve us.
    </p>

    <p>Many traditions represent these wondrous elements with form, color and symbolism. Here we are using the five dakinis from the Tibetan Buddhist tradition. This tradition originated  high in the majestic snow-clad Himalayan mountains and still lives on today. These five dakinis embody the wisdom qualities of each element and are revered and called upon to guide and assist with their action and dynamic energies. On this web site we refer to the five elemental dakinis as the Guardians and use their images painted by Tara di Gesu throughout the site.Their sanskrit names are as follows.</p>

    <div class="down-ctl static"><a href="#spaceGuardian" class="scroll-ctl"><span>Scroll down</span></a></div>
  </section>
  <section id="spaceGuardian" class="element right-side" style="--bgImage: linear-gradient(270deg, hsla(0,0%, 0%, 1), hsla(0, 0%, 0%, 0) 40%), url({base}/assets/space/space_dakini_home_bg.webp) 0 0/100% auto no-repeat; --mobBg: url({base}/assets/space-mandala.webp) 50% -7%/ 75% auto no-repeat; --copy-color: var(--light-color);">
    <p>The guardian of <i>Space</i> is Dhatishvari. <i>Space</i> is infinitely vast yet welcoming,
      a boundless skyscape where all is possible.
      Our inner qualities of space are an expanse
      in which our openness and generosity find expression.
      Space is the sky within where our thoughts dance and play. </p>
    <p class="element-links"><a href="{base}/space/voice-of-space">The Voice of Space</a> <br>
      <a href="{base}/space">Explore Space</a>
    </p>
  </section>
<div class="down-ctl"><a href="#windGuardian" class="scroll-ctl"><span>Scroll down</span></a></div>
<section id="windGuardian" class="element" style="--bgImage: linear-gradient(to right, hsla(0,0%, 100%, .6) 40%, hsla(0, 0%, 100%, 0)),url({base}/assets/wind/wind_dakini_bg.webp) 0 0/100% auto no-repeat; --mobBg: url({base}/assets/wind-mandala.webp) 5% 1%/ 75% auto no-repeat;">
    <p>The guardian of <i>Wind</i> is Samayatara. <i>Wind</i> in its natural state is the essence of movement,
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
<div class="down-ctl"><a href="#waterGuardian" class="scroll-ctl"><span>Scroll down</span></a></div>
<section id="waterGuardian" class="element right-side" style="--bgImage:linear-gradient(90deg, hsla(0,0%, 100%, 0), hsla(0, 0%, 100%, .5) 60%), url({base}/assets/water/water-element-home-bg.webp) 0 0/100% auto no-repeat; --mobBg: url({base}/assets/water-mandala.webp) 50% -6%/ 75% auto no-repeat;">
    
    <p>The guardian of <i>Water</i> is Mamaki.<i>Water</i> in its balanced state, is flowing,
      sweet, soothing and free of all impurities.
      Our own inner qualities of water are the same
      and allow us to be adaptable and fluid.
      The element of water lets us dance gracefully throughout our day.</p>
    <p class="element-links">
      <a href="{base}/water/voice-of-water" class="dark">The Voice of Water</a> <br>
      <a href="{base}/water" class="dark">Explore Water</a>
    </p>
  </section>
  <div class="down-ctl"><a href="#earthGuardian" class="scroll-ctl"><span>Scroll down</span></a></div>
  <section id="earthGuardian" class="element" style="--bgImage: linear-gradient(to right, hsla(0,0%, 100%, .7) 40%, hsla(0, 0%, 100%, 0)),url({base}/assets/earth/earth-dakini-bg.webp) 0 0/100% auto no-repeat; --mobBg: url({base}/assets/earth-mandala.webp) 50% -7%/ 75% auto no-repeat;">
<p>The guardian of <i>Earth</i> is Lochana. <i>Earth</i> is our natural support, an endless source
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
  <div class="down-ctl"><a href="#fireGuardian" class="scroll-ctl"><span>Scroll down</span></a></div>
  <section id="fireGuardian" class="element right-side" style="--bgImage: linear-gradient(90deg, hsla(0,0%, 100%, 0) 40%, hsla(0, 0%, 100%, .7)), url({base}/assets/fire/fire-home-bg.webp) 0 0/100% auto no-repeat; --mobBg: url({base}/assets/fire-mandala.webp) 50% -7%/ 75% auto no-repeat;">
    <p>The guardian of <i>Fire</i> is Pandaravasini.<i>Fire</i> in its balanced state is always glowing and clear,
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
<style>
.down-ctl.static {
  height: 1em;
  position: relative;
}
.down-ctl.static .scroll-ctl  {
  position: relative;
  margin-top: 0;
}
.down-ctl.static .scroll-ctl::after  {
  line-height: .5em;
}
.down-ctl {
  text-align: center;
}
.scroll-ctl {
    color: hsl(var(--light-color));
    text-decoration: none;
    text-shadow: .2em -.125em .15em hsl(var(--dark-neutral)), 0 0 .125em hsl(var(--dark-neutral));
    animation: none;
    overflow: hidden;
    display: block;
    height: 2em;
    margin-top: -2em;
  }
  .scroll-ctl::after {
    display: inline-block;
    position: relative;
    content: '\203A';
    font-size: 4em;
    line-height: .5em;
    transform: rotate(90deg);
    transform-origin: center;
    margin-bottom: -1em;
  }
  .scroll-ctl > span {
    display: block;
    position: absolute;
    text-indent: -999em;
  }
</style>