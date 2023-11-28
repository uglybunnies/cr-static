<script>
  import { base } from '$app/paths';
  import { browser } from '$app/environment';
  import ScrollDown from '$lib/components/ScrollDown.svelte';
</script>

<svelte:head>
  <title>Fire</title>
</svelte:head>
<main class="element-index bleed" style="--index-bg: url({base}/assets/fire/fire-landing-bg.webp) 0 0/115% auto fixed no-repeat; --mob-index-bg-pos: 60% 0; --desc-bg-color: 25, 100%, 60%, .85; --desc-copy-color: var(--light-color); --element-color: 25, 100%, 60%;">
  <section class="matrix">
    <div class="element-group">
      <a href="voice-of-fire" class="element-item wide">
        <div class="item">
          <div class="media" style="--vid-ratio: 16 / 9; --thumb-height: 103.5%;--thumb-left: -1.75%; --element-vid-height: 120%; --top: 0%; --left: -10%;">
            <picture>
              <source srcset="{base}/assets/fire/voice-of-fire-thumb.webp">
              <img class="asset img" src="{base}/assets/fire/voice-of-fire-thumb.jpg">
            </picture>
            <iframe class="asset" src="https://player.vimeo.com/video/848591423?background=1&autoplay=1&loop=1&muted=1&badge=0&autopause=0&player_id=0&app_id=58479&muted=1&Dnt=1" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Voice of Fire"></iframe>
          </div>
          <div class="content">

            <p class="title">Experience the Voice of Fire</p>
          </div>
        </div>
      </a>
    </div>
    <div class="element-group">
      <a href="podcast-creativity" class="element-item">
        <div class="item">
          <div class="media" style="--vid-ratio: 1 / 1; --thumb-height: 103.5%;--thumb-left: 0%; --element-vid-height: 120%; --top: 0%; --left: -10%;">
            <picture>
              <source srcset="{base}/assets/fire/creativity-th.webp">
              <img class="asset" src="{base}/assets/fire/creativity-th.jpg" alt="">
            </picture>
            
          </div>
          <div class="content">
            <p class="desc">The twins examine the need to temper self-criticism in order to ride the wave of inspiration and keep creativity alive</p>
            <p class="title">Creativity</p>
          </div>
        </div>
      </a>
      <a href="stop-obsessive-thinking" class="element-item">
        <div class="item">
          <div class="media" style="--vid-ratio: 16 / 9; --thumb-height: 100%;--thumb-left: -50%; --element-vid-height: 100%;--top: 0%; --left: -40%;">
            <picture>
              <source srcset="{base}/assets/fire/obsessive-thinking-th.webp">
              <img class="asset" src="{base}/assets/fire/obsessive-thinking-th.jpg" alt="">
            </picture>
            
            <iframe class="asset" src="https://player.vimeo.com/video/517810096?background=1&autoplay=1&loop=1&muted=1&badge=0&autopause=0&player_id=0&app_id=58479&muted=1&Dnt=1" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Stop Obsessive Thinking"></iframe>
          </div>
          <div class="content">
            <p class="desc">Gain surprising results with this approach and stop obsessive thinking</p>
            <p class="title">Stop Obsessive Thinking</p>
          </div>
        </div>
      </a>

      <a href="dissolving-anger" class="element-item">
        <div class="item">
          <div class="media" style="--vid-ratio: 9 / 16; --thumb-height: 175%;--thumb-left: 0%; --thumb-top: -25%; --element-vid-height: 100%;--top: 0%; --left: -50%;">
            <picture>
              <source srcset="{base}/assets/fire/dissolving-anger-th.webp">
              <img class="asset" src="{base}/assets/fire/dissolving-anger-th.jpg" alt="">
            </picture>
          </div>
          <div class="content">
            <p class="desc">This is a method to transform anger and unveil wisdom as taught by the great meditation master Thinley Norbu Rinpoche</p>
            <p class="title">Dissolving Anger</p>
          </div>
        </div>
      </a>
    </div>
    <div class="element-group">
      <a href="fire-meditation" class="element-item">
        <div class="item">
          <div class="media" style="--vid-ratio: 9 / 16; --thumb-height: 175%;--thumb-left: 0%; --element-vid-height: 175%; --top: -60%; --left: -0%;">
            <picture>
              <source srcset="{base}/assets/fire/fire-meditation-th.webp">
              <img class="asset" src="{base}/assets/fire/fire-meditation-th.jpg">
            </picture>
            <iframe class="asset" src="https://player.vimeo.com/video/845687874?background=1&autoplay=1&loop=1&muted=1&badge=0&autopause=0&player_id=0&app_id=58479&muted=1&Dnt=1" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Fire Meditation"></iframe>
          </div>
          <div class="content">
            <p class="desc">Rekindle your life energy with this fire meditation</p>
            <p class="title" style="--title-font-size: clamp(1rem, 1.875vw, 1.15rem);">Fire Meditation</p>
          </div>
        </div>
      </a>
      <a href="sharing-fire" class="element-item">
        <div class="item">
          <div class="media" style="--vid-ratio: 409 /418; --thumb-height: 101%;--thumb-left: -1%; --element-vid-height: 101%; --top: 1%; --left: -1%;">
            <picture>
              <source srcset="{base}/assets/fire/sharing-fire-th.webp">
              <img class="asset" src="{base}/assets/fire/sharing-fire-th.jpg">
            </picture>
            <iframe class="asset" src="https://player.vimeo.com/video/845687894?background=1&autoplay=1&loop=1&muted=1&badge=0&autopause=0&player_id=0&app_id=58479&muted=1&Dnt=1" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Sharing the Beauty"></iframe>

          </div>
          <div class="content">
            <p class="desc">Join other artists in an international tribute to the Grand Element of Fire</p>
            <p class="title" style="--title-font-size: clamp(1rem, 1.875vw, 1.15rem);">Sharing the Beauty</p>
          </div>
        </div>
      </a>
    </div>
  </section>
  <ScrollDown />
</main>

  {#if browser}
  <script src="https://player.vimeo.com/api/player.js"></script>
{/if}