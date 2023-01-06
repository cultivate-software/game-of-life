import { Life } from './infinite-life'

describe("Convay's Game of Life", () => {
  describe('Life', () => {
    it('cell dies when there are no neighbors', () => {
      const life = new Life()
      life.reviveCell(0, 0)
      life.tick()
      expect(life.isCellAlive(0, 0)).toBe(false)
    })

    it('cell dies when there is only one neighbor', () => {
      const life = new Life()
      life.reviveCell(0, 0)
      life.reviveCell(1, 0)
      life.tick()
      expect(life.isCellAlive(0, 0)).toBe(false)
    })

    it('cell survives when there are two neighbors', () => {
      const life = new Life()
      life.reviveCells([
        [-1, 0], [0, 0], [1, 0],
      ])
      life.tick()
      expect(life.isCellAlive(0, 0)).toBe(true)
    })

    it('cell survives when there are three neighbors', () => {
      const life = new Life()
      life.reviveCells([
        [-1, 0], [0, 0], [1, 0],
        [-1, 1]
      ])
      life.tick()
      expect(life.isCellAlive(0, 0)).toBe(true)
    })

    it('cell dies when there are four neighbors', () => {
      const life = new Life()
      life.reviveCells([
        [-1, 0], [0, 0], [1, 0],
        [-1, 1], [0, 1]
      ])
      life.tick()
      expect(life.isCellAlive(0, 0)).toBe(false)
    })

    it('cell dies when there are five neighbors', () => {
      const life = new Life()
      life.reviveCells([
        [-1, 0], [0, 0], [1, 0],
        [-1, 1], [0, 1], [1, 1],
      ])
      life.tick()
      expect(life.isCellAlive(0, 0)).toBe(false)
    })

    it('cell dies when there are six neighbors', () => {
      const life = new Life()
      life.reviveCells([
        [-1, -1],
        [-1, 0], [0, 0], [1, 0],
        [-1, 1], [0, 1], [1, 1],
      ])
      life.tick()
      expect(life.isCellAlive(0, 0)).toBe(false)
    })

    it('cell dies when there are seven neighbors', () => {
      const life = new Life()
      life.reviveCells([
        [-1, -1], [0, -1],
        [-1, 0], [0, 0], [1, 0],
        [-1, 1], [0, 1], [1, 1],
      ])
      life.tick()
      expect(life.isCellAlive(0, 0)).toBe(false)
    })

    it('cell dies when there are eight neighbors', () => {
      const life = new Life()
      life.reviveCells([
        [-1, -1], [0, -1], [1, -1],
        [-1, 0], [0, 0], [1, 0],
        [-1, 1], [0, 1], [1, 1],
      ])
      life.tick()
      expect(life.isCellAlive(0, 0)).toBe(false)
    })

    it('cell is born when there are three neighbors', () => {
      const life = new Life()
      life.reviveCells([
        [1, -1],
        [1, 0],
        [1, 1],
      ])
      life.tick()
      expect(life.isCellAlive(0, 0)).toBe(true)
    })

    it('returns 1x1 grid', () => {
      const life = new Life()
      expect(life.toString([0, 0], [0, 0])).toBe('o')
    })

    it('returns 2x2 grid', () => {
      const life = new Life()
      life.reviveCell(0, 0)
      expect(life.toString([0, 0], [1, 1])).toBe('xo\noo')
    })

    it('returns 3x3 grid', () => {
      const life = new Life()
      life.reviveCell(0, 0)
      life.reviveCell(-1, -1)
      expect(life.toString([-1, -1], [1, 1])).toBe(
        'xoo\n' +
        'oxo\n' +
        'ooo')
    })

    it('returns updated grid after tick', () => {
      const life = new Life()
      life.reviveCells([
        [-1, -1], [0, -1], [1, -1],
        [-1, 0], [0, 0], [1, 0],
        [-1, 1], [0, 1], [1, 1],
      ])
      life.tick()
      expect(life.toString([-2, -2], [2, 2])).toBe(
        'ooxoo\n' +
        'oxoxo\n' +
        'xooox\n' +
        'oxoxo\n' +
        'ooxoo')
    })

    it('block', () => {
      const life = new Life()
      life.reviveCells([
        [0, 0], [1, 0],
        [0, 1], [1, 1],
      ])
      life.tick()
      expect(life.toString([-2, -2], [2, 2])).toBe(
        'ooooo\n' +
        'ooooo\n' +
        'ooxxo\n' +
        'ooxxo\n' +
        'ooooo')
    })

    it('blinker', () => {
      const life = new Life()
      life.reviveCells([
        [-1, 0], [0, 0], [1, 0],
      ])
      life.tick()
      expect(life.toString([-2, -2], [2, 2])).toBe(
        'ooooo\n' +
        'ooxoo\n' +
        'ooxoo\n' +
        'ooxoo\n' +
        'ooooo')
      life.tick()
      expect(life.toString([-2, -2], [2, 2])).toBe(
        'ooooo\n' +
        'ooooo\n' +
        'oxxxo\n' +
        'ooooo\n' +
        'ooooo')
    })

    it('glider', () => {
      const life = new Life()
      life.reviveCells([
        [-1, -1], [0, -1], [1, -1],
        [-1, 0],
        [0, 1],
      ])
      life.tick()
      expect(life.toString([-3, -3], [2, 2])).toBe(
        'oooooo\n' +
        'oooxoo\n' +
        'ooxxoo\n' +
        'ooxoxo\n' +
        'oooooo\n' +
        'oooooo')
      life.tick()
      expect(life.toString([-3, -3], [2, 2])).toBe(
        'oooooo\n' +
        'ooxxoo\n' +
        'ooxoxo\n' +
        'ooxooo\n' +
        'oooooo\n' +
        'oooooo')
    })

    xit('main', () => {
      const life = new Life()

      life.reviveCells([
        [-1, -1], [0, -1], [1, -1],
        [-1, 0],
                 [0, 1],
      ])

      console.log(`#############################`)
      console.log(life.toString([-50, -25], [3, 3]).replace(/o/g, ' '))
      setInterval(() => {
        life.tick()
        console.log(`#############################`)
        console.log(life.toString([-50, -25], [3, 3]).replace(/o/g, ' '))
      }, 250)
    })
  })
})
