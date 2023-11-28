<script>
  import { base } from '$app/paths';
  import { browser } from '$app/environment';
  import ScrollDown from '$lib/components/ScrollDown.svelte';
</script>

<svelte:head>
  <title>Space</title>
</svelte:head>
<main class="element-index bleed" style="--index-bg: url({base}/assets/space/space_dakini_bg2.webp) 0 0/100% auto fixed no-repeat; --mob-index-bg-pos: 60% 0; --desc-bg-color: 200, 50%, 66%, .85; --desc-copy-color: var(--dark-neutral); --element-color: 200, 50%, 66%;">
  <section class="matrix">
    <div class="element-group">
      <a href="voice-of-space" class="element-item wide">
        <div class="item">
          <div class="media"  style="--vid-ratio: 16 / 9; --thumb-height: 102%;--thumb-left: -1%; --element-vid-height: 105%;--top: -1.66%; --left: -4%;">
            <picture>
              <source srcset="{base}/assets/space/voice-of-space-th.webp">
              <img class="asset" src="{base}/assets/space/voice-of-space-th.jpg">
            </picture>
            <iframe class="asset" src="https://player.vimeo.com/video/846248338?background=1&autoplay=1&badge=0&autopause=0&player_id=0&app_id=58479&muted=1&Dnt=1" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Voice of Space"></iframe>

          </div>
          <div class="content">

            <p class="title">Experience the Voice of Space</p>
          </div>
        </div>
      </a>
    </div>
    <div class="element-group">

      <a href="making-more-mental-space" class="element-item">
        <div class="item">
          <div class="media" style="--vid-ratio: 16 / 9; --thumb-height: 100%;--thumb-left: -50%; --element-vid-height: 100%;--top: 0%; --left: -40%;">
            <picture>
              <source srcset="{base}/assets/space/making-mental-space-th.webp">
              <img class="asset" src="{base}/assets/space/making-mental-space-th.jpg" alt="screen capture of the background video">
            </picture>
            <iframe class="asset" src="https://player.vimeo.com/video/846240523?background=1&autoplay=1&badge=0&autopause=0&player_id=0&app_id=58479&muted=1&Dnt=1" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Making Mental Space"></iframe>
          </div>
          <div class="content">
            <p class="desc">Overwhelmed? Try this quick and effective technique from Chicago University</p>
            <p class="title">Making Mental Space</p>
          </div>
        </div>
      </a>
      <a href="dance-workshop" class="element-item">
        <div class="item">
          <div class="media" style="--vid-ratio: 16 / 9; --thumb-height: 100%;--thumb-left: -50%; --element-vid-height: 100%;--top: 0%; --left: -40%;">
            <picture>
              <source srcset="{base}/assets/space/charya-dance-th.webp">
              <img class="asset" src="{base}/assets/space/charya-dance-th.jpg" alt="screen capture of the background video">
            </picture>
            <iframe class="asset" src="https://player.vimeo.com/video/845688461?background=1&autoplay=1&badge=0&autopause=0&player_id=0&app_id=58479&muted=1&Dnt=1" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Making Mental Space"></iframe>
          </div>
          <div class="content">
            <p class="desc">In this class learn the ancient and sacred healing dance of Charya from the Himalayas.</p>
            <p class="title">Charya Dance Workshop</p>
          </div>
        </div>
      </a>
      <a href="sky-eating" class="element-item">
        <div class="item">
          <div class="media" style="--vid-ratio: 16 / 9; --thumb-height: 100%;--thumb-left: -50%; --element-vid-height: 100%;--top: 0%; --left: -40%;">
            <picture>
              <source srcset="{base}/assets/space/sky-eating-th.webp">
              <img class="asset" src="{base}/assets/space/sky-eating-th.jpg" alt="screen capture of the background video">
            </picture>
            <iframe class="asset" src="https://player.vimeo.com/video/845688429?background=1&autoplay=1&badge=0&autopause=0&player_id=0&app_id=58479&muted=1&Dnt=1" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Sky Eating"></iframe>

          </div>
          <div class="content">
            <p class="desc">Clear your mind, body and subtle channels with this brief morning meditation which has been used in Tibet for generations</p>
            <p class="title">Sky Eating</p>
          </div>
        </div>
      </a>
    </div>
    <div class="element-group">

      <a href="space-meditation" class="element-item">
        <div class="item">
          <div class="media" style="--vid-ratio: 16 / 9; --thumb-height: 100%;--thumb-left: -50%; --element-vid-height: 100%;--top: 0%; --left: -40%;">
            <picture>
              <source srcset="{base}/assets/space/space-meditation-th.webp">
              <img class="asset" src="{base}/assets/space/space-meditation-th.jpg" alt="screen capture of the background video">
            </picture>
            <iframe class="asset" src="https://player.vimeo.com/video/845688400?background=1&autoplay=1&badge=0&autopause=0&player_id=0&app_id=58479&muted=1&Dnt=1" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Space Meditation"></iframe>
          </div>
          <div class="content">
            <p class="desc">Let this night sky meditation bring you rejuvenation and peace of mind</p>
            <p class="title">Space Meditation</p>
          </div>
        </div>
      </a>
      <a href="present-moment-meditation" class="element-item">
        <div class="item">
          <div class="media" style="--vid-ratio: 16 / 9; --thumb-height: 100%;--thumb-left: -50%; --element-vid-height: 100%;--top: 0%; --left: -40%;">
            <picture>
              <source srcset="{base}/assets/space/present-moment-th.webp">
              <img class="asset" src="{base}/assets/space/present-moment-th.jpg" alt="screen capture of the background video">
            </picture>
            <iframe class="asset" src="https://player.vimeo.com/video/845688491?background=1&autoplay=1&badge=0&autopause=0&player_id=0&app_id=58479&muted=1&Dnt=1" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Present Moment"></iframe>
          </div>
          <div class="content">
            <p class="desc">Abandon worries and fears about the past and future. Let the calming voice of Anupama Dahal guide you to find rest in the present</p>
            <p class="title">Present Moment</p>
          </div>
        </div>
      </a>
    </div>

    <div class="element-group">
      <a href="letting-go" class="element-item">
        <div class="item">
          <div class="media" style="--vid-ratio: 16 / 9; --thumb-height: 100%;--thumb-left: -50%; --element-vid-height: 100%;--top: 0%; --left: -40%;">
            <picture>
              <source srcset="{base}/assets/space/letting-go-th.webp">
              <img class="asset" src="{base}/assets/space/letting-go-th.jpg" alt="screen capture of the background video">
            </picture>
            <iframe class="asset" src="https://player.vimeo.com/video/848511935?background=1&autoplay=1&badge=0&autopause=0&player_id=0&app_id=58479&muted=1&Dnt=1" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Letting Go"></iframe>
          </div>
          <div class="content">
            <p class="desc">Use this meditation to let go of your stress and anxiety even when you are on the go</p>
            <p class="title">Letting Go</p>
          </div>
        </div>
      </a>
      <a href="sharing-space" class="element-item">
        <div class="item">
          <div class="media" style="--vid-ratio: 16 / 9; --thumb-height: 100%;--thumb-left: 0%; --element-vid-height: 100%;--top: 0%; --left: -40%;">
            <picture>
              <source srcset="{base}/assets/space/sharing-space-th.webp">
              <img class="asset" src="{base}/assets/space/sharing-space-th.jpg">
            </picture>
          </div>
          <div class="content">
            <p class="desc">Great Space is celebrated here in this Sky Art Gallery of original art from around the world. Please share your sky inspirations here</p>
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