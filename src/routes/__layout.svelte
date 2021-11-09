<script lang="ts" context="module">
  import type { Load } from '@sveltejs/kit'

  export const load: Load = async ({ fetch }) => {
    try {
      return {
        props: {
          players: await (await fetch('/players')).json(),
          teams: await (await fetch('/teams')).json()
        }
      }
    } catch (err) {
      return { props: { players: {}, teams: {} } }
    }
  }
</script>

<script lang="ts">
  import type { IPlayer, ITeam } from 'common/interfaces'
  import { setContext } from 'svelte'

  export let players: Record<IPlayer['name'], IPlayer>
  export let teams: Record<ITeam['name'], ITeam>

  setContext('players', players)
  setContext('teams', teams)
</script>

<slot />

<style global lang="postcss">
  @tailwind components;
  @tailwind utilities;

  :global(html),
  :global(body) {
    font-family: 'Roboto', sans-serif;
  }
</style>
