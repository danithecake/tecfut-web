import { mocked } from 'ts-jest/utils'
import Papa from 'papaparse'
import { getPlayers } from './players'

describe('lib/players', () => {
  describe('getPlayers', () => {
    test('returns parsed players map from local players.csv file', () => {
      expect(getPlayers()).toMatchSnapshot()
    })

    test('returns empty players map and prints error to console if something went wrong', () => {
      jest.spyOn(Papa, 'parse').mockImplementationOnce(() => {
        throw new Error('Something went wrong')
      })
      jest.spyOn(console, 'error')

      expect(getPlayers()).toEqual({})
      expect(mocked(console.error)).toBeCalledWith(expect.any(Error))

      mocked(Papa.parse).mockRestore()
      mocked(console.error).mockRestore()
    })
  })
})
