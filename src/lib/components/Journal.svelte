<script>
  export let questions;
  export let bgColor;
  export let bgImg;
  export let bgPosition;
  export let title;
  export let bgSize;
  export let bullets;
  let journal
  function closeJournal(event) {
    event.preventDefault();
    journal = document.getElementById('journal');
    journal?.classList.remove('show');
  }
</script>
<section id="journal" class="journal-questions modal">
  <a href="#" tabindex="-1" hidden class="modalClose" on:click={closeJournal}>Close journal questions</a>
  <div style="--journal-bgColor: {bgColor}; --modalBoxBg: {bgColor} url({bgImg}) {bgPosition}/{bgSize} no-repeat;">
    <a href="#" class="modalClose closeCta" hidden tabindex="-1"  on:click={closeJournal}><span>Close journal questions</span></a>
    <div class="journal-content">
      <div class="wrap">
        <div class="content" style="--journal-bullets: {bullets};">
          <h2>{title}</h2>
          <p class="instr">If any of these questions speak to you… ponder them, write in your journal or share with a friend, as you like.</p>
          <ul class="journal-questions">
            {#each questions as question}
              <li>{question}</li>
            {/each}
          </ul>
        </div>
      </div>
    </div>
  </div>

</section>