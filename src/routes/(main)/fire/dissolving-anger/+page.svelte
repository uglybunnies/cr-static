<script>
    import { base } from '$app/paths';
  import Journal from '$lib/components/Journal.svelte';
  import JournalButton from '$lib/components/JournalButton.svelte';
  export let journalData = {
    questions: [
      'Does someone or something in your life make you annoyed or angry? If so, as you follow this exercise, what happens when you take your focus off that person or situation and instead, focus on the anger you are experiencing?',
      'If you allow the embers of ancient anger to rise and come into your awareness, how does this exercise help to clear the anger from the past?',
      'Often a clarity can be experienced riding with the power and thrust of anger. What experience have you had where anger brought a vivid clarity to your situation?'
    ],
    title: 'Dissolving Anger',
    bgColor: 'hsl(70, 100%, 0%)',
    bgImg: `${base}/assets/fire/journal-dissolving-anger.webp`,
    bgPosition: '0 30%',
    bgSize: 'cover',
    bullets: '15, 100%, 60%'
  };
  export let jourButtonPos = {
    right: '14%',
    top: '15%',
    posType: 'fixed',
    alpha: '.25',
    glow: '60,100%,60%',
    mobTop: '7%'
  };
</script>
<svelte:head>
  <title>Fire: Dissolving Anger</title>
</svelte:head>
<main class="content-page center"  style="--grad-color: 25, 100%, 90%; --element-bg: linear-gradient(90deg, hsla(var(--grad-color),0),hsla(var(--grad-color),0.2) 10%, hsla(var(--grad-color),0.6) 20%,hsla(var(--grad-color),0.8) 50%, hsla(var(--grad-color),0.6) 90%, hsla(var(--grad-color),0) 100%) 0 /100% auto no-repeat, url({base}/assets/fire/dissolving-anger-bg.webp) 0 35%/100% auto fixed repeat; --element-mob-bg: linear-gradient(hsla(var(--grad-color), .6), hsla(var(--grad-color), .6)), url({base}/assets/fire/dissolving-anger-bg.webp) 50% 0/auto 100vh scroll repeat; --desc-bg-color: hsla(45, 50%, 75%, .9);--desc-copy-color: var(--light-color); --element-color: 25, 100%, 45%; --subtitle-color: 25, 100%, 50%; --cs1: 218, 45%, 33%; --cs2: 218, 45%, 75%">
  <section class="banner">
    <h2>Dissolving Anger <small>1:00</small></h2>
    <p class="subtitle shiftgrad">
      <span>How To Deal With Anger—A True Story</span>
    </p>
    <JournalButton {...jourButtonPos} />
  </section>
  <section class="exercise">
    <p>Here Is A Method Of Dealing With Anger Given To A 9 Year Old Boy By A Renowned Buddhist Master, Thinley Norbu Rinpoche.</p>
    <p>This young boy was living in Kathmandu with his family. When he would come home from school, he would try to open the entry gate again and again and it would not open. Everyday he would face the same problem. He would become angry and kick at the gate repeatedly. One day, Rinpoche was coming to visit the boy’s parents and saw the boy struggling. He helped him open the gate and gave the following advice, “Just take your mind off the problem (that gate) and watch your own anger, then you will feel better. This will help you with your anger.”</p>

    <p>After entering the house, Rinpoche continued speaking with the adults on this subject and said that the true nature of anger is clear-light wisdom. He also said that anger is contrived and conceals its uncontrived true essence, which is profound clarity. He further explained that as the anger dissipates and fades, then this clarity will prevail.</p>

    <p>The boy followed the advice and came in later that week after school and told his mother, “Mom, this really works. I am not angry anymore and I can open the gate by myself!”</p><br>
    <h3>
      Three Steps to Dissolve Anger as Taught by Thinley Norbu Rinpoche
    </h3>
<ol>
  <li>Take your mind off the object of your anger, whoever or whatever it may be.</li>
  <li>Turn your awareness inward as you take your attention off the object of your anger</li> 
  <li>Watch on your anger. Let it rise. If you wish, you can imagine your anger like red smoke, moving upward and dissolving. Though it is invisible, there is a strong sense of this energy. Watch that.</li>
  <li>Whoever or whatever you are angry with is like a magnet. It will pull you back again and again. Resist this as much as possible. Come back to watching, again and again. As you do this practice you will begin to feel emotionally and mentally lighter and lighter.</li>
</ol>
<p>You can use this meditation technique with any passion, such as sorrow, irritation, fear, jealousy and so on.</p>

<hr>
<p class="continue-links light">
  Try the <a href="{base}/fire/fire-meditation">Fire Meditation</a>, meet to the <a href="{base}/fire/voice-of-fire">Voice of Fire</a>, try to <a href="{base}/fire/stop-obsessive-thinking">Stop  Obsessive Thinking</a>
or explore more of the <a href="{base}/fire">Fire Element</a>.
</p>
  </section>
</main>
<Journal {...journalData} />