<script>
  export let right;
  export let top;
  export let glow;
  export let posType;
  export let alpha;
  export let mobTop;
  let journal;

  function launchJournal(event) {
    event.preventDefault();
    journal = document.getElementById(event.target.hash.substring(1));
    journal.classList.add('show');
  }
</script>
<p class="journal-prompt" style="--top: {top}; --right: {right}; --mobTop: {mobTop}; --glow: {glow}; --posType: {posType}; --jpAlpha: {alpha};"><a href="#journal" class="journal-cta" on:click={launchJournal}>Explore Your Experience</p>
