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
        title: '<h2>Sharing the Beauty of Earth</h2>',
        desc: '<p>In this space we invite you to share your experiences of the earth element. We welcome creative expressions of earth in the form of photos (below 5MB), short videos (up to 2 minutes), short poems, artwork or brief writings. Please mention your location.<br><br></p><p>Send to:<br> creativeresilience@khyentsefoundation.org</p>',
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
        title: 'The Guardian of the Earth painted by Tara Di Gesu',
        desc: 'An Earth Dakini painting by Tara Di Gesu',
        slideMedia:`${base}/assets/earth/sharing-earth/earth_dakini_closeup1.jpg`,
        slideMediaFallback: '',
        thumb:`${base}/assets/earth/sharing-earth/earth_dakini_painting_360_th.webp`,
        thumbFallback:`${base}/assets/earth/sharing-earth/earth_dakini_painting_th.jpg`,
        alt:'Thumbnail of an Earth Dakini painting by Tara Di Gesu',
        bgSettings: '',
        copyColor: '',
        fontWeight: '',
      },
      {
        type: 'video',
        title: 'Video by Chagdud Gonpa Brasil/Khadro Ling',
        desc: '',
        slideMedia: 'https://player.vimeo.com/video/678947688?h=f23cd3965f',
        slideMediaFallback: '',
        thumb:`${base}/assets/earth/sharing-earth/earth_green_queen_360_th.webp`,
        thumbFallback:`${base}/assets/earth/sharing-earth/earth_green_queen_th.jpg`,
        alt:'Still capture from Chagdud Gonpa Brasil and Khadro Ling\'s video ',
        bgSettings: '',
        copyColor: '',
        fontWeight: '',
      },
      {
        type: 'video',
        title: 'Video by Jonathan Matas. India.',
        desc: '',
        slideMedia: 'https://player.vimeo.com/video/505928827',
        slideMediaFallback: '',
        thumb:`${base}/assets/earth/sharing-earth/jonathan_statue_video_screenshot_360_th.webp`,
        thumbFallback:`${base}/assets/earth/sharing-earth/jonathan_statue_video_screenshot_th.jpg`,
        alt:'Still capture from Jonathan Matas\' video',
        bgSettings: '',
        copyColor: '',
        fontWeight: '',
      },
      {
        type: 'image',
        title: 'Dzongsar Khyentse Rinpoche photo by Pawo Choyning Dorji. Bodhgaya, India.',
        desc: 'Dzongsar Khyentse Rinpoche taken by Pawo Choyning Dorji',
        slideMedia:`${base}/assets/earth/sharing-earth/gold_dkr_walking_cows_1.jpg`,
        slideMediaFallback: '',
        thumb:`${base}/assets/earth/sharing-earth/gold_dkr_walking_cows_360_th.webp`,
        thumbFallback:`${base}/assets/earth/sharing-earth/gold_dkr_walking_cows_th.jpg`,
        alt:'Thumbnail of a Dzongsar Khyentse Rinpoche',
        bgSettings: '',
        copyColor: '',
        fontWeight: '',
      },
      {
        type: 'image',
        title: 'Painting by Terrell Minton.',
        desc: 'Terrell Minton\'s impressionist painting of a Lily Pond',
        slideMedia:`${base}/assets/earth/sharing-earth/earth_terrell_minton_lily_pond.jpg`,
        slideMediaFallback: '',
        thumb:`${base}/assets/earth/sharing-earth/earth_terrell_minton_lily_pond_360_th.webp`,
        thumbFallback:`${base}/assets/earth/sharing-earth/earth_terrell_minton_lily_pond_th.jpg`,
        alt:'Thumbnail of Terrell Minton\'s painting',
        bgSettings: '',
        copyColor: '',
        fontWeight: '',
      },
      {
        type: 'image',
        title: 'Chocolate Sunrise Painting by Susan Killfoil.',
        desc: 'Susan Killfoil\'s drip-style landscape.',
        slideMedia:`${base}/assets/earth/sharing-earth/susan_killfoil_chocolate_sunrise.jpg`,
        slideMediaFallback: '',
        thumb:`${base}/assets/earth/sharing-earth/susan_killfoil_chocolate_sunrise_360_th.webp`,
        thumbFallback:`${base}/assets/earth/sharing-earth/susan_killfoil_chocolate_sunrise_360_th.jpg`,
        alt:'Thumbnail of Terrell Minton\'s painting',
        bgSettings: '',
        copyColor: '',
        fontWeight: '',
      },
      {
        type: 'image',
        title: 'Painting by Alicja Zmigrodzka. Poland.',
        desc: 'Alicja Zmigrodzka\'s portrait of an earth goddess.',
        slideMedia:`${base}/assets/earth/sharing-earth/earth_alicja_zmigrodzka_earth_dakini_1.jpg`,
        slideMediaFallback: '',
        thumb:`${base}/assets/earth/sharing-earth/earth_alicja_zmigrodzka_earth_dakini_360_th.webp`,
        thumbFallback:`${base}/assets/earth/sharing-earth/earth_alicja_zmigrodzka_earth_dakini_th.jpg`,
        alt:'Thumbnail of Alicja Zmigrodzka\'s painting',
        bgSettings: '',
        copyColor: '',
        fontWeight: '',
      },
      {
        type: 'image',
        title: 'Photo by Paul Norden. Brazil.',
        desc: 'Brazilian open-air produce market',
        slideMedia:`${base}/assets/earth/sharing-earth/earth_5_paul_norden_market.jpg`,
        slideMediaFallback: '',
        thumb:`${base}/assets/earth/sharing-earth/earth_5_paul_norden_market_360_th.webp`,
        thumbFallback:`${base}/assets/earth/sharing-earth/earth_5_paul_norden_market_th.jpg`,
        alt:'Thumbnail of Paul Norden\'s photo',
        bgSettings: '',
        copyColor: '',
        fontWeight: '',
      },
      {
        type: 'image',
        title: 'Photo by Doug Pinto. Santa Fe, New Mexico.',
        desc: 'Bushells of apples',
        slideMedia:`${base}/assets/earth/sharing-earth/earth_doug_pinto_buckets.jpg`,
        slideMediaFallback: '',
        thumb:`${base}/assets/earth/sharing-earth/earth_doug_pinto_buckets_360_th.webp`,
        thumbFallback:`${base}/assets/earth/sharing-earth/earth_doug_pinto_buckets_th.jpg`,
        alt:'Thumbnail of Doug Pinto\'s photo',
        bgSettings: '',
        copyColor: '',
        fontWeight: '',
      },
      {
        type: 'image',
        title: 'Photo by Doug Pinto. Santa Fe, New Mexico.',
        desc: 'Aged wall strewn with plants along a sidewalk',
        slideMedia:`${base}/assets/earth/sharing-earth/earth_doug_pinto_sidewalk.jpg`,
        slideMediaFallback: '',
        thumb:`${base}/assets/earth/sharing-earth/earth_doug_pinto_sidewalk_360_th.webp`,
        thumbFallback:`${base}/assets/earth/sharing-earth/earth_doug_pinto_sidewalk_th.jpg`,
        alt:'Thumbnail of Doug Pinto\'s photo',
        bgSettings: '',
        copyColor: '',
        fontWeight: '',
      },
      {
        type: 'image',
        title: 'Photo by Jonathan Matas. Kolkata, India.',
        desc: 'A nude earth mother sculpture',
        slideMedia:`${base}/assets/earth/sharing-earth/earth_jonathan_matas_nude_statue.jpg`,
        slideMediaFallback: '',
        thumb:`${base}/assets/earth/sharing-earth/earth_jonathan_matas_nude_statue_360_th.webp`,
        thumbFallback:`${base}/assets/earth/sharing-earth/earth_jonathan_matas_nude_statue_th.jpg`,
        alt:'Thumbnail of Jonathan Matas\' photo',
        bgSettings: '',
        copyColor: '',
        fontWeight: '',
      },
      {
        type: 'image',
        title: 'Painting by Sandy Litchfield. Spring Hike.',
        desc: 'Colorful landscape of farmlands in a valley',
        slideMedia:`${base}/assets/earth/sharing-earth/earth_sandy_litchfield_spring_hike.jpg`,
        slideMediaFallback: '',
        thumb:`${base}/assets/earth/sharing-earth/earth_sandy_litchfield_spring_hike_360_th.webp`,
        thumbFallback:`${base}/assets/earth/sharing-earth/earth_sandy_litchfield_spring_hike_th.jpg`,
        alt:'Thumbnail of Sandy Litchfield\'s painting',
        bgSettings: '',
        copyColor: '',
        fontWeight: '',
      },
      {
        type: 'image',
        title: 'Painting by Alicja Zmigrodzka. Portugal.',
        desc: 'A dipiction of the life cycle of flowers inscribed with \'Sometimes this is what resiliency looks like\'',
        slideMedia:`${base}/assets/earth/sharing-earth/alicja_zmigrodzka_daisy_cycle.jpg`,
        slideMediaFallback: '',
        thumb:`${base}/assets/earth/sharing-earth/alicja_zmigrodzka_daisy_cycle_360_th.webp`,
        thumbFallback:`${base}/assets/earth/sharing-earth/alicja_zmigrodzka_daisy_cycle_th.jpg`,
        alt:'Thumbnail of Alicja Zmigrodzka\'s painting',
        bgSettings: '',
        copyColor: '',
        fontWeight: '',
      },
      {
        type: 'image',
        title: 'Photo by Sandra Scales. Inishmaan, Aran Islands, Ireland.',
        desc: 'Grayscale photo of a stone hut inscribed with \'Living here, on this island, the sense of solitude is immense.\'',
        slideMedia:`${base}/assets/earth/sharing-earth/scales_aran_islands_first.jpg`,
        slideMediaFallback: '',
        thumb:`${base}/assets/earth/sharing-earth/scales_aran_islands_first_360_th.webp`,
        thumbFallback:`${base}/assets/earth/sharing-earth/scales_aran_islands_first_th.jpg`,
        alt:'Thumbnail of Sandra Scales\' photo',
        bgSettings: '',
        copyColor: '',
        fontWeight: '',
      },
      {
        type: 'image',
        title: 'Photo by Sandra Scales. Inishmaan, Aran Islands, Ireland.',
        desc: 'Grayscale landscape of a stone walls with a child in the foreground inscribed with \'Only the silver grey of slate rock, no trees, no grass.\'',
        slideMedia:`${base}/assets/earth/sharing-earth/scales_aran_islands_second.jpg`,
        slideMediaFallback: '',
        thumb:`${base}/assets/earth/sharing-earth/scales_aran_islands_second_360_th.webp`,
        thumbFallback:`${base}/assets/earth/sharing-earth/scales_aran_islands_second_th.jpg`,
        alt:'Thumbnail of Sandra Scales\' photo',
        bgSettings: '',
        copyColor: '',
        fontWeight: '',
      },
      {
        type: 'image',
        title: 'Photo by Sandra Scales. Inishmaan, Aran Islands, Ireland.',
        desc: 'Grayscale landscape of a blanketed with snow inscribed with \'I could not find or realize my own body.\'',
        slideMedia:`${base}/assets/earth/sharing-earth/scales_aran_islands_third.jpg`,
        slideMediaFallback: '',
        thumb:`${base}/assets/earth/sharing-earth/scales_aran_islands_third_360_th.webp`,
        thumbFallback:`${base}/assets/earth/sharing-earth/scales_aran_islands_third_th.jpg`,
        alt:'Thumbnail of Sandra Scales\' photo',
        bgSettings: '',
        copyColor: '',
        fontWeight: '',
      },
      {
        type: 'image',
        title: 'Photo by Sandra Scales. Inishmaan, Aran Islands, Ireland.',
        desc: 'Grayscale photo of men carrying a long boat over their heads inscribed with \'I seemed to exist merely in my perception of the waves, the crying birds,  and the smell of seaweed. -Sandra Scales\'',
        slideMedia:`${base}/assets/earth/sharing-earth/scales_aran_islands_fourth.jpg`,
        slideMediaFallback: '',
        thumb:`${base}/assets/earth/sharing-earth/scales_aran_islands_fourth_360_th.webp`,
        thumbFallback:`${base}/assets/earth/sharing-earth/scales_aran_islands_fourth_th.jpg`,
        alt:'Thumbnail of Sandra Scales\' photo',
        bgSettings: '',
        copyColor: '',
        fontWeight: '', 
      },
      {
        type: 'image',
        title: 'Photo by Paul Norden. Chicago, Illinois.',
        desc: 'Closeup detail of a pink-toned white rose inscibed with \'Let the beauty we love be what we do -Rumi\'',
        slideMedia:`${base}/assets/earth/sharing-earth/earth_paul_norden_rose.jpg`,
        slideMediaFallback: '',
        thumb:`${base}/assets/earth/sharing-earth/earth_paul_norden_rose_360_th.webp`,
        thumbFallback:`${base}/assets/earth/sharing-earth/earth_paul_norden_rose_th.jpg`,
        alt:'Thumbnail of Paul Norden\'s photo',
        bgSettings: '',
        copyColor: '',
        fontWeight: '', 
      },
      {
        type: 'image',
        title: 'Photo by Paul Norden. Chicago, Illinois.',
        desc: 'Wild poppies growing in an open field',
        slideMedia:`${base}/assets/earth/sharing-earth/earth_paul_norden_wildflowers.jpg`,
        slideMediaFallback: '',
        thumb:`${base}/assets/earth/sharing-earth/earth_paul_norden_wildflowers_360_th.webp`,
        thumbFallback:`${base}/assets/earth/sharing-earth/earth_paul_norden_wildflowers_th.jpg`,
        alt:'Thumbnail of Paul Norden\'s photo',
        bgSettings: '',
        copyColor: '',
        fontWeight: '', 
      },
      {
        type: 'image',
        title: 'Photo by Jonathan Matas. India.',
        desc: 'Open-air market in Calcutta',
        slideMedia:`${base}/assets/earth/sharing-earth/earth_jonathan_matas_calcutta_market.jpg`,
        slideMediaFallback: '',
        thumb:`${base}/assets/earth/sharing-earth/earth_jonathan_matas_calcutta_market_360_th.webp`,
        thumbFallback:`${base}/assets/earth/sharing-earth/earth_jonathan_matas_calcutta_market_th.jpg`,
        alt:'Thumbnail of Jonathan Matas\' photo',
        bgSettings: '',
        copyColor: '',
        fontWeight: '', 
      },
      {
        type: 'image',
        title: 'Photo by Alana Siegel. California.',
        desc: 'A drainage pipe set in a wall with a leaf sitting at its mouth inscibed with \'Finding secret beauty\'',
        slideMedia:`${base}/assets/earth/sharing-earth/alana_siegel_earth_drainpipe.jpg`,
        slideMediaFallback: '',
        thumb:`${base}/assets/earth/sharing-earth/alana_siegel_earth_drainpipe_360_th.webp`,
        thumbFallback:`${base}/assets/earth/sharing-earth/alana_siegel_earth_drainpipe_th.jpg`,
        alt:'Thumbnail of Alana Siegel\'s photo',
        bgSettings: '',
        copyColor: '',
        fontWeight: '', 
      },
      {
        type: 'video',
        title: 'Video by Julien Ducret. France',
        desc: '',
        slideMedia: 'https://player.vimeo.com/video/506641854',
        slideMediaFallback: '',
        thumb:`${base}/assets/earth/sharing-earth/1048507632_640x360.jpg`,
        thumbFallback:`${base}/assets/earth/sharing-earth/1048507632_640x360.jpg`,
        alt:'Still capture from Julien Ducret\'s video ',
        bgSettings: '',
        copyColor: '',
        fontWeight: '',
      },
      {
        type: 'image',
        title: 'Photo by Paul Norden. Chicago, Illinois',
        desc: 'A bowl of fruit inscibed with a poem: \'I am reliable, I am abundant, I am harmonious, I can nurture, I can connect, I can provide, I support, You call me earth -Yvonne Gold\'',
        slideMedia:`${base}/assets/earth/sharing-earth/earth_paul_norden_food_bowl.jpg`,
        slideMediaFallback: '',
        thumb:`${base}/assets/earth/sharing-earth/earth_paul_norden_food_bowl_360_th.webp`,
        thumbFallback:`${base}/assets/earth/sharing-earth/earth_paul_norden_food_bowl_th.jpg`,
        alt:'Thumbnail of Paul Norden\'s photo',
        bgSettings: '',
        copyColor: '',
        fontWeight: '', 
      },
      {
        type: 'slide',
        title: '<h3 class="subtitle">Other Earth Pages</h3>',
        desc: '<p><a href="../">Return to Earth Landing</a><br><a href="../voice-of-earth">The Voice of Earth</a><br><a href="../path-to-the-heart">Path to the Heart</a><br><a href="../quieting-inner-critic">Quieting the Inner Critic</a></p>',
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
  <title>Earth: Sharing the Beauty of Earth</title>
</svelte:head>
<main on:click={updateSlides} class="content-page bleed no-pad"  style="--grad-color: 45, 100%, 50%; --element-bg: linear-gradient(hsla(var(--grad-color), .6), hsla(60, 51%, 50%, .8)), url({base}/assets/earth/earth_10.jpg) 0% 50%/180% auto no-repeat fixed; --element-mob-bg: linear-gradient(hsla(var(--grad-color), .6), hsla(60, 51%, 50%, .8)), url({base}/assets/earth/earth_10.jpg) 0 0/auto 100vh repeat scroll; --element-color: 211, 85%, 26%; background-blend-mode: hard-light, normal;">
  <Slides {...slideData}/>
  <Gallery {...slideData} />
</main>