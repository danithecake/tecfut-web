<script lang="ts" context="module">
  import type { Load } from '@sveltejs/kit'

  export const load: Load = async ({ fetch }) => {
    try {
      return { props: { players: await (await fetch('/players')).json() } }
    } catch (err) {
      return { props: { players: {} } }
    }
  }
</script>

<script lang="ts">
  import type { IPlayer } from 'common/interfaces'
  import { setContext } from 'svelte'

  export let players: Record<IPlayer['name'], IPlayer>

  setContext('players', players)
</script>

<slot />

<style global lang="postcss">
  @tailwind components;
  @tailwind utilities;

  global(html),
  global(body) {
    font-family: 'Roboto', sans-serif;
  }
</style>
