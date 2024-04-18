<script>
  import { base } from '$app/paths';
  const journalSections = [
    {
      questions: [
        'Where does your inner space meet outer space?',
        'Right now, if you imagine seeing the problem you are facing floating in the middle of vast space, how does this distance bring a fresh perspective?',
        'Master photographers value the presence of objects and the space around them equally when creating their art. What happens if you begin to notice the space around objects as well as the objects in your field of vision?'
      ],
      title: 'The Voice of Space',
      url: 'space/voice-of-space'
    },
    {
      questions: [
        'What does mental space mean to you?',
        'When you clean and order your house, how does that affect your inner space?',
        'When you complete this exercise and your concerns are addressed, what is left?'
      ],
      title: 'Making More Mental Space',
      url: 'space/making-more-mental-space'
    },
    {
      questions: [
        'How has your sense of solidity changed from doing the practice, if at all?',
        'What makes you feel heavy and solid and what makes you feel light and open?',
        'What does the sky give to you?'
      ],
      title: 'Sky Eating',
      url: 'space/sky-eating'
    },
    {
      questions: [
        'How far can you let your sense of inner space expand and what happens when you do that?',
        'How many stars are in the sky? How many thoughts in your mind? Try setting a timer for one minute and count your thoughts, what is your count?',
        'This simple Zen meditation technique is said to offer surprising results. To explore, do as follows: Contract yourself into the tiniest particle imaginable and stay there some moments. Now what do you find?'
      ],
      title: 'Space Meditation',
      url: 'space/space-meditation'
    },
    {
      questions: [
      'What were some worries in your past that have disappeared? What are some worries you have now that will most likely disappear in your future?',
      'When you take a bird\'s eye view of your self and the many things you hold onto, which one might you easily let go of and simply drop?',
      'If you open your palms to the sky and imagine releasing all your burdens into space, how does that affect you?'
    ],
    title: 'Letting Go',
    url: 'space/letting-go'
    },
    {
      questions: [
        'When you escape mentally from the challenges of the present moment where does your mind take you?',
        'When you are with others do they notice if your mind is somewhere else?',
        'What is it like for you to “Be here now” and be truly present?'
      ],
      title: 'Present Moment Meditation',
      url: 'space/present-moment-meditation'
    },
    {
      questions: [
        'If you would like to calm your emotional state by using your breath, try the following ancient yoga technique taught by the Buddha in the sutra, Anapanasmriti. Simply focus on the air going in and out of your nostrils. After some time, note how you feel.',
        'If you would like to experiment with your inner winds, try this Tibetan healing meditation: Imagine a loved one who is sad up in the space in front of you. Then breathe in their sadness and breathe out healing love. Continue until the sorrow is transformed to love in you both.',
        'Think of times when you have felt free like the wind. What can you do to create more freedom in your life now?'
      ],
      title: 'The Voice of Wind',
      url: 'wind/voice-of-wind'
    },
    {
      questions: [
        'Have you ever found chaos to be a fertile ground for establishing a new way forward?',
        'What unmet personal needs of your own might chaos be covering up?',
        'How does order help you do your best--or does it?'    ],
      title: 'Changing Inaction to Action',
      url: 'wind/inaction-to-action'
    },
    {

      questions: [
        'Consider what actions bring you the most joy throughout your day and write them down to remember?',
        'When was a time you decided to make major changes that enhanced your life greatly?',
        'If you were to design a new path going forward for yourself, what would it look like? If you have time, draw it or write about it.'
      ],
      title: 'Creating New Pathways',
      url: 'wind/creating-new-pathways'
    },
    {
      questions: [
        'What instantly puts you in a good mood?',
        'What are your worst moods?',
        'What concrete steps can you take to change an unwanted mood?'
      ],
      title: 'Changing Your Mood',
      url: 'wind/changing-your-mood'
    },
    {
      questions: [
        'Try committing some random acts of kindness such as: pay for someone else\'s coffee in line at Starbuck learn the names of the people you see every day (your door man, your fellow dog walkers, your waitress) and speak to them by name. clean up someone else\'s mess without shaming them. hide dollar bills in the supermarket shelves. After a day of these random acts, how do you feel?',
        'As a child, what did your family experience teach you about giving?',
        'How can you be more giving to those close to you?'
      ],
      title: 'Generosity and the Brain',
      url: 'wind/generosity-and-the-brain'
    },
    {
      questions: [
        'How do you find freedom in the midst of your day-to-day responsibilities?',      'In relationships when you allow others to be who they are, without judging them, what happens?',
        'When you\'re feeling trapped what part of you is still free?'
      ],
      title: 'Freedom Podcast',
      url: 'wind/podcast-freedom'
    },
    {
      questions: [
        'If you sing along with one of these sing-along songs, how do you feel?',
        'What music uplifts your spirits?',
        'What songs from your past spark pleasant memories? If you sing or listen to one of your favorites, what memories come to mind?'
      ],
      title: 'Music Chamber',
      url: 'wind/music-chamber'
    },
    {
      questions: [
        'What are the various roles you effortlessly flow between each day such as father, mother, teacher, or artist? Which one is your favorite?',
        'What flood-like emotions can cause a disaster for you and how do you prevent yourself from being completely swept away?',
        'What rocks and boulders are in your life right now and how can you flow around them with more ease?'
      ],
      title: 'Voice of Water',
      url: 'water/voice-of-water'
    },
    {
      questions: [
        'Who in your life really listens to you and how does it make you feel?',
        'When you listen to yourself with an open mind, what do you learn?',
        'How could you create more time for listening to your loved ones?'
      ],
      title: 'The Art of Listening',
      url: 'water/art-of-listening'
    },
    {
      questions: [
        'If you were more flexible in your life, what would you do differently?',
        'What happens in relationships when you are too flexible and have no boundaries, much like when a river overflows its banks?',
        'What can you change in your life experience and what can you not change? To be very clear, try making two separate lists, in order to clarify these personal points.'
      ],
      title: 'Finding Flexibility',
      url: 'water/finding-flexibility'
    },
    {
      questions: [
        'How can you use water to soothe and heal yourself?',
        'When you are feeling the rise and fall of emotions like waves on the ocean, what then is that ocean that they fall back into?',
        'What unique part of you would you like to ripple out into the world a bit more?'
      ],
      title: 'Water Meditation',
      url: 'water/water-meditation'
    },
    {
      questions: [
        'How do you bounce back from rejection?',
        'What are the different aspects of your resilience and how do they help you? Write them on a quick list.',
        'Be daring! Be resilient! Dance as if no one is watching -- even if they are.Then write down your experience.'
      ],
      title: 'Resilience Podcast',
      url: 'water/podcast-resilience'
    },
    {
      questions: [
        'When you get stuck, what helps you find your flow?',
        'When have you experienced the greatest flow in your life?',
        'When feeling ‘“in flow”, stop and ask yourself, “What feels different about this state?” Then note it down and reflect on it now and then.'
      ],
      title: 'Flow Podcast',
      url: 'water/podcast-flow'
    },
    {

    questions: [
        'If you were teaching a first grade class what would you teach the children about the earth?',
        'When did you first think about the need to care for mother earth and what were your own ideas?',
        'What jewels are hidden within your secret depths?'
      ],
      title: 'The Voice of Earth',
      url: 'earth/voice-of-earth'
    },
    {
      questions: [
        'What can you do to be more kind to yourself this moment?',
        'How does kindness towards others help you?',
        'How can you act compassionately towards others, while at the same time taking proper care of yourself?'
      ],
      title: 'Kindness to Self',
      url: 'earth/kindness-to-self'
    },
    {
      questions: [
        'Try writing a comforting letter from your heart to yourself. How does it make you feel when you read it aloud?',
        'If you were your own therapist and you were also the client, what issues would you be discussing this week?',
        'How do you navigate when you have conflicts between your head and your heart? What experience do you recall when you had this dilemma?'
      ],
      title: 'Path to the Heart',
      url: 'earth/path-to-the-heart'
    },
    {
      questions: [
        'When you hear criticism from others, how does it influence you?',
        'When you create an inner voice that is supportive, how does that influence you?',
        'How can you encourage your sense of self-confidence today?'
      ],
      title: 'Quieting the Inner Critic',
      url: 'earth/quieting-inner-critic'
    },
    {
      questions: [
        'Who\'s your boss, you or your inner critic?',
        'What makes you miserable?',
        'What\'s your favorite way to put yourself down?'
      ],
      title: 'The Inner Critic',
      url: 'earth/the-inner-critic'
    },
    {
      questions: [
        'After having used self-hypnosis with one goal in mind for 7 consecutive days, what results do you find?',
        'What makes you feel safe?',
        'When you imagine in detail one of your goals being fully accomplished, how do you feel?'
      ],
      title: 'Self Hypnosis',
      url: 'earth/self-hypnosis'
    },
    {
      questions: [
        'What does being grounded mean to you?',
        'What hidden emotions came to light and dissipated as you did this healing meditation?',
        'If, in the midst of a busy and stressful day, if you pause for a moment, relax your body and breathe deeply, how does that affect your immediate experience?'
      ],
      title: 'Grounding Meditation',
      url: 'earth/grounding-meditation'
    },
    {
      questions: [
        'How does the way you feel as you cook affect the food you\'re cooking?',
        'When you finish cooking and serve your food to loved ones, how do you feel?',
        'What foods are uplifting for you to eat?'
      ],
      title: 'Fresh Mind Cooking',
      url: 'earth/fresh-mind-cooking'
    },
    {
      questions: [
        'What 3 things are you most passionate about and why?',
        'What 3 things are you most passionate about never doing again and why?',
        'Try to live in the warmth of your heart for one full day. Then, at night note down your experience.'
      ],
      title: 'The Voice of Fire',
      url: 'fire/voice-of-fire'
    },
    {
      questions: [
        'Does someone or something in your life make you annoyed or angry? If so, as you follow this exercise, what happens when you take your focus off that person or situation and instead, focus on the anger you are experiencing?',
        'If you allow the embers of ancient anger to rise and come into your awareness, how does this exercise help to clear the anger from the past?',
        'Often a clarity can be experienced riding with the power and thrust of anger. What experience have you had where anger brought a vivid clarity to your situation?'
      ],
      title: 'Dissolving Anger',
      url: 'fire/dissolving-anger'
    },
    {
      questions: [
        'What do you enjoy obsessing about? video games, politics, diets, neighbors?',
        'List 5 things you worry about and note whether any of them are no longer relevant and merely lingering from the past?',
        'What worries or obsessions are getting in the way of your productivity?'
      ],
      title: 'Stop Obsessive Thinking',
      url: 'fire/stop-obsessive-thinking'
    },
    {
      questions: [
        'When you gaze into the fire, what does it evoke in you?',
        'When you are fearless, how does that serve you?',
        'What makes you feel alive and abundant with life energy?'
      ],
      title: 'Fire Meditation',
      url: 'fire/fire-meditation'
    },
    {
      questions: [
        'How can you bring creativity into the mundane aspects of your daily life (e.g, dancing while workng the kitchen, dressing up beautifully on a Saturday for no reason, arranging snacks for your children in a playful design on the plate).',
        'What aspects of nature\'s creativity do you find wondrous?',
        'If you could break through your trepidation and give yourself freedom to express your genuine self creatively, how would that look?'
      ],
      title: 'Creativity Podcast',
      url: 'fire/podcast-creativity'
    }
  ];
