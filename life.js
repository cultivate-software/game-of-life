const gridToString = grid => grid.map(row => row.map(cell => cell ? 'x' : 'o').join('')).join('\n')

const countNeighbors = (x, y, grid) => {
  let neighbors = 0
  for (let i = x - 1; i <= x + 1; i++)
    for (let j = y - 1; j <= y + 1; j++)
      if (i !== x || j !== y)
        neighbors += grid[j]?.[i] ?? 0
  return neighbors
}

const applyLawsToCell = (x, y, grid) => {
  const neighbors = countNeighbors(x, y, grid)
  return (neighbors === 3 || neighbors === 2 && grid[y][x]) ? 1 : 0
}

const applyLawsToGrid = grid => grid.map((row, y) => row.map((cell, x) => applyLawsToCell(x, y, grid)))

class Life {
  constructor(grid = []) {
    this.grid = grid
  }

  getCell(x, y) {
    return this.grid[y][x]
  }

  tick() {
    this.grid = applyLawsToGrid(this.grid)
  }

  show() {
    return gridToString(this.grid)
  }
}

export default Life
