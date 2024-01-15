<script>
  import { base } from '$app/paths';
  import { browser } from '$app/environment';
  import ScrollDown from '$lib/components/ScrollDown.svelte'
</script>

<svelte:head>
  <title>Wind</title>
</svelte:head>
<main class="element-index bleed" style="--index-bg: url({base}/assets/wind/wind_dakini_bg.webp) 0 0/100% auto fixed no-repeat; --mob-index-bg-pos: 80% 0; --desc-bg-color: 150, 50%, 66%, .975; --desc-copy-color: var(--dark-neutral); --element-color: 150, 50%, 66%;">
  <section class="matrix">
    <div class="element-group">
      <a href="voice-of-wind" class="element-item wide">
        <div class="item">
          <div class="media"  style="--vid-ratio: 16 / 9; --thumb-height: 104%;--thumb-left: 0%; --element-vid-height: 110%;--top: -5%; --left: -3%;">
            <picture>
              <source srcset="{base}/assets/wind/voice-of-wind-th.webp">
              <img class="asset" src="{base}/assets/wind/voice-of-wind-th.jpg">
            </picture>
            <iframe class="asset" src="https://player.vimeo.com/video/846249823?background=1&autoplay=1&badge=0&autopause=0&player_id=0&app_id=58479&muted=1&Dnt=1" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Voice of Wind"></iframe>
          </div>
          <div class="content">

            <p class="title">Experience the Voice of Wind</p>
          </div>
        </div>
      </a>
    </div>
    <div class="element-group">

      <a href="inaction-to-action" class="element-item">
        <div class="item">
          <div class="media" style="--vid-ratio: 1 / 1; --thumb-height: 100%;--thumb-left: 0%; --element-vid-height: 100%;--top: 0%; --left: 0%;">
            <picture>
              <source srcset="{base}/assets/wind/inaction-to-action-th.webp">
              <img class="asset" src="{base}/assets/wind/inaction-to-action-th.jpg" alt="">
            </picture>
            <iframe class="asset" src="https://player.vimeo.com/video/845483298?background=1&autoplay=1&badge=0&autopause=0&player_id=0&app_id=58479&muted=1&Dnt=1" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Inaction to Action"></iframe>
          </div>
          <div class="content">
            <p class="desc">Overcome procrastrination with this guide</p>
            <p class="title">Inaction to Action</p>
          </div>
        </div>
      </a>
      <a href="creating-new-pathways" class="element-item">
        <div class="item">
          <div class="media" style="--vid-ratio: 16 / 9; --thumb-height: 100%;--thumb-left: -50%; --element-vid-height: 100%;--top: 0%; --left: -50%;">
            <picture>
              <source srcset="{base}/assets/wind/creating-pathways-th.webp">
              <img class="asset" src="{base}/assets/wind/creating-pathways-th.jpg" alt="">
            </picture>
            <iframe class="asset" src="https://player.vimeo.com/video/845684256?background=1&autoplay=1&badge=0&autopause=0&player_id=0&app_id=58479&muted=1&Dnt=1" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Creating New Pathways"></iframe>
          </div>
          <div class="content">
            <p class="desc">From Harvard University a method to increase happiness in just 5 minutes a day</p>
            <p class="title">Creating New Pathways</p>
          </div>
        </div>
      </a>
      <a href="changing-your-mood" class="element-item">
        <div class="item">
          <div class="media" style="--vid-ratio: 16 / 9; --thumb-height: 100%;--thumb-left: -50%; --element-vid-height: 100%;--top: 0%; --left: -50%;">
            <picture>
              <source srcset="{base}/assets/wind/changing-mood-th.webp">
              <img class="asset" src="{base}/assets/wind/changing-mood-th.jpg" alt="">
            </picture>
            <iframe class="asset" src="https://player.vimeo.com/video/845483308?background=1&autoplay=1&badge=0&autopause=0&player_id=0&app_id=58479&muted=1&Dnt=1" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Changing Your Mood"></iframe>

          </div>
          <div class="content">
            <p class="desc">Read these clever mood shifting stories and if you like add your own</p>
            <p class="title">Changing Your Mood</p>
          </div>
        </div>
      </a>
    </div>
    <div class="element-group">
      <a href="generosity-and-the-brain" class="element-item">
        <div class="item">
          <div class="media" style="--vid-ratio: 16 / 9; --thumb-height: 100%; --thumb-left: -50%; --element-vid-height: 100%; --top: 0%; --left: -50%;">
            <picture>
              <source srcset="{base}/assets/wind/generosity-th.webp">
              <img src="{base}/assets/wind/generosity-th.jpg" alt="" class="asset">
            </picture>
            <iframe class="asset" src="https://player.vimeo.com/video/861797345?background=1&autoplay=1&badge=0&autopause=0&player_id=0&app_id=58479&muted=1&Dnt=1" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Music Chamber"></iframe>
          </div>
          <div class="content">
            <p class="desc">Find the best ways here to activate positive-emotion circuits in the brain</p>
            <p class="title">Generosity and the Brain</p>
          </div>
        </div>
      </a>
      <a href="poetry-workshop" class="element-item">
        <div class="item">
          <div class="media" style="--vid-ratio: 16 / 9; --thumb-height: 100%; --thumb-left: -50%; --element-vid-height: 100%; --top: 0%; --left: -50%;">
            <picture>
              <source srcset="{base}/assets/wind/poetry-workshop-th.webp">
              <img src="{base}/assets/wind/poetry-workshop-th.jpg" alt="" class="asset">
            </picture>
            <iframe class="asset" src="https://player.vimeo.com/video/862094792?background=1&autoplay=1&badge=0&autopause=0&player_id=0&app_id=58479&muted=1&Dnt=1" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Music Chamber"></iframe>
          </div>
          <div class="content">
            <p class="desc">Take a new road to  creativity in this engaging poetry workshop.Enjoy discovering the poet within</p>
            <p class="title">Poetry Workshop</p>
          </div>
        </div>
      </a>
      <a href="music-chamber" class="element-item">
        <div class="item">
          <div class="media" style="--vid-ratio: 16 / 9; --thumb-height: 100%;--thumb-left: -50%; --element-vid-height: 100%;--top: 0%; --left: -50%;">
            <picture>
              <source srcset="{base}/assets/wind/music-chamber-th.webp">
              <img class="asset" src="{base}/assets/wind/music-chamber-th.jpg" alt="">
            </picture>
            <iframe class="asset" src="https://player.vimeo.com/video/845483344?background=1&autoplay=1&badge=0&autopause=0&player_id=0&app_id=58479&muted=1&Dnt=1" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Music Chamber"></iframe>
          </div>
          <div class="content">
            <p class="desc">Sing along and uplift your spirit. Feel free to share your own song</p>
            <p class="title">Music Chamber</p>
          </div>
        </div>
      </a>
    </div>
    <div class="element-group">
      <a href="podcast-freedom" class="element-item">
        <div class="item">
          <div class="media" style="--vid-ratio: 16 / 9; --thumb-height: 100%;--thumb-left: -50%; --element-vid-height: 100%;--top: 0%; --left: -50%;">
            <picture>
              <source srcset="{base}/assets/wind/podcast-freedom-th.webp">
              <img class="asset" src="{base}/assets/wind/podcast-freedom-th.jpg" alt="">
            </picture>
            <iframe class="asset" src="https://player.vimeo.com/video/845485308?background=1&autoplay=1&badge=0&autopause=0&player_id=0&app_id=58479&muted=1&Dnt=1" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Freedom Podcast"></iframe>
          </div>
          <div class="content">
            <p class="desc">The twins discuss how we loose our freedom to self-scrutiny and insecurity and also how we can reclaim it</p>
            <p class="title">Freedom Podcast</p>
          </div>
        </div>
      </a>
      <a href="sharing-wind" class="element-item">
        <div class="item">
          <div class="media" style="--vid-ratio: 16 / 9; --thumb-height: 100%;--thumb-left: -50%; --element-vid-height: 100%;--top: 0%; --left: -50%;">
            <picture>
              <source srcset="{base}/assets/wind/sharing-wind-th.webp">
              <img class="asset" src="{base}/assets/wind/sharing-wind-th.jpg" alt="">
            </picture>
            <iframe class="asset" src="https://player.vimeo.com/video/845485622?background=1&autoplay=1&badge=0&autopause=0&player_id=0&app_id=58479&muted=1&Dnt=1" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Sharing the Beauty"></iframe>
          </div>
          <div class="content">
            <p class="desc">The Majestic Element of Wind is displayed in this gallery of videos, paintings and photos. Share your art here
            </p>
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