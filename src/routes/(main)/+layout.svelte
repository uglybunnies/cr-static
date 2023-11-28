
<script>
  import { base } from '$app/paths';
  import { browser } from '$app/environment';
  import NavBar from '$lib/components/NavBar.svelte';
  import { onMount } from 'svelte';
  let openMenu;
  let year;
  let activeTab;
  let viewport;


  function bodyClick(event) {
    let target = event.target;
    let isNav = target.classList.contains('nav-link');
    let onMenu = target.closest('.menu-panel');
    let topMenu = document.querySelector('#topMenu.show');
    let activeCtl = document.querySelector('.menu-toggle.active');
    openMenu=document.querySelector('.menu-panel.show');
    activeTab=document.querySelector('.main-nav a.active');
    if (openMenu && onMenu == null && !isNav) {
      openMenu.classList.remove('show');
      activeTab?.classList.remove('active');
      if (topMenu) {
        topMenu.classList.remove('show');
        activeCtl?.classList.remove('active');
      }
    }
    if (target.classList.contains('menuClose')) {
      openMenu?.classList.remove('show');
      activeTab?.classList.remove('active');
      if (topMenu) {
        topMenu.classList.remove('show');
        activeCtl?.classList.remove('active');
      }
    }
  }
  function setMainNavCtl() {
    const topNav = document.getElementById('topNav');
    let hamburger = document.createElement('a');
    let line = document.createElement('span');
    hamburger.href='#topMenu';
    hamburger.className ='menu-toggle';
    hamburger.setAttribute('hidden', '');
    for (let i = 0; i < 4; i++) {
      let newline = line.cloneNode();
      hamburger.appendChild(newline);
    }
    hamburger.addEventListener('click', e => {
      e.preventDefault();
      let target = e.target;
      let open = document.querySelector('.category .show');
      let menu = document.getElementById('topMenu');
      target.classList.toggle('active');
      menu?.classList.toggle('show');
      open?.classList.remove('show');
    });
    topNav?.appendChild(hamburger);
  }
  function setMenuHeaders() {
    const headers = document.querySelectorAll('.menu-header');
    let anchor = document.createElement('a');
    headers.forEach(el => {
      let link = anchor.cloneNode();
      let parent = el.parentNode;
      link.href = `#${el.dataset.menu}`;
      link.addEventListener('click', e => {
        e.preventDefault();
        let menu = document.getElementById(`${el.dataset.menu}`);
        menu.classList.add('show');
      });
      parent?.insertBefore(link, el);
      link.appendChild(el);
    });
  }
  function setCloseSub() {
    const categories = document.querySelectorAll('.category > div[id]');
    let anchor = document.createElement('a');
    anchor.textContent = "Go back";
    anchor.href = '#';
    anchor.className = 'closeSub';
    categories.forEach(el => {
      let link = anchor.cloneNode(true);
      link.addEventListener('click', e => {
        e.preventDefault();
        el.classList.remove('show');
      });
      el.insertBefore(link, el.firstChild);
    });
  }
  onMount(() => {
    year = new Date().getFullYear();  
    if (browser) {
      viewport = window.visualViewport.width < 960;
    };
    if (viewport) {
      setMainNavCtl();
      setMenuHeaders();
      setCloseSub();
    }
    
  });
</script>
<svelte:body on:click={bodyClick} />
<!-- header markup here-->
<!-- nav markup here -->
<header class="masthead">
  <div class="site-name"><p><a href="{base}/home">Home</a></p></div>
  <NavBar />
</header>
  <slot></slot>
<!-- footer markup here -->

