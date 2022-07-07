<script lang='ts'>
  import type { Attempt, Guess } from '$src/types';

  export let attempt: Attempt;

  const getColorOfAttempt = (index, attempts) => {
    let color = 'bg-black opacity-40';
    if (attempts === index && !attempt.correct) {
      color = 'pink';
    } else if (attempts === index + 1 && attempt.correct) {
      color = 'green';
    } else if (attempts > index && (attempt.guesses[index] as Guess).artistCorrect) {
      color = 'groc';
    } else if (attempts > index && !(attempt.guesses[index] as Guess).song) {
      color = 'pink';
    } else if (attempts > index) {
      color = 'purple';
    }
    return color;
  };
</script>

<div class=' max-w-3xl mx-auto flex h-3'>
  <div class={`w-2/12 ${getColorOfAttempt(0, attempt.attempts)} border-r border-l`} />
  <div class={`w-2/12 ${getColorOfAttempt(1, attempt.attempts)} border-r border-l`} />

  <div class={`w-4/12 ${getColorOfAttempt(2, attempt.attempts)} border-r border-l`} />
  <div class={`w-4/12 ${getColorOfAttempt(3, attempt.attempts)} border-r border-l`} />

  <div class={`w-6/12 ${getColorOfAttempt(4, attempt.attempts)} border-r border-l`} />
  <div class={`w-6/12 ${getColorOfAttempt(5, attempt.attempts)} border-r border-l`} />
</div>
