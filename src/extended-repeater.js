const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { 
 *     repeatTimes: 3, 
 *     separator: '**', 
 *     addition: 'PLUS', 
 *     additionRepeatTimes: 3, 
 *     additionSeparator: '00' 
 * })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, setOptions) {

  if (str === null) {
    str = "null"
  } else if (typeof str === "object") {
    str = str
  } else {
    str = str.toString()
  }


  const options = {
    repeatTimes: 1,
    separator: '+',
    addition: '',
    additionRepeatTimes: 1,  
    additionSeparator: '|' 
  }
  for (key in setOptions) {
    if (key === "addition") {
      if (setOptions[key] === null) {
        options[key] = "null"
      } else {
        options[key] = setOptions[key]
      }
    } else {
      options[key] = setOptions[key]
    }
  }
  
  let result = ""
  
  let substing = str
  for (let i = 0; i < options.additionRepeatTimes; i++) {
    substing += options.addition
    if (i < options.additionRepeatTimes-1) {
      substing += options.additionSeparator
    }
  }

  for (let i = 0; i < options.repeatTimes; i++) {
    result += substing
    if (i < options.repeatTimes-1) {
      result += options.separator
    }
  }
  return result
}

module.exports = {
  repeater
};