<footer class="site-footer">
  <section class="group">

    <div class="item category">
      <h3 class="subtitle">About Creative Resilience</h3>
      <ul>
        <li><a href="#">Learn more about this project</a></li>
        <li><a href="#">The team</a></li>
        <li><a href="">About the Artists</a></li>
        <li><a href="">Thank you's</a></li>
      </ul>

    </div>
    <div class="item category">
      <h3 class="subtitle">
        Help
      </h3>
  <ul>
    <li><a href="">How to Use the Site</a></li>
    <li><a href="">FAQs</a></li>
  </ul>

    </div>
    <div class="item category">
      <h3 class="subtitle">The Elements</h3>
      <ul>
        <li><a class="menuClose" href="{base}/space">Space</a></li>
        <li><a class="menuClose" href="{base}/wind">Wind</a></li>
        <li><a class="menuClose" href="{base}/water">Water</a></li>
        <li><a class="menuClose" href="{base}/earth">Earth</a></li>
        <li><a class="menuClose" href="{base}/fire">Fire</a></li>
      </ul>
    </div>
    <div class="item category">
      <h3 class="subtitle">Connections</h3>
      <p><a href="">Contact Us</a></p>
      <ul class="social-media">
        <li><a href="" class="social"><span class="icon"><img src="{base}/assets/icons/instagram.svg" alt="Follow on Instagram"></span>Instagram</a></li>
        <!-- <li><a href="" class="social"><span class="icon"></span></a></li>
        <li><a href="" class="social"><span class="icon"></span></a></li>
        <li><a href="" class="social"><span class="icon"></span></a></li> -->
      </ul>

    </div>
  </section>
  <p class="copyright">
    &copy; {year} Khyentse Foundaton
  </p>
</footer>
<section id="water-menu" class="menu-panel">
  <div class="menus">
    <a href="#" class="menuClose closeCta" hidden tabindex="-1"><span>Close Menu</span></a>
    
    <div class="category">
      <p class="menu-header" data-menu="waterPsych">Psychological Exercises</p>
      <div id="waterPsych">
        <ul>
          <li><a class="menuClose" href="{base}/water/art-of-listening">Art of Listening</a></li>
          <li><a class="menuClose" href="{base}/water/finding-flexibility">Finding Flexibility</a></li>
        </ul>
      </div>
    </div>
    <div class="category">
      <p class="menu-header" data-menu="waterMed">Meditations</p>
      <div id="waterMed">
        <ul>
          <li><a class="menuClose" href="{base}/water/water-meditation">Water Meditation</a></li>
        </ul>
      </div>
    </div>
    <div class="category">
      <p class="menu-header" data-menu="waterPod">Podcasts</p>
      <div id="waterPod">
        <ul>
          <li><a class="menuClose" href="{base}/water/podcast-resilience">Reslience Podcast</a></li>
          <li><a class="menuClose" href="{base}/water/podcast-flow">Flow Podcast</a></li>
        </ul>
      </div>
    </div>
    <div class="category">
      <p class="menu-header" data-menu="waterShare">Sharing</p>
      <div id="waterShare">
        <ul>
          <li><a class="menuClose" href="{base}/water/sharing-water">Sharing Visions of Water</a></li>
        </ul>
      </div>
    </div>
    <div class="category center">
      <ul>
        <li><a class="menuClose" href="{base}/water/voice-of-water">Voice of Water</a></li>
        <li><a href="{base}/water" class="circle"><img class="menuClose" src="{base}/assets/water-mandala.webp" alt=""></a></li>
        <li><a class="menuClose" href="{base}/water">Go to Water</a></li>
      </ul>
    </div>
  </div>
