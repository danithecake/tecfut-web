import { get } from './teams'

describe('api/teams', () => {
  describe('get', () => {
    test('returns parsed teams map from local teams.csv file', async () => {
      expect(JSON.parse((await get()).body as string)).toMatchSnapshot()
    })
  })
})