</script>
<svelte:head>
<title>Creative Resilience: Explore Your Experience</title>
</svelte:head>
<main class="content-page center journals" style="--element-bg: hsl(var(--dark-color)); --element-mob-bg: hsl(var(--dark-color)); --copy-color: var(--light-color); --element-color: var(--copy-color);">
  <section class="introduction">
    <h2 style="--h2-font-size: var(--h4-font-size);">Explore Your Experience</h2>
    <p>Our team created an open model of journaling to deepen the experience  of the exercises and also create new connections to the inner and outer 5 elements. Each exercise has three journal questions to help discover unique potentials within and retrieve aspects of ourselves we may have neglected or simply forgotten along the way. This gathering of self awareness rekindles life energy and leads us along the road towards mastering our own mind and emotions.</p> 

    <p>There are no rules for how to use these questions.You may want to try quick jots, engage in thorough journaling or dare to create memes or hashtags on social media. Many have found it fun to exchange answers with a friend, partner or their children. However you play here, be free, spontaneous and enjoy.</p>
    
  </section>
  <section class="all-journal-questions">
    {#each journalSections as section}
      <p><a href="{base}/{section.url}">{section.title}</a></p>
      <!-- <ul class="journal-questions" style="--journal-bullets: var(--link-color);">
      {#each  section.questions as question}
        <li>{question}</li>
      {/each}
      </ul> -->
  {/each}
</section>
<br><br>
</main>