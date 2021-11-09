import type { EndpointOutput } from '@sveltejs/kit'
import { getTeams } from 'lib/teams'

export const get: () => Promise<EndpointOutput> = () => {
  return new Promise((resolve) => void resolve({ body: JSON.stringify(getTeams()) }))
}
