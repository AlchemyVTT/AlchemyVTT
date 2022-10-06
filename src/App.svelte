<script lang='ts'>
  import { Button, SvelteUIProvider } from '@svelteuidev/core';
  import { Version } from './script/util/Version'

  import { ms } from './script/util/Promise'

  import { onMount } from 'svelte'

  // console.log(Store.squash(['a', 'b', 'c'], 'd', ['e', ['f', 'g']]))


  let fileInput

  onMount(() => {

    let p = ms(10000);
    p.then(na => {
      console.log('hello world2')
    })
    p.then(na => {
      console.log('hello world3')
    })



    fileInput.onchange = async () => {
    }
  })
</script>

<svelte:head>
  <title>
    {`${Version.CURRENT}`}
  </title>
</svelte:head>

<SvelteUIProvider withGlobalStyles withNormalizeCSS themeObserver='dark'>
  <input type='file' style='display:none' bind:this={fileInput}/>
  <Button on:click={()=>fileInput.click()}>Open a File!</Button>
</SvelteUIProvider>