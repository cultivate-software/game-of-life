import { Life } from './infinite-life3'

describe("Convay's Game of Life", () => {
  describe('Any live cell with fewer than two live neighboars dies, as if by underpopulation', () => {
    it('cell dies when there are no neighbors', () => {
      const life = new Life()
      life.animateCellAt(0, 0)
      expect(life.isCellAliveAt(0, 0)).toBe(true)
      life.tick()
      expect(life.isCellAliveAt(0, 0)).toBe(false)
    })

    it('cell dies when there is only one neighbor', () => {
      const life = new Life()
      life.animateCellAt(0, 0)
      life.animateCellAt(0, 1)
      expect(life.isCellAliveAt(0, 1)).toBe(true)
      life.tick()
      expect(life.isCellAliveAt(0, 1)).toBe(false)
    })
  })

  describe('Any live cell with two or three live neighbours lives on to the next generation', () => {
    it('cell survives when there are two neighbors', () => {
      const life = new Life()
      life.animateCellAt(0, 0)
      life.animateCellAt(0, -1)
      life.animateCellAt(0, 1)
      expect(life.isCellAliveAt(0, 0)).toBe(true)
      life.tick()
      expect(life.isCellAliveAt(0, 0)).toBe(true)
    })

    it('cell survives when there are three neighbors', () => {
      const life = new Life()
      life.animateCellAt(10, 10)
      life.animateCellAt(9, 9)
      life.animateCellAt(11, 11)
      life.animateCellAt(11, 9)
      expect(life.isCellAliveAt(10, 10)).toBe(true)
      life.tick()
      expect(life.isCellAliveAt(10, 10)).toBe(true)
    })
  })

  describe('Any live cell with more than three live neighbours dies, as if by overpopulation', () => {
    it('cell dies when there are four neighbors', () => {
      const life = new Life()
      life.animateCellAt(5, 5)
      life.animateCellAt(4, 4)
      life.animateCellAt(6, 6)
      life.animateCellAt(5, 4)
      life.animateCellAt(5, 6)
      expect(life.isCellAliveAt(5, 5)).toBe(true)
      life.tick()
      expect(life.isCellAliveAt(5, 5)).toBe(false)
    })

    it('cell dies when there are eight neighbors', () => {
      const life = new Life()
      life.animateCellAt(-4, -4)
      life.animateCellAt(-4, -5)
      life.animateCellAt(-4, -6)
      life.animateCellAt(-5, -4)
      life.animateCellAt(-5, -5)
      life.animateCellAt(-5, -6)
      life.animateCellAt(-6, -4)
      life.animateCellAt(-6, -5)
      life.animateCellAt(-6, -6)
      expect(life.isCellAliveAt(-5, -5)).toBe(true)
      life.tick()
      expect(life.isCellAliveAt(-5, -5)).toBe(false)
    })
  })

  describe('Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction', () => {
    it('cell stays dead when there are no neighbors', () => {
      const life = new Life()
      expect(life.isCellAliveAt(0, 0)).toBe(false)
      life.tick()
      expect(life.isCellAliveAt(0, 0)).toBe(false)
    })

    it('cell animates when there are three neighbors', () => {
      const life = new Life()
      life.animateCellAt(1, 1)
      life.animateCellAt(-1, -1)
      life.animateCellAt(1, 0)
      expect(life.isCellAliveAt(0, 0)).toBe(false)
      life.tick()
      expect(life.isCellAliveAt(0, 0)).toBe(true)
    })
  })
})
