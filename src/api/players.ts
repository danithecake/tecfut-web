import type { EndpointOutput } from '@sveltejs/kit'
import { getPlayers } from 'lib/players'

export const get: () => Promise<EndpointOutput> = () => {
  return new Promise((resolve) => void resolve({ body: JSON.stringify(getPlayers()) }))
}
