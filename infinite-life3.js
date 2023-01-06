const cellAt = (x, y) => `${x}|${y}`
const coordinates = cell => cell.split('|').map(coordinate => +coordinate)

const willSurvive = (neighbors, isAlive) => neighbors === 3 || neighbors === 2 && isAlive

const registerCellAsNeighbor = (neighbors, cell) => {
  const [x, y] = coordinates(cell)
  for (let i = x - 1; i <= x + 1; i++)
    for (let j = y - 1; j <= y + 1; j++)
      if (i !== x || j !== y)
        neighbors[cellAt(i, j)] = (neighbors[cellAt(i, j)] ?? 0) + 1
  return neighbors
}

export class Life {
  constructor() {
    this.cells = new Set()
  }

  isCellAliveAt(x, y) {
    return this.cells.has(cellAt(x, y))
  }

  animateCellAt(x, y) {
    this.cells.add(cellAt(x, y))
  }

  killCellAt(x, y) {
    this.cells.delete(cellAt(x, y))
  }

  tick() {
    const neighbors = [...this.cells].reduce(registerCellAsNeighbor, {})
    this.cells = new Set(
      Object.keys(neighbors).filter(cell => willSurvive(neighbors[cell], this.cells.has(cell)))
    )
  }
}

