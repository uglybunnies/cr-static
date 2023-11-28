<script>
  import { base } from '$app/paths';
  import { page } from '$app/stores';
  const navItems = [
    {
      target: '#space-menu',
      path: 'space',
      name: 'Space'
    },
    {
      target: '#wind-menu',
      path: 'wind',
      name: 'Wind'
    },
    {
      target: '#water-menu',
      path: 'water',
      name: 'Water'
    },
    {
      target: '#earth-menu',
      path: 'earth',
      name: 'Earth'
    },
    {
      target: '#fire-menu',
      path: 'fire',
      name: 'Fire'
    },
    {
      target: '#all-menu',
      name: 'All Content'
    }
  ];
  let menu;
  let showing;
  let active;
  let location;
  $: location = $page.url.pathname;
  function handleClick(event) {
    event.preventDefault();
    let target = event.target;
    let open = target.classList.contains('active');
    let path = target.dataset.path;
    menu = document.getElementById(event.target.hash.substring(1));
    showing = document.querySelector('.menu-panel.show');
    active = document.querySelector('.main-nav a.active');
    if (!showing) {
      event.target.classList.add('active');
      menu?.classList.add('show');
    }
    else if (open && showing && path) {
      window.location = `${base}/${path}`;
    }
    else {
      active?.classList.remove('active');
      showing?.classList.remove('show');
      menu?.classList.add('show');
      event.target.classList.add('active');
    }
    
  }
</script>
<nav class="main-nav" id="topNav">
  <ul id="topMenu">
    {#each navItems as item}
      <li>
        <a on:click={handleClick} href="{item.target}" data-path="{item.path ? item.path : ''}" class="nav-link {location.includes(item.path) ? 'located' : ''}">{item.name}</a>
      </li>
    {/each}

  </ul>
</nav>