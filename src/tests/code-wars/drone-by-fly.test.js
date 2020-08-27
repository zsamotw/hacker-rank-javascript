const dronByFly = require('../../code-wars/7-kyu/drone-by-fly')

describe('Drone by fly, 7 kyu', () => {
  test('Drone by fly', () => {
    expect(dronByFly('xxxx', '==T')).toEqual('ooox')
  })

  test('Drone by fly when lamps are null', () => {
    expect(dronByFly(null, '==T')).toEqual('')
  })

  test('Drone by fly when drones are null', () => {
    expect(dronByFly('oooo', null)).toEqual('')
  })
})
