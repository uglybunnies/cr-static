<script>
  export let slides;
</script>
<section class="media-carousel">
  <div id="carouselDeck" class="carousel-deck">
    <a href="#slide-{slides.length}" class="slide-prev"><span>previous slide</span></a>
    <div class="track">
      {#each slides as slide, i}
        <div id="slide-{i+1}" class="slide">
          {#if slide.type ==='slide'}
            <div class="media-slide text-slide" style="--bg-settings: {slide.bgSettings}; --copy-color: {slide.copyColor};--font-weight: {slide.fontWeight};">
              {@html slide.title}
              {@html slide.desc}
            </div>
            <div class="caption"></div>
          {:else if slide.type==='video'}
            <iframe src="{slide.slideMedia}" class="media-video video-player" title="vimeo-player" allowfullscreen frameborder="0"></iframe>
            <p class="caption">{slide.title}</p>
          {:else}
            <img src="{slide.slideMedia}" alt="{slide.desc}" class="media-image">
            <p class="caption">{slide.title}</p>
          {/if}
        </div>
      {/each}
    </div>
    <a href="#slide-2" class="slide-next"><span>next slide</span></a>
  </div>
</section>