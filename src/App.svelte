<script lang='ts'>
  import { SvelteUIProvider } from '@svelteuidev/core';
  import { Routes } from './common/routes/Routes';
  import Router from 'svelte-spa-router';

  const routes = Routes()
</script>

<SvelteUIProvider withGlobalStyles withNormalizeCSS themeObserver="dark">
  <Router {routes}/>
</SvelteUIProvider>