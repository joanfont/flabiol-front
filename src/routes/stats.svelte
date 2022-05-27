<script lang='ts'>
  import type { Attempt, Guess, Song } from '$src/types';
  import { currentAttempt, currentSong, pastAttempts, readInstructions, temporaryAttempt } from '$src/store';
  import { onMount } from 'svelte';
  import { daysBetweenDates } from '$lib/util';
  import { goto } from '$app/navigation';

  const resetData = () => {
    currentAttempt.set(<Attempt>{
      attempts: 0,
      guesses: [],
      correct: false,
      date: new Date()
    });
    temporaryAttempt.set(<Attempt>{
      attempts: 0,
      guesses: [],
      correct: false,
      date: new Date()
    });
    readInstructions.set(false);
    currentSong.set(<Song>{});
    pastAttempts.set({ array: [] });
    goto('/');
  };


  let officialAttempts = <Attempt[]>[];
  let randomAttempts = <Attempt[]>[];
  let customAttempts = <Attempt[]>[];
  let customRandomAttempts = <Attempt[]>[];
  const FIRST_DAY = new Date('5/27/2022');

  onMount(() => {
    officialAttempts = pastAttempts.get().array.filter(a => a.type === 'default') as Attempt[];
  });

  const getCorrectArtistGuesses = () => {
    let allGuesses = <Guess[]>[];
    for (const a of officialAttempts) {
      allGuesses = allGuesses.concat(a.guesses);
    }
    return allGuesses.filter(g => g.artistCorrect).length;
  };

  const getIncorrectGuesses = () => {
    let allGuesses = <Guess[]>[];
    for (const a of officialAttempts) {
      allGuesses = allGuesses.concat(a.guesses);
    }
    return allGuesses.filter(g => !g.artistCorrect && !g.correct && g.song).length;
  };

  const getSkippedGuesses = () => {
    let allGuesses = <Guess[]>[];
    for (const a of officialAttempts) {
      allGuesses = allGuesses.concat(a.guesses);
    }
    return allGuesses.filter(g => !g.artistCorrect && !g.correct && !g.song).length;
  };
</script>

<div class='w-8/12 mx-auto mt-2'>
  <h1 class='text-4xl text-white'>Estadístiques</h1>
  <div>
    <ul class='ml-4 mt-2'>
      <li class='text-blue-500'>{officialAttempts.length}/{daysBetweenDates(new Date(), FIRST_DAY)} audials attempted.
      </li>
      <li class='text-green-500'>{officialAttempts.filter(a => a.correct).length} encerts.</li>
      <li class='text-amber-400'>{getCorrectArtistGuesses()} artistes endevinats.</li>
      <li class='text-red-600'>{getIncorrectGuesses()} fallos.</li>
      <li class='text-gray-400'>{getSkippedGuesses()} omissions.</li>
    </ul>
  </div>
  <div class='mt-10 text-gray-400'>
    <div>
      Codi font disponible a <a
      class='underline-offset-1 underline text-blue-500'
      href='https://github.com/joanfont/flabiol-front'
      target='_blank'>github</a
    >.
    </div>
    <div>
      Fet per <a
      class='underline-offset-1 underline text-blue-500'
      href='https://joanfont.dev'
      target='_blank'>Joan Font</a
    > amb svelte, firebase, i github pages.
    </div>
    <div>
      Inspirat per <a
      class='underline-offset-1 underline text-blue-500'
      href='https://mogdan.xyz'
      target='_blank'>morgan dean</a
    >
    </div>
    <p class='cursor-pointer text-red-400 underline-offset-1 underline mt-10' on:click={resetData}>
      Reinicia el joc
    </p>
  </div>
</div>
