const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(array) {
  if (!Array.isArray(array)) {
    throw new Error("'arr' parameter must be an instance of the Array!")
    return
  }

  let copyArray = array.slice()
  for (let i = 0; i < copyArray.length; i++) {

    function removeCommand(i) {
      copyArray.splice(i, 1)
      i--
    }

    if (copyArray[i] === "--double-next") {

      if (i < copyArray.length-1) {
        copyArray[i] = copyArray[i+1]
      } else { removeCommand(i) }

    } else if (copyArray[i] === "--discard-prev") {

      if (i>1) {
        copyArray.splice(i-1, 2)
        i -= 2
      } else { removeCommand(i) }
    
    } else if (copyArray[i] === "--double-prev") {

      if (i>1) {
        copyArray[i] = copyArray[i-1]
      } else { removeCommand(i) }

    } else if (copyArray[i] === "--discard-next") {

      if (copyArray[i+2] === "--double-prev" || copyArray[i+2] === "--discard-prev") {
        copyArray.splice(i, 3)
        i--
      } else if (i < copyArray.length-1) {
        copyArray.splice(i, 2)
        i -= 2
      } else { removeCommand(i) }

    }

  }
  return copyArray
}

module.exports = {
  transform
};


// doubleDiscarded: {
//   input: [1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5],                  +++
//   output: [1, 2, 3, 4, 5]
// },
// doubleDoubled: {
//   input: [1, 2, 3, '--double-next', 1337, '--double-prev', 4, 5],                    +++
//   output: [1, 2, 3, 1337, 1337, 1337, 4, 5]
// },
// discardDiscarded: {
//   input: [1, 2, 3, '--discard-next', 1337, '--discard-prev', 4, 5],           
//   output: [1, 2, 3, 4, 5]
// },
// discardDoubled: {
//   input: [1, 2, 3, '--double-next', 1337, '--discard-prev', 4, 5],
//   output: [1, 2, 3, 1337, 4, 5]
// }