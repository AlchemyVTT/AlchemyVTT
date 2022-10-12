<script lang='ts'>
    import Session from './Session'
    import * as Magic from './Magic'


    let session: Session

    let _magic = Magic.mend([
        Magic.random(),
        Magic.random(),
        Magic.random()
    ])

    function onHost() {
        session = Session.host(_magic)
    }

    function onJoin() {
        session = Session.join(_magic)
    }
</script>

<div>
    {#if !session}
    <input type='button' value='Host' on:click={onHost}/>
    <input type='text' bind:value={_magic}/>
    <input type='button' value='Join' on:click={onJoin}/>
    {:else}
    <h1>{session._is    }</h1>
    <h2>{session.magic()}</h2>
    <ul>
        {#each session._verified as clientId}
        <li>{clientId}</li>
        {/each}
    </ul>
    {/if}
</div>

