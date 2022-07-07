<script lang='ts'>
  import { isRandom, playlist, readInstructions } from '$src/store';
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';
</script>

<div>
  <header>
    <div class='max-w-screen-md mx-auto '>
      <div class='flex justify-evenly p-3 items-center'>
        <div class='flex flex-1'>
          <button
            class='px-2 py-2 tracking-widest border-none flex items-center font-semibold text-sm text-pink hover:text-pink-darker'
            on:click={() => goto('/stats')}
            title='Veure estadístiques'
          >
            <svg
              fill='none'
              height='24'
              stroke='currentColor'
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              viewBox='0 0 24 24'
              width='24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M12 20v-6M6 20V10M18 20V4' />
            </svg>
          </button>
        </div>
        <div>
          <h1
            class='text-3xl font-bold flex-grow text-center flex-1 cursor-pointer text-pink relative hover:underline underline-offset-1 hover:text-pink-darker'
            on:click={() => goto('/')}
            style='font-family: Staatliches, sans-serif'
          >
          Mobo
          </h1>
        </div>
        <div class='flex flex-1 justify-end'>
          <button
            class='px-2 py-2 uppercase tracking-widest border-none flex items-center font-semibold text-sm text-pink hover:text-pink-darker'
            on:click={() => readInstructions.set(false)}
            title='Veure instruccions'
          >
            <svg
              fill='none'
              height='24'
              stroke='currentColor'
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              viewBox='0 0 24 24'
              width='24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <circle cx='12' cy='12' r='10' />
              <path d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3' />
              <line x1='12' x2='12.01' y1='17' y2='17' />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div
      class='hidden text-indigo-500 text-yellow-400 text-teal-500 text-orange-500 text-purple-500 text-cyan-500 text-emerald-500'></div>
  </header>
</div>
