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
        title: '<h2>Sharing the Passion of Fire</h2>',
        desc: '<p>In this space we share creations and practices related to the fire element which evoke passion to continue doing what you love to do. You are welcome to send your creative expressions such as photos (below 5MB), short poems, art work, short prose, and short videos (up to 2 minutes). Please mention your location.<br><br></p><p>Send to:<br> creativeresilience@khyentsefoundation.org</p>',
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
        title: 'The Guardian of the Fire painted by Tara Di Gesu',
        desc: 'A Fire Dakini painting by Tara Di Gesu',
        slideMedia:`${base}/assets/fire/sharing-fire/fire_dakin_tara_di_gesu.jpg`,
        slideMediaFallback: '',
        thumb:`${base}/assets/fire/sharing-fire/fire_dakin_tara_di_gesu_360_th.webp`,
        thumbFallback:`${base}/assets/fire/sharing-fire/fire_dakin_tara_di_gesu_th.jpg`,
        alt:'Thumbnail of a Fire Dakini painting by Tara Di Gesu',
        bgSettings: '',
        copyColor: '',
        fontWeight: '',
      },
      {
        type: 'video',
        title: 'Video by Rohita Singh. Australia',
        desc: '',
        slideMedia: 'https://player.vimeo.com/video/519338095?h=f23cd3965f',
        slideMediaFallback: '',
        thumb:`${base}/assets/fire/sharing-fire/fire-dance-video_360_th.webp`,
        thumbFallback:`${base}/assets/fire/sharing-fire/fire-dance-video_th.jpg`,
        alt:'Still capture from Rohita Singh\'s video ',
        bgSettings: '',
        copyColor: '',
        fontWeight: '',
      },
      {
        type: 'video',
        title: 'Video by Julien Ducret. France.',
        desc: '',
        slideMedia: 'https://player.vimeo.com/video/517810096?h=f23cd3965f',
        slideMediaFallback: '',
        thumb:`${base}/assets/fire/sharing-fire/fire-sand-painting_360_th.webp`,
        thumbFallback:`${base}/assets/fire/sharing-fire/fire-sand-painting_th.jpg`,
        alt:'Still capture from Julien Ducret\'s video ',
        bgSettings: '',
        copyColor: '',
        fontWeight: '',
      },
      {
        type: 'video',
        title: 'Video by Jonathan Matas. India.',
        desc: '',
        slideMedia: 'https://player.vimeo.com/video/510537867?h=f23cd3965f',
        slideMediaFallback: '',
        thumb:`${base}/assets/fire/sharing-fire/nourishing-fire-video_360_th.webp`,
        thumbFallback:`${base}/assets/fire/sharing-fire/nourishing-fire-video_th.jpg`,
        alt:'Still capture from Jonathan Matas\' video ',
        bgSettings: '',
        copyColor: '',
        fontWeight: '',
      },
      {
        type: 'image',
        title: 'Painting by Alicja Zmigrodzka. Poland.',
        desc: 'A Fire Dakini painting by Alicja Zmigrodzka',
        slideMedia:`${base}/assets/fire/sharing-fire/fire_alicja_zmigrodzka_fire_dakini_2.jpg`,
        slideMediaFallback: '',
        thumb:`${base}/assets/fire/sharing-fire/fire_alicja_zmigrodzka_fire_dakini_2_360_th.webp`,
        thumbFallback:`${base}/assets/fire/sharing-fire/fire_alicja_zmigrodzka_fire_dakini_2_th.jpg`,
        alt:'Thumbnail of a Fire Dakini painting by Alicja Zmigrodzka',
        bgSettings: '',
        copyColor: '',
        fontWeight: '',
      },
      {
        type: 'image',
        title: 'Photo by Sandra Scales. Thailand.',
        desc: 'A cremation ceremony in Thailand',
        slideMedia:`${base}/assets/fire/sharing-fire/fire_scales_cremation.jpg`,
        slideMediaFallback: '',
        thumb:`${base}/assets/fire/sharing-fire/fire_scales_cremation_360_th.webp`,
        thumbFallback:`${base}/assets/fire/sharing-fire/fire_scales_cremation_th.jpg`,
        alt:'Thumbnail of a cremation ceremony in Thailand',
        bgSettings: '',
        copyColor: '',
        fontWeight: '',
      },
      {
        type: 'image',
        title: 'Painting by Sandy Litchfield. Massachusetts.',
        desc: 'Impressionist forest landscape rendered in yellow hues',
        slideMedia:`${base}/assets/fire/sharing-fire/fire_litchfield_sun_drenched.jpg`,
        slideMediaFallback: '',
        thumb:`${base}/assets/fire/sharing-fire/fire_litchfield_sun_drenched_360_th.webp`,
        thumbFallback:`${base}/assets/fire/sharing-fire/fire_litchfield_sun_drenched_th.jpg`,
        alt:'Thumbnail of Sandy Litchfield\'s painting.',
        bgSettings: '',
        copyColor: '',
        fontWeight: '',
      },
      {
        type: 'image',
        title: 'Painting by Andra Samelson. New York City.',
        desc: 'Abstract painting of red splashes of color.',
        slideMedia:`${base}/assets/fire/sharing-fire/fire_andra_samuelson_1.jpg`,
        slideMediaFallback: '',
        thumb:`${base}/assets/fire/sharing-fire/fire_andra_samuelson_1_360_th.webp`,
        thumbFallback:`${base}/assets/fire/sharing-fire/fire_andra_samuelson_1_th.jpg`,
        alt:'Thumbnail of Andra Samelson\'s painting.',
        bgSettings: '',
        copyColor: '',
        fontWeight: '',
      },
      {
        type: 'image',
        title: 'Photo by Jason Papenfuss. Fireworks in Omaha, Nebraska.',
        desc: 'Dozens of exploding fireworks filling a night sky',
        slideMedia:`${base}/assets/fire/sharing-fire/fire_jason_papenfuss_16.jpg`,
        slideMediaFallback: '',
        thumb:`${base}/assets/fire/sharing-fire/fire_jason_papenfuss_16_360_th.webp`,
        thumbFallback:`${base}/assets/fire/sharing-fire/fire_jason_papenfuss_16_th.jpg`,
        alt:'Thumbnail of night time fireworks.',
        bgSettings: '',
        copyColor: '',
        fontWeight: '',
      },
      {
        type: 'image',
        title: 'Photo by Paul Norden. Chicago, Illinois.',
        desc: 'Red roses image incscribed with the poem by Rumi: \'If your beloved, has the live of fire, step in now and burn along.\'',
        slideMedia:`${base}/assets/fire/sharing-fire/fire_paul_norden_19.jpg`,
        slideMediaFallback: '',
        thumb:`${base}/assets/fire/sharing-fire/fire_paul_norden_19_360_th.webp`,
        thumbFallback:`${base}/assets/fire/sharing-fire/fire_paul_norden_19_th.jpg`,
        alt:'Thumbnail of red roses.',
        bgSettings: '',
        copyColor: '',
        fontWeight: '',
      },
      {
        type: 'image',
        title: 'Photo by Alana Siegel. California',
        desc: 'Glowing handprint incscribed with the poem by Yvonne Gold: \'I am warm, I am passionate, I am wild, I can transform, I can destroy, I can regenerate, I illumniate, You call me fire.\'',
        slideMedia:`${base}/assets/fire/sharing-fire/fire_alana_siegel_fire3.jpg`,
        slideMediaFallback: '',
        thumb:`${base}/assets/fire/sharing-fire/fire_alana_siegel_fire3_360_th.webp`,
        thumbFallback:`${base}/assets/fire/sharing-fire/fire_alana_siegel_fire3_th.jpg`,
        alt:'Thumbnail of the glowing handprint.',
        bgSettings: '',
        copyColor: '',
        fontWeight: '',
      },
      {
        type: 'slide',
        title: '<h3 class="subtitle">Other Fire Pages</h3>',
        desc: '<p><a href="../">Return to Fire</a><br><a href="../voice-of-fire">The Voice of Fire</a><br><a href="../dissolving-anger">Dissolving Anger</a><br><a href="../fire-meditation">Fire Meditation</a></p>',
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
  <title>Fire: Sharing the Passion of Fire</title>
</svelte:head>
<main on:click={updateSlides} class="content-page bleed no-pad"  style="--grad-color: 25, 100%, 50%; --element-bg: linear-gradient(hsla(var(--grad-color), .5), hsla(60, 51%, 50%, .7)), url({base}/assets/fire/sharing-fire-bg.webp) 0% 0%/100% auto no-repeat fixed; --element-mob-bg: linear-gradient(hsla(var(--grad-color), .5), hsla(60, 51%, 50%, .7)), url({base}/assets/fire/sharing-fire-bg.webp) 0 0/auto 100vh repeat scroll; --element-color: 211, 85%, 26%; background-blend-mode: hard-light, normal;">
  <Slides {...slideData}/>
  <Gallery {...slideData} />
</main>