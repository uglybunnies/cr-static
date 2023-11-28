<script>
  let active = false;
  function scroll(event, direction) {
    event.preventDefault();
    let vert = (direction === "down") ? window.innerHeight : -window.innerHeight;
    window.scrollBy({left: 0, top: vert, behavior: 'smooth'});
    active = !active;
  }
</script>
{#if !active}
<a href="#" on:click={(e) => {scroll(e, 'down')}} id="scrollDown" class="scroll-ctl"><span>Scroll down</span></a>
{:else}
<a href="#" on:click={(e) => {scroll(e, 'up')}} id="scrollUp" class="scroll-ctl scroll-up"><span>Scroll up</span></a>
{/if}
<style>
  .scroll-ctl {
    position: absolute;
    color: hsl(var(--light-color));
    text-decoration: none;
    text-shadow: .2em -.125em .15em hsl(var(--dark-neutral)), 0 0 .125em hsl(var(--dark-neutral));
    top: 21em;
    right: 3.75em;
  }
  @media screen and (max-width: 1024px) {
    .scroll-ctl {
      right: .5em;
    }
  }
  .scroll-ctl:not(.scroll-up) {
    animation: 1s ease-in-out infinite bounce;
  }
  .scroll-ctl.scroll-up {
    top: initial;
    bottom: 7em;
    text-shadow: -.0625em .0625em .125em hsl(var(--dark-neutral));
  }
  .scroll-ctl::after {
    display: inline-block;
    position: relative;
    content: '\203A';
    font-size: 4em;
    transform: rotate(90deg);
    transform-origin: center;
  }

  .scroll-ctl.scroll-up::after {
    transform: rotate(-90deg);
    right: .15em;
  }
  .scroll-ctl > span {
    display: block;
    position: absolute;
    text-indent: -999em;
  }
  @keyframes bounce {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(.125em);
    }
  }
</style>