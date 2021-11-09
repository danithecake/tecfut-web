import type { ITeam } from 'common/interfaces'
import fs from 'fs'
import path from 'path'
import Papa from 'papaparse'
import { DATA_DIR } from 'common/constants'

const PAPA_CONF: Papa.ParseConfig<ITeam> = {
  header: true,
  dynamicTyping: true,
  skipEmptyLines: true
}

type PlayerName = ITeam['name']

export const getTeams: () => Record<PlayerName, ITeam> = () => {
  try {
    return Papa.parse(fs.readFileSync(path.join(DATA_DIR, 'teams.csv'), 'utf8'), PAPA_CONF).data.reduce(
      (teams, team) => {
        teams[team.name] = team

        return teams
      },
      {} as Record<PlayerName, ITeam>
    )
  } catch (err) {
    console.error(err)

    return {}
  }
}
