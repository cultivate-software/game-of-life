const cellAt = (x, y) => `${x}|${y}`
const coordinates = cell => cell.split('|').map(coordinate => +coordinate)

const willBeAlive = (neighbors, isAlive) => neighbors === 3 || neighbors === 2 && isAlive

const toNeighborhood = (neighbors, cell) => {
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
    const neighborhood = [...this.cells].reduce(toNeighborhood, {})
    const cellsInNeighborhood = Object.keys(neighborhood)
    this.cells = new Set(cellsInNeighborhood.filter(cell => willBeAlive(neighborhood[cell], this.cells.has(cell))))
  }
}

// TODO: change this.cells from set to neighborhood