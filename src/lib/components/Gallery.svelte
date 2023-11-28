<script>
  export let slides;
</script>
<section class="media-gallery">
  <ul class="thumbs">
    {#each slides as thumb, i}
      <li>
        <a href="#slide-{i+1}" class="slide">
          {#if thumb.type === 'slide'}
            <div class="media-slide text-slide"
                 style="--bg-settings: {thumb.bgSettings}; --copy-color: {thumb.copyColor}; --font-weight: {thumb.fontWeight}">
                 {@html thumb.title}
                 {@html thumb.desc}
            </div>
          {:else}
            <img src="{thumb.thumbFallback}" 
                 alt="{thumb.alt}"
                 srcset="{thumb.thumb} 288w, {thumb.thumbFallback} 320w, {thumb.thumb} 634w"
                 sizes="(max-width: 600px) 18em, (min-width: 601px) and (max-width: 1024px) 20em, 39em"
            >
          {/if}
        </a>
      </li>
    {/each}
  </ul>
</section>