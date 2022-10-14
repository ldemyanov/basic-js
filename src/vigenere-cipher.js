const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(flag = true) {
    this.isReverse = flag
  }

  encrypt(string, keyword) {
    if (typeof string !== "string" || typeof keyword !== "string") {
      throw new Error('Incorrect arguments!')
    }

    const latinAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    let lenString = string.length

    let preparedString = ""
    string.toUpperCase().split("").forEach(s => latinAlphabet.includes(s) && (preparedString += s))
    let lenPreparedString = preparedString.length


    let lenKeyword = keyword.length
    let tableKeyword = keyword

    if (lenKeyword < lenPreparedString) {
      let count = Math.ceil(lenPreparedString / lenKeyword)
      tableKeyword = keyword.repeat(count).substring(0, lenPreparedString)
    } else if (lenKeyword > lenPreparedString) {
      tableKeyword = keyword.substring(0, lenPreparedString)
    }
    tableKeyword = tableKeyword.toUpperCase()

    let result = ""
    
    let move = 0
    for (let i = 0; i < lenString; i++) {
      let s = string[i]
      let posS = latinAlphabet.indexOf(s.toUpperCase())
      
      if (posS !== -1) {
        let posKeyS = latinAlphabet.indexOf(tableKeyword[i+move])
        result += latinAlphabet[ (posS + posKeyS) % latinAlphabet.length ]
      } else {
        result += s
        move--
      }
    }

    return this.isReverse ? result : result.split("").reverse().join("")
    
}
  decrypt(string, keyword) {
    if (typeof string !== "string" || typeof keyword !== "string") {
      throw new Error('Incorrect arguments!')
    }

    const latinAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    let lenString = string.length

    let preparedString = ""
    string.toUpperCase().split("").forEach(s => latinAlphabet.includes(s) && (preparedString += s))
    let lenPreparedString = preparedString.length


    let lenKeyword = keyword.length
    let tableKeyword = keyword

    if (lenKeyword < lenPreparedString) {
      let count = Math.ceil(lenPreparedString / lenKeyword)
      tableKeyword = keyword.repeat(count).substring(0, lenPreparedString)
    } else if (lenKeyword > lenPreparedString) {
      tableKeyword = keyword.substring(0, lenPreparedString)
    }
    tableKeyword = tableKeyword.toUpperCase()

    let result = ""
    
    let move = 0
    for (let i = 0; i < lenString; i++) {
      let s = string[i]
      let posS = latinAlphabet.indexOf(s.toUpperCase())
      
      if (posS !== -1) {
        let posKeyS = latinAlphabet.indexOf(tableKeyword[i+move])
        result += latinAlphabet[ (posS + latinAlphabet.length - posKeyS) % latinAlphabet.length ]
      } else {
        result += s
        move--
      }
    }
    
    return this.isReverse ? result : result.split("").reverse().join("")
  }
}

module.exports = {
  VigenereCipheringMachine
};
