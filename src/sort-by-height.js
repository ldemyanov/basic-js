const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(array) {
  let positionsFor1 = []
  array.forEach((value, index) => value === -1 && positionsFor1.push(index))
  array = array.filter(value => value !== -1 )
  array.sort((a, b) => a - b)
  positionsFor1.forEach(pos => {
    array.splice(pos, 0, -1)
  })
  return array
}

module.exports = {
  sortByHeight
};
