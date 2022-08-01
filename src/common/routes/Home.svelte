<script lang='ts'>
    import { Button,SimpleGrid } from '@svelteuidev/core';
    import 'phosphor-icons';
    import { push } from 'svelte-spa-router';
    import * as Routes from './Routes';
</script>

<SimpleGrid cols={1} spacing={4}>

    <Button size='xl' radius='xl' variant='gradient' ripple gradient={{from: 'lime', to:'green', deg:105}}   on:click={() => push(Routes.NEW_CAMPAIGN)}>
        <i slot='leftIcon' size={32} class='ph-plus'       />
        Create New Campaign
        </Button>

    <Button size='xl' radius='xl' variant='gradient' ripple gradient={{from: 'teal', to:'blue' , deg:105}}   on:click={() => push(Routes.OPEN_CAMPAIGN)}>
        <i slot='leftIcon' size={32} class='ph-folder-open'/>
        Open Existing Campaign
        </Button>

    <Button size='xl' radius='xl' variant='gradient' ripple gradient={{from: 'orange', to:'red'  , deg:105}} on:click={() => push(Routes.JOIN_CAMPAIGN)}>
        <i slot='leftIcon' size={32} class='ph-graph'      />
        Join Existing Campaign
        </Button>

</SimpleGrid>