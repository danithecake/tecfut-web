import { mocked } from 'ts-jest/utils'
import Papa from 'papaparse'
import { getTeams } from './teams'

describe('lib/teams', () => {
  describe('getPlayers', () => {
    test('returns parsed teams map from local teams.csv file', () => {
      expect(getTeams()).toMatchSnapshot()
    })

    test('returns empty teams map and prints error to console if something went wrong', () => {
      jest.spyOn(Papa, 'parse').mockImplementationOnce(() => {
        throw new Error('Something went wrong')
      })
      jest.spyOn(console, 'error')

      expect(getTeams()).toEqual({})
      expect(mocked(console.error)).toBeCalledWith(expect.any(Error))

      mocked(Papa.parse).mockRestore()
      mocked(console.error).mockRestore()
    })
  })
})
