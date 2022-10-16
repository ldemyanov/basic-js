const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {

  let sizeY = matrix.length
  let sizeX = matrix[0].length
  let res = matrix.map(row => [...row])

  function check(x, y) {
    if (x < 0 || x >= sizeX || y < 0 || y >= sizeY) {
        return 0
    } 
    return matrix[y][x] ? 1 : 0
  } 
   
  for (let y = 0; y < sizeY; y++) {
    for (let x = 0; x < sizeX; x++) {
      let countMine = 0
      countMine += check(x-1, y-1)
      countMine += check(x, y-1)
      countMine += check(x+1, y-1)
      countMine += check(x-1, y)
      countMine += check(x+1, y)
      countMine += check(x-1, y+1)
      countMine += check(x, y+1)
      countMine += check(x+1, y+1)
      res[y][x] = countMine
    }
  }

  return res
}

module.exports = {
  minesweeper
};
