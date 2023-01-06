export class Life {
  constructor() {
    this.cells = []
  }

  reviveCell(x, y) {
    this.cells.push([x, y])
  }

  reviveCells(cells) {
    this.cells = cells
  }

  isCellAlive(x, y) {
    return this.cells.some(([cx, cy]) => cx === x && cy === y)
  }

  tick() {
    let neighbors = {}
    this.cells.forEach(([x, y]) => {
      for (let i = x - 1; i <= x + 1; i++)
        for (let j = y - 1; j <= y + 1; j++)
          if (i !== x || j !== y)
            neighbors[[i, j]] = (neighbors[[i, j]] ?? 0) + 1
    })
    this.cells = Object
      .keys(neighbors)
      .map(key => key.split(',').map(string => +string))
      .filter(cell => neighbors[cell] === 3 || neighbors[cell] === 2 && this.isCellAlive(...cell))
  }

  toString([xStart, yStart], [xEnd, yEnd]) {
    let grid = ''
    for (let y = yStart; y <= yEnd; y++) {
      for (let x = xStart; x <= xEnd; x++)
        grid += this.isCellAlive(x, y) ? 'x' : 'o'
      grid += '\n'
    }
    return grid.trim()
  }
}