</section>
<section id="earth-menu" class="menu-panel">
  <div class="menus">
    <a href="#" class="menuClose closeCta"><span>Close Menu</span></a>
    <div class="category">
      <p class="menu-header" data-menu="earthPsych">Psychological Exercises</p>
      <div id="earthPsych">
        <ul>
          <li><a class="menuClose" href="{base}/earth/kindness-to-self">Kindness to Self</a></li>
          <li><a class="menuClose" href="{base}/earth/path-to-the-heart">Path to the Heart</a></li>
          <li><a class="menuClose" href="{base}/earth/quieting-inner-critic">Quieting Inner Critics</a></li>
          <li><a class="menuClose" href="{base}/earth/the-inner-critic">The Inner Critic</a></li>
          <li><a class="menuClose" href="{base}/earth/self-hypnosis">Self Hypnosis</a></li>
        </ul>
      </div>
    </div>
    <div class="category">
      <p class="menu-header" data-menu="earthMed">Meditations</p>
      <div id="earthMed">
        <ul>
          <li><a class="menuClose" href="{base}/earth/grounding-meditation">Grounding Meditation</a></li>
        </ul>
      </div>
    </div>
    <div class="category">
      <p class="menu-header" data-menu="earthClasses">Classes</p>
      <div id="earthClasses">
        <ul>
          <li><a class="menuClose" href="{base}/earth/fresh-mind-cooking">Fresh Mind Cooking</a></li>
          <li><a class="menuClose" href="{base}/earth/art-workshop">Art Workshop</a></li>
        </ul>
      </div>
    </div>
    <div class="category">
      <p class="menu-header" data-menu="earthShare">Sharing</p>
      <div id="earthShare">
        <ul>
          <li><a class="menuClose" href="{base}/earth/sharing-earth">Sharing the Beauty of Earth</a></li>
        </ul>
      </div>
    </div>
    <div class="category center">
      <ul>
        <li><a class="menuClose" href="{base}/earth/voice-of-earth">Voice of Earth</a></li>
        <li>
          <a href="{base}/earth" class="circle">
            <img class="menuClose" src="{base}/assets/earth-mandala.webp" alt="">
          </a>
        </li>
        <li><a class="menuClose" href="{base}/earth">Go to Earth</a></li>
      </ul>
    </div>
  </div>
</section>
<section id="wind-menu" class="menu-panel">
  <div class="menus">
    <a href="#" class="menuClose closeCta"><span>Close Menu</span></a>
    <div class="category">
      <p class="menu-header" data-menu="windPsych">Psychological Exercises</p>
      <div id="windPsych">
        <ul>
          <li><a class="menuClose" href="{base}/wind/inaction-to-action">Inaction to Action</a></li>
          <li><a class="menuClose" href="{base}/wind/creating-new-pathways">Creating New Pathways</a></li>
          <li><a class="menuClose" href="{base}/wind/changing-your-mood">Changing Your Mood</a></li>
          <li><a class="menuClose" href="{base}/wind/generosity-and-the-brain">Generosity and the Brain</a></li>
        </ul>
      </div>
    </div>
    <div class="category">
      <p class="menu-header" data-menu="windClasses">Classes</p>
      <div id="windClasses">
        <ul>
          <li><a class="menuClose" href="{base}/wind/poetry-workshop">Poetry Workshop</a></li>
        </ul>
      </div>
    </div>
    <div class="category">
      <p class="menu-header" data-menu="windPod">Podcasts</p>
      <div id="windPod">
        <ul>
          <li><a class="menuClose" href="{base}/wind/podcast-freedom">Freedom Podcast</a></li>
        </ul>
      </div>
    </div>
    <div class="category">
      <p class="menu-header" data-menu="windShare">Sharing</p>
      <div id="windShare">
        <ul>
          <li><a class="menuClose" href="{base}/wind/sharing-wind">Sharing the Freedom of Wind</a></li>
          <li><a class="menuClose" href="{base}/wind/music-chamber">Music Chamber</a></li>
        </ul>
      </div>
    </div>
    <div class="category center">
      <ul>
        <li><a class="menuClose" href="{base}/wind/voice-of-wind">Voice of Wind</a></li>
        <li><a href="{base}/wind" class="circle"><img class="menuClose" src="{base}/assets/wind-mandala.webp" alt=""></a></li>
        <li><a class="menuClose" href="{base}/wind">Go to Wind</a></li>
      </ul>
    </div>
  </div>
