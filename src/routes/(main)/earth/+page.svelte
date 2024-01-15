<script>
  import { base } from '$app/paths';
  import { browser } from '$app/environment';
  import ScrollDown from '$lib/components/ScrollDown.svelte';
</script>

<svelte:head>
  <title>Earth</title>
  <link rel="preload" href="https://player.vimeo.com/api/player.js" as="script" crossorigin>
</svelte:head>
<main class="element-index bleed" style="--index-bg:  url({base}/assets/earth/earth-dakini-bg.webp)  100% 0/cover fixed no-repeat; --mob-index-bg-pos: 75% 0; --desc-bg-color: 100, 80%, 40%, .975; --desc-copy-color: var(--dark-neutral); --element-color: 100, 80%, 40%;">

  <section class="matrix">
    <div class="element-group">
      <a href="voice-of-earth" class="element-item wide">
        <div class="item">
          <div class="media"  style="--vid-ratio: 16 / 9; --thumb-height: 101%;--thumb-left: 0%; --element-vid-height: 120%;--top: -1.3%; --left: -9.5%;">
            <picture>
              <source srcset="{base}/assets/earth/voice-of-earth-th.webp">
              <img class="asset" src="{base}/assets/earth/voice-of-earth-th.jpg" alt="screen capture of the voice of earth background video">
            </picture>
            <iframe class="asset" src="https://player.vimeo.com/video/845482017?background=1&badge=0&autopause=0&player_id=0&app_id=58479&muted=1&Dnt=1" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Voice of Earth with yellow"></iframe>
          </div>
          <div class="content">

            <p class="title">Experience the Voice of Earth</p>
          </div>
        </div>
      </a>
    </div>
    <div class="element-group">

      <a href="kindness-to-self" class="element-item">
        <div class="item">
          <div class="media" style="--vid-ratio: 16 / 9; --thumb-height: 100%;--thumb-left: -50%; --element-vid-height: 100%;--top: 0%; --left: -40%;">
            <picture>
              <source srcset="{base}/assets/earth/kindess-to-self-th.webp">
              <img class="asset" src="{base}/assets/earth/kindess-to-self-th.jpg" alt="screen capture of the kindness to self background video">
            </picture>
            <iframe class="asset" src="https://player.vimeo.com/video/845478381?background=1&badge=0&autopause=0&player_id=0&app_id=58479&muted=1&Dnt=1" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Kindness to Self"></iframe>
          </div>
          <div class="content">
            <p class="desc">Nourish yourself with kindness and watch your self-compassion, self-confidence and inner strength increase</p>
            <p class="title">Kindness to Self</p>
          </div>
        </div>
      </a>
      <a href="path-to-the-heart" class="element-item">
        <div class="item">
          <div class="media" style="--vid-ratio: 4 / 3; --thumb-height: 100%;--thumb-left: -15%; --element-vid-height: 100%;--top: 0%; --left: -40%;">
            <picture>
              <source srcset="{base}/assets/earth/path-to-the-heart-th.webp">
              <img class="asset" src="{base}/assets/earth/path-to-the-heart-th.webp" alt="screen capture of the Path to the Heart video">
            </picture>

          </div>
          <div class="content">
            <p class="desc">When you feel lonely follow this path and find a loving companion that cares for you</p>
            <p class="title">Path to the Heart</p>
          </div>
        </div>
      </a>
      <a href="quieting-inner-critic" class="element-item">
        <div class="item">
          <div class="media" style="--vid-ratio: 16 / 9; --thumb-height: 100%;--thumb-left: -50%; --element-vid-height: 100%;--top: 0%; --left: -40%;">
            <picture>
              <source srcset="{base}/assets/earth/quieting-inner-critics-th.webp">
              <img class="asset" src="{base}/assets/earth/quieting-inner-critics-th.jpg" alt="screen capture of the Quieting Inner Critics background video">
            </picture>
            <iframe class="asset" src="https://player.vimeo.com/video/845478509?background=1&badge=0&autopause=0&player_id=0&app_id=58479&muted=1&Dnt=1" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Quieting Inner Critics"></iframe>
          </div>
          <div class="content">
            <p class="desc">4 unique ways to silence your negative self talk</p>
            <p class="title">Quieting Inner Critics</p>
          </div>
        </div>
      </a>
    </div>
    <div class="element-group">
      <a href="the-inner-critic" class="element-item">
        <div class="item">
          <div class="media" style="--vid-ratio: 16 / 9; --thumb-height: 100%;--thumb-left: -50%; --element-vid-height: 100%;--top: 0%; --left: -40%;">
            <picture>
              <source srcset="{base}/assets/earth/inner-critics-th.webp">
              <img class="asset" src="{base}/assets/earth/inner-critics-th.jpg" alt="screen capture of the inner critic background video">
            </picture>
            <iframe class="asset" src="https://player.vimeo.com/video/845478655?background=1&badge=0&autopause=0&player_id=0&app_id=58479&muted=1&Dnt=1" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="The Inner Critic"></iframe>
          </div>
          <div class="content">
            <p class="desc">Gain surprising results with this approach and stop obsessive thinking</p>
            <p class="title">The Inner Critic</p>
          </div>
        </div>
      </a>
      <a href="self-hypnosis" class="element-item">
        <div class="item">
          <div class="media" style="--vid-ratio: 16 / 9; --thumb-height: 100%;--thumb-left: -50%; --element-vid-height: 100%;--top: 0%; --left: -40%;">
            <picture>
              <source srcset="{base}/assets/earth/self-hypnosis-th.webp">
              <img class="asset" src="{base}/assets/earth/self-hypnosis-th.jpg" alt="screen capture of the self-hypnosis background video">
            </picture>
            <iframe class="asset" src="https://player.vimeo.com/video/845479946?background=1&badge=0&autopause=0&player_id=0&app_id=58479&muted=1&Dnt=1" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Self-hypnosis"></iframe>
          </div>
          <div class="content">
            <p class="desc">Accomplish new goals with this simple technique of self-hypnosis</p>
            <p class="title">Self Hypnosis</p>
          </div>
        </div>
      </a>
      <a href="grounding-meditation" class="element-item">
        <div class="item">
          <div class="media" style="--vid-ratio: 16 / 9; --thumb-height: 100%;--thumb-left: -50%; --element-vid-height: 100%;--top: 0%; --left: -40%;">
            <picture>
              <source srcset="{base}/assets/earth/grounding-meditation-th.webp">
              <img class="asset" src="{base}/assets/earth/grounding-meditation-th.jpg" alt="screen capture of the grounding meditation background video">
            </picture>
            <iframe class="asset" src="https://player.vimeo.com/video/845478328?background=1&badge=0&autopause=0&player_id=0&app_id=58479&muted=1&Dnt=1" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Grounding Meditation"></iframe>
          </div>
          <div class="content">
            <p class="desc">Find relief from troubling emotions by listening to this healing meditation from the Himalayas</p>
            <p class="title">Grounding Meditation</p>
          </div>
        </div>
      </a>
    </div>
    <div class="element-group">
      <a href="fresh-mind-cooking" class="element-item">
        <div class="item">
          <div class="media" style="--vid-ratio: 16 / 9; --thumb-height: 100%;--thumb-left: -50%; --element-vid-height: 100%;--top: 0%; --left: -40%;">
            <picture>
              <source srcset="{base}/assets/earth/fresh-mind-cooking-th.webp">
              <img class="asset" src="{base}/assets/earth/fresh-mind-cooking-th.jpg" alt="screen capture of the fresh mind cooking background video">
            </picture>
            <iframe class="asset" src="https://player.vimeo.com/video/845478794?background=1&badge=0&autopause=0&player_id=0&app_id=58479&muted=1&Dnt=1" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Fresh Mind Cooking"></iframe>
          </div>
          <div class="content">
            <p class="desc">Find new inspiration with simple and mindful ways to create delicious vegetarian cuisine</p>
            <p class="title">Fresh Mind Cooking</p>
          </div>
        </div>
      </a>
      <a href="art-workshop" class="element-item">
        <div class="item">
          <div class="media" style="--vid-ratio: 16 / 9; --thumb-height: 100%;--thumb-left: -40%; --element-vid-height: 100%;--top: 0%; --left: -40%;">
            <picture>
              <source srcset="{base}/assets/earth/art-workshop-th.webp">
              <img class="asset" src="{base}/assets/earth/art-workshop-th.jpg" alt="screen capture of the Art Workshop background video">
            </picture>
            <iframe class="asset" src="https://player.vimeo.com/video/845478722?background=1&badge=0&autopause=0&player_id=0&app_id=58479&muted=1&Dnt=1" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Art Workshop"></iframe>
          </div>
          <div class="content">
            <p class="desc">This art workshop offers an exciting  therapeutic journey of self discovery using colors and paints</p>
            <p class="title">Art Workshop</p>
          </div>
        </div>
      </a>
      <a href="sharing-earth/#slide-1" class="element-item">
        <div class="item">
          <div class="media" style="--vid-ratio: 9 / 16; --thumb-height: 175%;--thumb-left: 0%; --element-vid-height: 175%; --top: -60%; --left: -0%;">
            <picture>
              <source srcset="{base}/assets/earth/sharing-earth-th.webp">
              <img class="asset" src="{base}/assets/earth/sharing-earth-th.jpg" alt="screen capture from the sharing the beauty background video">
            </picture>
            <iframe class="asset" src="https://player.vimeo.com/video/845478741?background=1&badge=0&autopause=0&player_id=0&app_id=58479&muted=1&Dnt=1" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Sharing the Beauty"></iframe>
          </div>
          <div class="content">
            <p class="desc">You are invited to share your artistic connection with the Noble Element of Earth here</p>
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