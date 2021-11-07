import type { IPlayer } from 'common/interfaces'
import fs from 'fs'
import path from 'path'
import Papa from 'papaparse'

const DATA_DIR = path.join(process.cwd(), 'src', 'data')
const PAPA_CONF: Papa.ParseConfig<IPlayer> = {
  header: true,
  dynamicTyping: true,
  skipEmptyLines: true,
  transformHeader: (header) => (header === 'photo_url' ? 'photoURL' : header)
}

type PlayerName = IPlayer['name']

export const getPlayers: () => Record<PlayerName, IPlayer> = () => {
  try {
    return Papa.parse(fs.readFileSync(path.join(DATA_DIR, 'players.csv'), 'utf8'), PAPA_CONF).data.reduce(
      (players, player) => {
        players[player.name] = player

        return players
      },
      {} as Record<PlayerName, IPlayer>
    )
  } catch (err) {
    console.error(err)

    return {}
  }
}