</section>
<section id="fire-menu" class="menu-panel">
  <div class="menus">
    <a href="#" class="menuClose closeCta"><span>Close Menu</span></a>
    <div class="category">
      <p class="menu-header" data-menu="firePsych">Psychological Exercises</p>
      <div id="firePsych">
        <ul>
          <li><a class="menuClose" href="{base}/fire/dissolving-anger">Dissolving Anger</a></li>
          <li><a class="menuClose" href="{base}/fire/stop-obsessive-thinking">Stop Obsessive Thinking</a></li>
        </ul>
      </div>
    </div>
    <div class="category">
      <p class="menu-header" data-menu="fireMed">Meditations</p>
      <div id="fireMed">
        <ul>
          <li><a class="menuClose" href="{base}/fire/fire-meditation">Fire Meditation</a></li>
        </ul>
      </div>
    </div>
    <div class="category">
      <p class="menu-header" data-menu="firePod">Podcasts</p>
      <div id="firePod">
        <ul>
          <li><a class="menuClose" href="{base}/fire/podcast-creativity">Creativity Podcast</a></li>
        </ul>
      </div>
    </div>
    <div class="category">
      <p class="menu-header" data-menu="fireShare">Sharing</p>
      <div id="fireShare">
        <ul>
          <li><a class="menuClose" href="{base}/fire/sharing-fire">Sharing the Passion of Fire</a></li>
        </ul>
      </div>
    </div>
    <div class="category center">
      <ul>
        <li><a class="menuClose" href="{base}/fire/voice-of-fire">Voice of Fire</a></li>
        <li><a href="{base}/fire" class="circle"><img class="menuClose" src="{base}/assets/fire-mandala.webp" alt=""></a></li>
        <li><a class="menuClose" href="{base}/fire">Go to Fire</a></li>
      </ul>
    </div>
  </div>
</section>

<section id="space-menu" class="menu-panel">
  <div class="menus">
    <a href="#" class="menuClose closeCta"><span>Close Menu</span></a>
    <div class="category">
      <p class="menu-header" data-menu="spacePsych">Psychological Exercises</p>
      <div id="spacePsych">
        <ul>
          <li><a class="menuClose" href="{base}/space/making-more-mental-space">Making More Mental Space</a></li>
          <li><a class="menuClose" href="{base}/space/sky-eating">Sky Eating</a></li>
        </ul>
      </div>
    </div>
    <div class="category">
      <p class="menu-header" data-menu="spaceMed">Meditations</p>
      <div id="spaceMed">
        <ul>
          <li><a class="menuClose" href="{base}/space/space-meditation">Space Meditation</a></li>
          <li><a class="menuClose" href="{base}/space/letting-go">Letting Go</a></li>
          <li><a class="menuClose" href="{base}/space/present-moment-meditation">Present Moment Meditation</a></li>
        </ul>
      </div>
    </div>
    <div class="category">
      <p class="menu-header" data-menu="spaceClasses">Classes</p>
      <div id="spaceClasses">
        <ul>
          <li><a class="menuClose" href="{base}/space/dance-workshop">Dance Workshop</a></li>
        </ul>
      </div>
    </div>
    <div class="category">
      <p class="menu-header" data-menu="spaceShare">Sharing</p>
      <div id="spaceShare">
        <ul>
          <li><a class="menuClose" href="{base}/space/sharing-space">Sharing the Beauty of Space</a></li>
        </ul>
      </div>
    </div>
    <div class="category center">
      <ul>
        <li><a class="menuClose" href="{base}/space/voice-of-space">Voice of Space</a></li>
        <li><a href="{base}/space" class="circle"><img class="menuClose" src="{base}/assets/space-mandala.webp" alt=""></a></li>
        <li><a class="menuClose" href="{base}/space">Go to Space</a></li>
      </ul>
    </div>
  </div>
