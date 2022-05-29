<script lang='ts'>
  import { readInstructions } from '$src/store';
  import Button from '$components/Button.svelte';

  export let hidden = true;
</script>

<div class:hidden>
  <div
    class='flex overflow-y-auto overflow-x-hidden fixed absolute right-0 left-0 z-40 justify-center items-center h-modal md:h-full md:inset-0 bg-black opacity-50'
    on:click={() => {
      hidden = true;
      readInstructions.set(true);
    }}
  />
  <!--  make this absolute and prevent changing the page-->
  <div class='absolute px-4 w-full h-full md:h-auto mx-auto z-50'>
    <div class='rounded-lg w-full max-w-2xl mx-auto mt-20 bg-gray-700 p-3 opacity-100 shadow'>
      <h1 class='text-3xl mx-auto text-center'>Instruccions</h1>
      <div class='p-4'>
        <ul class='text-left'>
          <li>
            <span>Escolta el fragment de la cançó i introdueix el nom que creguis que és al formulari.</span>
          </li>
          <li>
            <span
            >Si la resposta és incorrecta o fas clic a "Omet", s'afegiran més segons de la cançó a endevinar.</span
            >
          </li>
          <li>
            <span
            >Un <span class='text-red-500'>resultat vermell</span> significa que no has endevinat la cançó.</span
            >
          </li>
          <li>
            <span
            >Un <span class='text-amber-400'>resultat groc</span> significa que l'artista és correcte, però la cançó no.</span
            >
          </li>
          <li>
            <span
            >Un <span class='text-green-500'>resultat verd</span> significa que has endevinat la cançó i l'artista!</span
            >
          </li>
        </ul>
      </div>
      <div class='w-full'>
        <Button
          className='mx-auto text-center block'
          on:click={() => {
            hidden = true;
            readInstructions.set(true);
          }}
          title='Close Popup'
          type='primary'
        >Començar!
        </Button>
      </div>
    </div>
  </div>
</div>
