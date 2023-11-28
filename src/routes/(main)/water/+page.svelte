<script>
  import { base } from '$app/paths';
  import { browser } from '$app/environment';
  import ScrollDown from '$lib/components/ScrollDown.svelte'
</script>
<svelte:head>
  <title>Water</title>
</svelte:head>
<main class="element-index bleed" style="--grad-color: 180,25%,85%; --index-bg: url({base}/assets/water/water-element-lg-bg-lighten.webp) 100% 50%/ 120% auto repeat fixed;  --mob-index-bg-pos: 85% 0; --desc-bg-color: 180, 50%, 70%, .9; --desc-copy-color: var(--dark-neutral); --element-color: 180, 50%, 70%;">

  <section class="matrix">
    <div class="element-group">
      <a href="voice-of-water" class="element-item wide">
        <div class="item">
          <div class="media" style="--vid-ratio: 16 / 9; --thumb-height: 101%; --thumb-left: 0%; --element-vid-height: 101%; --top: 0%; --left: 0%;">
            <picture>
              <source srcset="{base}/assets/water/voice-of-water-th.webp">
              <img class="asset" src="{base}/assets/water/voice-of-water-th.jpg" alt="">
            </picture>
            <iframe class="asset" src="https://player.vimeo.com/video/846222833?background=1&autoplay=1&loop=1&muted=1&badge=0&autopause=0&player_id=0&app_id=58479&muted=1&Dnt=1" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Voice of Water"></iframe>
            
          </div>
          <div class="content">

            <p class="title">Experience the Voice of Water</p>
          </div>
        </div>
      </a>
    </div>
    <div class="element-group">

      <a href="art-of-listening" class="element-item">
        <div class="item">
          <div class="media" style=" --vid-ratio: 16 /9; --thumb-height: 100%; --thumb-left: -30%; --element-vid-height: 100%; --top: 0%; --left: -30%;">
            <picture>
              <source srcset="{base}/assets/water/art-of-listening-th.webp">
              <img class="asset" src="{base}/assets/water/art-of-listening-th.jpg" alt="">
            </picture>
            <iframe class="asset" src="https://player.vimeo.com/video/846250117?background=1&autoplay=1&loop=1&muted=1&badge=0&autopause=0&player_id=0&app_id=58479&muted=1&Dnt=1" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Art of Listening"></iframe>

          </div>
          <div class="content">
            <p class="desc">Venerable Thich Nhat Hanh's kind and loving advice is presented here</p>
            <p class="title">The Art of Listening</p>
          </div>
        </div>
      </a>
      <a href="water-meditation" class="element-item">
        <div class="item">
          <div class="media" style=" --vid-ratio: 16 /9; --thumb-height: 100%; --thumb-left: 0%; --element-vid-height: 100%; --top: 0%; --left: -30%;">
            <picture>
              <source srcset="{base}/assets/water/water-meditation-th.webp">
              <img class="asset" src="{base}/assets/water/water-meditation-th.jpg" alt="">
            </picture>
            
            <iframe class="asset" src="https://player.vimeo.com/video/845687955?background=1&autoplay=1&loop=1&muted=1&badge=0&autopause=0&player_id=0&app_id=58479&muted=1&Dnt=1" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Water Meditation"></iframe>
          </div>
          <div class="content">
            <p class="desc">Allow yourself to feel renewed with this gentle Water meditation </p>
            <p class="title">Water Meditation</p>
          </div>
        </div>
      </a>
      <a href="finding-flexibility" class="element-item">
        <div class="item">
          <div class="media" style=" --vid-ratio: 16 /9; --thumb-height: 100%; --thumb-left: -30%; --element-vid-height: 100%; --top: 0%; --left: -30%;">
            <picture>
              <source srcset="{base}/assets/water/finding-flexibility-th.webp">
              <img class="asset" src="{base}/assets/water/finding-flexibility-th.jpg" alt="">
            </picture>
            <iframe class="asset" src="https://player.vimeo.com/video/845687984?background=1&autoplay=1&loop=1&muted=1&badge=0&autopause=0&player_id=0&app_id=58479&muted=1&Dnt=1" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Finding flexibility"></iframe>

          </div>
          <div class="content">
            <p class="desc">Find the ease of resilience. Look under the blue umbrella</p>
            <p class="title">Finding flexibility</p>
          </div>
        </div>
      </a>
    </div>
    <div class="element-group">


      <a href="podcast-resilience" class="element-item">
        <div class="item">
          <div class="media" style=" --vid-ratio: 16 /9; --thumb-height: 100%; --thumb-left: -10%; --element-vid-height: 100%; --top: 0%; --left: -30%;">
            <picture>
              <source srcset="{base}/assets/water/podcast-resilience-th.webp">
              <img class="asset" src="{base}/assets/water/podcast-resilience-th.jpg" alt="">
            </picture>
            <iframe class="asset" src="https://player.vimeo.com/video/846250076?background=1&autoplay=1&loop=1&muted=1&badge=0&autopause=0&player_id=0&app_id=58479&muted=1&Dnt=1" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Reslience Podcast"></iframe>

          </div>
          <div class="content">
            <p class="desc">Listen to the twins discussing how to be with the natural rhythm of resilience</p>
            <p class="title">Resilience Podcast</p>
          </div>
        </div>
      </a>
      <a href="podcast-flow" class="element-item">
        <div class="item">
          <div class="media" style=" --vid-ratio: 1 / 1; --thumb-height: 100%; --thumb-left: 0%; --element-vid-height: 100%; --top: 0%; --left: -30%;">
            <picture>
              <source srcset="{base}/assets/water/podcast-flow-th.webp">
              <img class="asset" src="{base}/assets/water/podcast-flow-th.jpg" alt="">
            </picture>
          </div>
          <div class="content">
            <p class="desc">What Is Flow?<br>Lily and Grey discuss being in and out of flow</p>
            <p class="title">Flow Podcast</p>
          </div>
        </div>
      </a>
      <a href="sharing-water/#slide-1" class="element-item">
        <div class="item">
          <div class="media" style=" --vid-ratio: 16 /9; --thumb-height: 100%; --thumb-left: -10%; --element-vid-height: 100%; --top: 0%; --left: -30%;">
            <picture>
              <source srcset="{base}/assets/water/sharing-water-th.webp">
              <img class="asset" src="{base}/assets/water/sharing-water-th.jpg" alt="">
            </picture>
            <iframe class="asset" src="https://player.vimeo.com/video/846254716?background=1&autoplay=1&loop=1&muted=1&badge=0&autopause=0&player_id=0&app_id=58479&muted=1&Dnt=1" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Sharing the Beauty"></iframe>
          </div>
          <div class="content">
            <p class="desc">Connect with the beautiful water element. Share your creativity in Water's Blue Gallery</p>
            <p class="title">Sharing the Beauty</p>
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