</section>
<section id="all-menu" class="menu-panel">
  <div class="menus">
    <a href="" class="menuClose closeCta"><span>Close Menu</span></a>
    <div class="category">
      <p class="menu-header" data-menu="allPsych">Psychological Exercises</p>
      <div id="allPsych">
        <ul>
          <li><a class="menuClose" href="{base}/space/making-more-mental-space">Making More Mental Space</a></li>
          <li><a class="menuClose" href="{base}/space/sky-eating">Sky Eating</a></li>
          <li><a class="menuClose" href="{base}/water/art-of-listening">Art of Listening</a></li>
          <li><a class="menuClose" href="{base}/water/finding-flexibility">Finding Flexibility</a></li>
          <li><a class="menuClose" href="{base}/earth/kindness-to-self">Kindness to Self</a></li>
          <li><a class="menuClose" href="{base}/earth/path-to-the-heart">Path to the Heart</a></li>
          <li><a class="menuClose" href="{base}/earth/quieting-inner-critic">Quieting Inner Critics</a></li>
          <li><a class="menuClose" href="{base}/earth/the-inner-critic">The Inner Critic</a></li>
          <li><a class="menuClose" href="{base}/earth/self-hypnosis">Self Hypnosis</a></li>
          <li><a class="menuClose" href="{base}/fire/dissolving-anger">Dissolving Anger</a></li>
          <li><a class="menuClose" href="{base}/fire/stop-obsessive-thinking">Stop Obsessive Thinking</a></li>
          <li><a class="menuClose" href="{base}/wind/inaction-to-action">Inaction to Action</a></li>
          <li><a class="menuClose" href="{base}/wind/creating-new-pathways">Creating New Pathways</a></li>
          <li><a class="menuClose" href="{base}/wind/changing-your-mood">Changing Your Mood</a></li>
          <li><a class="menuClose" href="{base}/wind/generosity-and-the-brain">Generosity and the Brain</a></li>
        </ul>
      </div>
    </div>
    <div class="category">
      <p class="menu-header" data-menu="allMed">Meditations</p>
      <div id="allMed">
        <ul>
          <li><a class="menuClose" href="{base}/space/space-meditation">Space Meditation</a></li>
          <li><a class="menuClose" href="{base}/space/letting-go">Letting Go</a></li>
          <li><a class="menuClose" href="{base}/space/present-moment-meditation">Present Moment Meditation</a></li>
          <li><a class="menuClose" href="{base}/water/water-meditation">Water Meditation</a></li>
          <li><a class="menuClose" href="{base}/earth/grounding-meditation">Grounding Meditation</a></li>
          <li><a class="menuClose" href="{base}/fire/fire-meditation">Fire Meditation</a></li>
        </ul>
      </div>
    </div>
    <div class="category">
      <p class="menu-header" data-menu="allClasses">Classes</p>
      <div id="allClasses">
        <ul>
          <li><a class="menuClose" href="{base}/space/dance-workshop">Dance Workshop</a></li>
          <li><a class="menuClose" href="{base}/earth/fresh-mind-cooking">Fresh Mind Cooking</a></li>
          <li><a class="menuClose" href="{base}/earth/art-workshop">Art Workshop</a></li>
          <li><a class="menuClose" href="{base}/wind/poetry-workshop">Poetry Workshop</a></li>
        </ul>
      </div>
      <p class="menu-header" data-menu="allJournals">Journals</p>
      <div id="allJournals">
        <ul>
          <li><a href="{base}/journals" class="menuClose">Explore Your Experience</a></li>
        </ul>
      </div>
    </div>
    <div class="category">
      <p class="menu-header" data-menu="allPod">Podcasts</p>
      <div id="allPod">
        <ul>
          <li><a class="menuClose" href="{base}/water/podcast-resilience">Reslience Podcast</a></li>
          <li><a class="menuClose" href="{base}/water/podcast-flow">Flow Podcast</a></li>
          <li><a class="menuClose" href="{base}/fire/podcast-creativity">Creativity Podcast</a></li>
          <li><a class="menuClose" href="{base}/wind/podcast-freedom">Freedom Podcast</a></li>
        </ul>
      </div>
    </div>
    <div class="category">
      <p class="menu-header" data-menu="allShare">Sharing</p>
      <div id="allShare">
        <ul>
          <li><a class="menuClose" href="{base}/space/sharing-space">Sharing the Beauty of Space</a></li>
          <li><a class="menuClose" href="{base}/water/sharing-water">Sharing Visions of Water</a></li>
          <li><a class="menuClose" href="{base}/earth/sharing-earth">Sharing the Beauty of Earth</a></li>
          <li><a class="menuClose" href="{base}/fire/sharing-fire">Sharing the Passion of Fire</a></li>
          <li><a class="menuClose" href="{base}/wind/sharing-wind">Sharing the Freedom of Wind</a></li>
          <li><a class="menuClose" href="{base}/wind/music-chamber">Music Chamber</a></li>
        </ul>
      </div>
    </div>
  </div>
</section>