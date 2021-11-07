import { get } from './players'

describe('api/players', () => {
  describe('get', () => {
    test('returns parsed players map from local players.csv file', async () => {
      expect(JSON.parse((await get()).body as string)).toMatchSnapshot()
    })
  })
})
