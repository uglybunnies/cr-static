<script>
  import { base } from '$app/paths';
  import { onMount }  from 'svelte';
  import Slides from '$lib/components/Slides.svelte';
  import Gallery from '$lib/components/Gallery.svelte';
  /**
   *  {
        type: '', // one of 3, text, image or video
        title: '', // used for the caption
        desc: '', // used for the slide alt
        slideMedia: '', // src for media file
        slideMediaFallback: '', // for use as image fallback
        thumb: '', // src of thumbnail
        thumbFallback: '', // src of responsive thumb fallback
        alt:'', // alt copy of the thumb
        bgSettings: '', // background property values for text slides
        copyColor: '', // foreground color for text slides
        fontWeight: '', // font weight for text slides

      },
   */
  export let slideData = {
    slides: [
      {
        type: 'slide',
        title: '<h2>Sharing Visions of Water</h2>',
        desc: '<p>Here in this space we share our visions of water. Please feel free to send short poems, artwork, brief writings, photos (below 5MB) or short videos (up to 2 minutes)… relating to the essense of water. Please mention your location.<br><br></p><p>Send to:<br> creativeresilience@khyentsefoundation.org</p>',
        slideMedia: '',
        slideMediaFallback: '',
        thumb: '',
        thumbFallback: '',
        alt:'',
        bgSettings: 'radial-gradient(hsla(300, 100%, 7%, 7), hsla(300, 100%, 2%, .2)), hsl(255, 0%, 0%)',
        copyColor: 'var(--light-color)',
        fontWeight: '300',
      },
      {
        type: 'image',
        title: 'The Guardian of the Water Painted by Tara di Gesu',
        desc: 'A Water Dakini painting by Tara di Gesu',
        slideMedia:`${base}/assets/water/sharing-water/water_dakini_closeup.webp`,
        slideMediaFallback: '',
        thumb:`${base}/assets/water/sharing-water/water_dakini_closeup_320_th.webp`,
        thumbFallback:`${base}/assets/water/sharing-water/water_dakini_closeup_th.jpg`,
        alt:'Thumbnail of a Water Dakini painting by Tara di Gesu',
        bgSettings: '',
        copyColor: '',
        fontWeight: '',
      },
      {
        type: 'video',
        title: 'Video by Marisa Pearson. France',
        desc: '',
        slideMedia: 'https://player.vimeo.com/video/517806361?h=5da8ddceff',
        slideMediaFallback: '',
        thumb:`${base}/assets/water/sharing-water/water_marisa_pearson_france_320_th.webp`,
        thumbFallback:`${base}/assets/water/sharing-water/water_marisa_pearson_france_th.jpg`,
        alt:'Still capture from Marisa Pearson\'s Video',
        bgSettings: '',
        copyColor: '',
        fontWeight: '',
      },
      {
        type: 'video',
        title: 'Video by Noa Jones. Iceland',
        desc: '',
        slideMedia: 'https://player.vimeo.com/video/548311525?h=7642d44b14',
        slideMediaFallback: '',
        thumb:`${base}/assets/water/sharing-water/water_noa_jones_iceland_320_th.webp`,
        thumbFallback:`${base}/assets/water/sharing-water/water_noa_jones_iceland_th.jpg`,
        alt:'Still capture from Noa Jones\' Video',
        bgSettings: '',
        copyColor: '',
        fontWeight: '',
      },
      {
        type: 'image',
        title: 'Gondola, Gondola by Tom Bottoms. Santa Cruz, California',
        desc: 'A painting of a gondola on water viewed from above',
        slideMedia:`${base}/assets/water/sharing-water/water_tom_bottom.webp`,
        slideMediaFallback: '',
        thumb:`${base}/assets/water/sharing-water/water_tom_bottom_320_th.webp`,
        thumbFallback:`${base}/assets/water/sharing-water/water_tom_bottom_th.jpg`,
        alt:'Thumbnail of Tom Bottoms\' painting',
        bgSettings: '',
        copyColor: '',
        fontWeight: '',
      },
      {
        type: 'image',
        title: 'Photo by Doug Pinto. Santa Fe, New Mexico.',
        desc: 'Photo of snow-blanketed, evergreen trees against a clear blue sky',
        slideMedia: `${base}/assets/water/sharing-water/water_doug_pinto_52.webp`,
        slideMediaFallback: '',
        thumb:`${base}/assets/water/sharing-water/water_doug_pinto_52_320_th.webp`,
        thumbFallback:`${base}/assets/water/sharing-water/water_doug_pinto_52_th.jpg`,
        alt:'Thumbnail of Doug Pinto\'s landscape',
        bgSettings: '',
        copyColor: '',
        fontWeight: '',
      },
      {
        type: 'image',
        title: 'Photo by Christie Longaker. Ireland.',
        desc: 'Waves splashing against black cliffs viewed from above',
        slideMedia:`${base}/assets/water/sharing-water/water_longaker_mex_black_cliffs_turquoise_ocean.webp`,
        slideMediaFallback: '',
        thumb:`${base}/assets/water/sharing-water/water_longaker_mex_black_cliffs_turquoise_ocean_320_th.webp`,
        thumbFallback:`${base}/assets/water/sharing-water/water_longaker_mex_black_cliffs_turquoise_ocean_th.jpg`,
        alt:'Thumbnail  of Christie Longaker\'s landscape',
        bgSettings: '',
        copyColor: '',
        fontWeight: '',
      },
      {
        type: 'image',
        title: 'Photo by Jason Papenfuss. Bahamas.',
        desc: 'The horizon of the ocean',
        slideMedia:`${base}/assets/water/sharing-water/water_jason_papenfuss_20.webp`,
        slideMediaFallback: '',
        thumb:`${base}/assets/water/sharing-water/water_jason_papenfuss_20_320_th.webp`,
        thumbFallback:`${base}/assets/water/sharing-water/water_jason_papenfuss_20_th.jpg`,
        alt:'Thumbnail of Jason Papenfuss\' ocean scene',
        bgSettings: '',
        copyColor: '',
        fontWeight: '',
      },
      {
        type: 'image',
        title: 'Painting by Terrell Minton',
        desc: 'A painting of a koi pond with several varieties of koi fish',
        slideMedia:`${base}/assets/water/sharing-water/water_minton_fish_in_water.webp`,
        slideMediaFallback: '',
        thumb:`${base}/assets/water/sharing-water/water_marisa_pearson_france_320_th.webp`,
        thumbFallback:`${base}/assets/water/sharing-water/water_marisa_pearson_france_th.jpg`,
        alt:'Thumbnail of Terrell Minton\'s painting',
        bgSettings: '',
        copyColor: '',
        fontWeight: '',
      },
      {
        type: 'image',
        title: 'Green Waves Painting by Susan Killfoil',
        desc: 'A painting of roiling ocean waves',
        slideMedia:`${base}/assets/water/sharing-water/susan_killfoil_green_waves.webp`,
        slideMediaFallback: '',
        thumb:`${base}/assets/water/sharing-water/susan_killfoil_green_waves_320_th.webp`,
        thumbFallback:`${base}/assets/water/sharing-water/susan_killfoil_green_waves_th.png`,
        alt:'Thumbnail of Susan Killfoil\'s painting',
        bgSettings: '',
        copyColor: '',
        fontWeight: '',
      },
      {
        type: 'image',
        title: 'Solitude Painting by Susan Killfoil',
        desc: 'A painting of a brown bear glancing back while standing at a precipice overlooking water',
        slideMedia:`${base}/assets/water/sharing-water/susan_killfoil_solitude.webp`,
        slideMediaFallback: '',
        thumb:`${base}/assets/water/sharing-water/susan_killfoil_solitude_320_th.webp`,
        thumbFallback:`${base}/assets/water/sharing-water/susan_killfoil_solitude_th.png`,
        alt:'Thumbnail of Susan Killfoil\'s painting',
        bgSettings: '',
        copyColor: '',
        fontWeight: '',
      },
      {
        type: 'image',
        title: 'Photo by Christie Longaker. Netherlands.',
        desc: 'A photo of a swan floating on a canal with cows in the background drinking the water.',
        slideMedia:`${base}/assets/water/sharing-water/water_longaker_nl_canal_swan_2_cows.webp`,
        slideMediaFallback: '',
        thumb:`${base}/assets/water/sharing-water/water_longaker_nl_canal_swan_2_cows_320_th.webp`,
        thumbFallback:`${base}/assets/water/sharing-water/water_longaker_nl_canal_swan_2_cows_th.jpg`,
        alt:'Thumbnail of Christie Longaker\'s scene',
        bgSettings: '',
        copyColor: '',
        fontWeight: '',
      },
      {
        type: 'image',
        title: 'Photo by Christie Longaker. Netherlands.',
        desc: 'A photo of a swan floating on a public park pond with orange tulips in the foreground.',
        slideMedia:`${base}/assets/water/sharing-water/water_longaker_nl_fountain_swan_canal_orange_tulips.webp`,
        slideMediaFallback: '',
        thumb:`${base}/assets/water/sharing-water/water_longaker_nl_fountain_swan_canal_orange_tulips_320_th.webp`,
        thumbFallback:`${base}/assets/water/sharing-water/water_longaker_nl_fountain_swan_canal_orange_tulips_th.jpg`,
        alt:'Thumbnail of Christie Longaker\'s scene',
        bgSettings: '',
        copyColor: '',
        fontWeight: '',
      },
      {
        type: 'image',
        title: 'Photo by Paul Norden. Iguazu Falls, Brazil.',
        desc: 'The Iguazu Falls in Brazil',
        slideMedia:`${base}/assets/water/sharing-water/water_paul_norden_9.webp`,
        slideMediaFallback: '',
        thumb:`${base}/assets/water/sharing-water/water_paul_norden_9_320_th.webp`,
        thumbFallback:`${base}/assets/water/sharing-water/water_paul_norden_9_th.jpg`,
        alt:'',
        bgSettings: '',
        copyColor: '',
        fontWeight: '',
      },
      {
        type: 'image',
        title: 'Painting by Alicja Zmigrodzka. Poland.',
        desc: 'A photo of Alicja Zmigrodzka\'s painting',
        slideMedia:`${base}/assets/water/sharing-water/water_alicja_zmigrodzka_water_dakini_1.webp`,
        slideMediaFallback: '',
        thumb:`${base}/assets/water/sharing-water/water_alicja_zmigrodzka_water_dakini_1_320_th.webp`,
        thumbFallback:`${base}/assets/water/sharing-water/water_alicja_zmigrodzka_water_dakini_1_th.jpg`,
        alt:'Thumbnail of Christie Longaker\'s scene',
        bgSettings: '',
        copyColor: '',
        fontWeight: '',
      },
      {
        type: 'image',
        title: 'Photo by Christie Longaker. Netherlands.',
        desc: 'Poem by Yvonne Gold overlaying a tropical water fall photo: I am mist, I am fluid, I am solid, I can calm, I can invigorate, I can empower, I purify, You call me water',
        slideMedia:`${base}/assets/water/sharing-water/water_longaker_nl_waterfall_small_bottom_poem.webp`,
        slideMediaFallback: '',
        thumb:`${base}/assets/water/sharing-water/water_longaker_nl_waterfall_small_bottom_poem_320_th.webp`,
        thumbFallback:`${base}/assets/water/sharing-water/water_longaker_nl_waterfall_small_bottom_poem_th.jpg`,
        alt:'Thumbnail of Christie Longaker\'s scene',
        bgSettings: '',
        copyColor: '',
        fontWeight: '',
      },
      {
        type: 'slide',
        title: '<h3 class="subtitle">Other Water Pages</h3>',
        desc: '<p><a href="../">Return to Water</a><br><a href="../voice-of-water">Voice of Water</a><br><a href="../art-of-listening">The Art of Listening</a><br><a href="../finding-flexibility">Finding Flexibility</a><br><a href="../water-meditation">Water Meditation</a></p>',
        slideMedia: '',
        slideMediaFallback: '',
        thumb: '',
        thumbFallback: '',
        alt:'',
        bgSettings: 'radial-gradient(hsla(300, 100%, 7%, 7), hsla(300, 100%, 2%, .2)), hsl(255, 0%, 0%)',
        copyColor: 'var(--light-color)',
        fontWeight: '300',
      },
    ]
  };
  let count = slideData.slides.length;
  let zoomed = false;

  onMount(() => {
    window.location.assign('#slide-1');
  });

  function updateSlides(event) {
    let target = event.target;
    let link = target.closest('a');
    let next = document.querySelector('.slide-next');
    let prev = document.querySelector('.slide-prev');
    if (!link && target.tagName === 'IMG') {      
      target.style.scale = (!zoomed) ? 1.5 : 1;
      target.classList.toggle('large');
      zoomed = !zoomed;
    }
    else {
      let url = document.location;
      let slideHash = url.hash.split('-');
      let slideIndex = parseInt(slideHash[1]);
      // determine if an image is zoomed (only one at a time should be possible)
      let zoomedImg = document.querySelector('.media-image[style]');

      // reset the image zoom if a zoomed image is found
      if (zoomedImg) {
        zoomedImg.removeAttribute('style');
        zoomedImg.classList.remove('large');
        zoomed = false;
      }
      // next should be the slide after the current or set to the first slide if 
      // the last slide is showing
      next.href = (slideIndex === count) ? '#slide-1':`#slide-${slideIndex + 1}`;

      // prev should be the slide before the current or set to the last slide if 
      // the first slide is showing
      prev.href = (slideIndex < 2)? `#slide-${count}` : `#slide-${slideIndex - 1}`;
    }
  }
</script>
<svelte:head>
  <title>Water: Sharing Visions of Water</title>
</svelte:head>
<main on:click={updateSlides} class="content-page bleed no-pad"  style="--element-bg: linear-gradient(hsla(200, 100%, 25%, .6), hsla(185, 51%, 50%, .8)), url({base}/assets/water/water-element-lg-bg-lighten.webp) 100% 100%/150% auto no-repeat fixed;  --element-mob-bg: linear-gradient(hsla(185, 51%, 50%, .5), hsla(185, 51%, 50%, .8)), url({base}/assets/water/water-element-lg-bg-lighten.webp) 0 0/auto 100vh repeat; --element-color: 211, 85%, 26%;">
  <Slides {...slideData}/>
  <Gallery {...slideData} />
</main>