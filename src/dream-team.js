const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {

  if (!Array.isArray(members)) {
    return false
  }
  
  let result = []

  members.forEach(name => {
    if (typeof name === "string" && name.length > 0) {
      name = name.trim()
      if (name) {
        result.push(name[0].toUpperCase())
      }
    } 
  })

  if (result.length) {
    return result.sort().join("")
  }  else {
    return false
  }
}

module.exports = {
  createDreamTeam
};
