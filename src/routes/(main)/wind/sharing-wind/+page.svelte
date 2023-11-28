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
        title: '<h2>Sharing the Freedom of Wind</h2>',
        desc: '<p>In this space we invite you to share any of your creative expressions that resonate with the freedom of the wind element. You are welcome to send photos (below 5MB), artwork, short poems, paintings, or short videos (up to 2 minutes). Please mention your location<br><br></p><p>Send to:<br> creativeresilience@khyentsefoundation.org</p>',
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
        title: 'The Guardian of the Wind painted by Tara Di Gesu',
        desc: 'A Wind Dakini painting by Tara Di Gesu',
        slideMedia:`${base}/assets/wind/sharing-wind/wind_dakini_2.webp`,
        slideMediaFallback: '',
        thumb:`${base}/assets/wind/sharing-wind/wind_dakini_2-360-th.webp`,
        thumbFallback:`${base}/assets/wind/sharing-wind/wind_dakini_2-th.jpg`,
        alt:'Thumbnail of a Fire Dakini painting by Tara Di Gesu',
        bgSettings: '',
        copyColor: '',
        fontWeight: '',
      },
      {
        type: 'video',
        title: 'Wind dance by Shania from Mainland China',
        desc: '',
        slideMedia: 'https://player.vimeo.com/video/506642009',
        slideMediaFallback: '',
        thumb:`${base}/assets/wind/sharing-wind/wind-dance-china-360-th.webp`,
        thumbFallback:`${base}/assets/wind/sharing-wind/wind-dance-china-th.jpg`,
        alt:'Still capture from Shania\'s video ',
        bgSettings: '',
        copyColor: '',
        fontWeight: '',
      },
      {
        type: 'video',
        title: 'Wind dance by Fran Schambeck. France.',
        desc: '',
        slideMedia: 'https://player.vimeo.com/video/510509703',
        slideMediaFallback: '',
        thumb:`${base}/assets/wind/sharing-wind/wind-dance-360-th.webp`,
        thumbFallback:`${base}/assets/wind/sharing-wind/wind-dance-th.jpg`,
        alt:'Still capture from Fran Schambeck\'s video ',
        bgSettings: '',
        copyColor: '',
        fontWeight: '',
      },
      {
        type: 'image',
        title: 'Photo by Chinch Gryniewicz.',
        desc: 'Wind blowing through Prayer Flags in the mountains inscribed with the following poem by Rumi—"I have come, to drag you, out of yourself, and take you into my heart, I have to bring out, the beauty you never knew you had, and lift you like a prayer to the sky."',
        slideMedia:`${base}/assets/wind/sharing-wind/prayer_flags_poem.jpg`,
        slideMediaFallback: '',
        thumb:`${base}/assets/wind/sharing-wind/prayer_flags_poem-360-th.webp`,
        thumbFallback:`${base}/assets/wind/sharing-wind/prayer_flags_poem-th.jpg`,
        alt:'Thumbnail of a prayer flags waving in the mountain.',
        bgSettings: '',
        copyColor: '',
        fontWeight: '',
      },
      {
        type: 'image',
        title: 'Painting by Alicja Zmigrodzka. Poland.',
        desc: 'Painting of a woman in a green dress flying down a grassy hill on a bicycle.',
        slideMedia:`${base}/assets/wind/sharing-wind/wind_alicja_zmigrodzka_wind_dakini_1.jpg`,
        slideMediaFallback: '',
        thumb:`${base}/assets/wind/sharing-wind/wind_alicja_zmigrodzka_wind_dakini_1-360-th.webp`,
        thumbFallback:`${base}/assets/wind/sharing-wind/wind_alicja_zmigrodzka_wind_dakini_1-th.jpg`,
        alt:'Thumbnail of a woman riding a bike down a grassy hill.',
        bgSettings: '',
        copyColor: '',
        fontWeight: '',
      },
      {
        type: 'image',
        title: 'Photo by Paul Norden. Chicago, Illinois.',
        desc: 'Billowing curtains in the corner of a room inscribed with the following poem by Sandra Scales: "Listen to the window curtain, resting on the breeze, helpless, relaxed, no concepts, no thoughts, just here"',
        slideMedia:`${base}/assets/wind/sharing-wind/wind_paul_norden_18.jpg`,
        slideMediaFallback: '',
        thumb:`${base}/assets/wind/sharing-wind/wind_paul_norden_18-360-th.webp`,
        thumbFallback:`${base}/assets/wind/sharing-wind/wind_paul_norden_18-th.jpg`,
        alt:'Thumbnail of a billowing curtains.',
        bgSettings: '',
        copyColor: '',
        fontWeight: '',
      },
      {
        type: 'image',
        title: 'Photo by Alana Siegel. California.',
        desc: 'Wind blown clouds featuring a rainbow flare',
        slideMedia:`${base}/assets/wind/sharing-wind/wind_alana_siegel_wind_1.jpg`,
        slideMediaFallback: '',
        thumb:`${base}/assets/wind/sharing-wind/wind_alana_siegel_wind_1-360-th.webp`,
        thumbFallback:`${base}/assets/wind/sharing-wind/wind_alana_siegel_wind_1-th.jpg`,
        alt:'Thumbnail of a wind blown clouds.',
        bgSettings: '',
        copyColor: '',
        fontWeight: '',
      },
      {
        type: 'image',
        title: 'Photo by Doug Pinto. Albuquerque, New Mexico.',
        desc: 'Dozens of colorful hot-air balloons drift into the sky',
        slideMedia:`${base}/assets/wind/sharing-wind/wind_doug_pinto_39.jpg`,
        slideMediaFallback: '',
        thumb:`${base}/assets/wind/sharing-wind/wind_doug_pinto_39-360-th.webp`,
        thumbFallback:`${base}/assets/wind/sharing-wind/wind_doug_pinto_39-th.jpg`,
        alt:'Thumbnail of a hot-air ballons.',
        bgSettings: '',
        copyColor: '',
        fontWeight: '',
      },
      {
        type: 'image',
        title: 'Photo by Alicja Zmigrodzka',
        desc: 'Painting of a women crying into a pillow while lying on a couch inscibed with the following: "Sometimes this is what resiliency looks like".',
        slideMedia:`${base}/assets/wind/sharing-wind/alicja_zmigrodzka_couch_lady.jpg`,
        slideMediaFallback: '',
        thumb:`${base}/assets/wind/sharing-wind/alicja_zmigrodzka_couch_lady-360-th.webp`,
        thumbFallback:`${base}/assets/wind/sharing-wind/alicja_zmigrodzka_couch_lady-th.jpg`,
        alt:'Thumbnail of Alicja Zmigrodzka\'s painting',
        bgSettings: '',
        copyColor: '',
        fontWeight: '',
      },
      {
        type: 'image',
        title: 'Photo by Jason Papenfuss. Bahamas.',
        desc: 'A person parasailing in clear blue skies inscribed with the following poem by Yvonne Gold: "I am free, I am clear, I am strong, I can cool, I can invigorate, I can transport, You call me wind"',
        slideMedia:`${base}/assets/wind/sharing-wind/wind_jason_papenfuss_18.jpg`,
        slideMediaFallback: '',
        thumb:`${base}/assets/wind/sharing-wind/wind_jason_papenfuss_18-360-th.webp`,
        thumbFallback:`${base}/assets/wind/sharing-wind/wind_jason_papenfuss_18-th.jpg`,
        alt:'Thumbnail of parasailing on a clear day',
        bgSettings: '',
        copyColor: '',
        fontWeight: '',
      },
      {
        type: 'slide',
        title: '<h3 class="subtitle">Other Wind Pages</h3>',
        desc: '<p><a href="../">Return to Wind</a><br><a href="../voice-of-wind">The Voice of Wind</a><br><a href="../changing-your-mood">Changing Your Mood</a><br><a href="../inaction-to-action">Changing Inaction to Action</a></p>',
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
  <title>Wind: Sharing the Freedom of Wind</title>
</svelte:head>
<main on:click={updateSlides} class="content-page bleed no-pad"  style="--grad-color: 101, 78%, 41%;--element-bg: linear-gradient(hsla(var(--grad-color), .8), hsla(var(--grad-color), .8)), url({base}/assets/wind/sharing-wind-bg3.webp) 0% 50%/100% auto no-repeat fixed; --element-mob-bg:linear-gradient(hsla(var(--grad-color), .8), hsla(var(--grad-color), .8)), url({base}/assets/wind/sharing-wind-bg3.webp) 0 0/auto 100vh repeat scroll; --element-color: 211, 85%, 26%; background-blend-mode: multiply, normal">
  <Slides {...slideData}/>
  <Gallery {...slideData} />
</main>