import Life from './life'

describe("Convay's Game of Life", () => {
  describe('Life', () => {
    it('cell dies when there are no neighbors', () => {
      const life = new Life([
        [0, 0, 0],
        [0, 1, 0],
        [0, 0, 0],
      ])
      life.tick()
      expect(life.getCell(1, 1)).toBe(0)
    })

    it('cell dies when there is only one neighbor', () => {
      const life = new Life([
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 0],
      ])
      life.tick()
      expect(life.getCell(1, 1)).toBe(0)
    })

    it('cell survives when there are two neighbors', () => {
      const life = new Life([
        [0, 0, 1],
        [0, 1, 0],
        [1, 0, 0],
      ])
      life.tick()
      expect(life.getCell(1, 1)).toBe(1)
    })

    it('cell survives when there are three neighbors', () => {
      const life = new Life([
        [1, 0, 0],
        [0, 1, 0],
        [1, 0, 1],
      ])
      life.tick()
      expect(life.getCell(1, 1)).toBe(1)
    })

    it('cell dies when there are four neighbors', () => {
      const life = new Life([
        [1, 0, 1],
        [0, 1, 0],
        [1, 0, 1],
      ])
      life.tick()
      expect(life.getCell(1, 1)).toBe(0)
    })

    it('cell dies when there are five neighbors', () => {
      const life = new Life([
        [1, 1, 1],
        [0, 1, 0],
        [1, 0, 1],
      ])
      life.tick()
      expect(life.getCell(1, 1)).toBe(0)
    })

    it('cell dies when there are six neighbors', () => {
      const life = new Life([
        [1, 1, 1],
        [0, 1, 0],
        [1, 1, 1],
      ])
      life.tick()
      expect(life.getCell(1, 1)).toBe(0)
    })

    it('cell dies when there are seven neighbors', () => {
      const life = new Life([
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 0],
      ])
      life.tick()
      expect(life.getCell(1, 1)).toBe(0)
    })

    it('cell dies when there are eight neighbors', () => {
      const life = new Life([
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1],
      ])
      life.tick()
      expect(life.getCell(1, 1)).toBe(0)
    })

    it('cell is born when there are three neighbors', () => {
      const life = new Life([
        [1, 0, 1],
        [0, 0, 0],
        [1, 0, 0],
      ])
      life.tick()
      expect(life.getCell(1, 1)).toBe(1)
    })
  })
})
