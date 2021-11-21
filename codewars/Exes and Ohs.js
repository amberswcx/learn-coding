/*// 1st decision

function XO(str) {
  const xCount = (str.match(/[xX]/g) || []).length;
  const oCount = (str.match(/[oO]/g) || []).length;
  return xCount === oCount;
}*/

// 2nd decision

function XO(str) {
  const xCount = str.match(/[x]/gi);
  const oCount = str.match(/[o]/gi);
  return (xCount && xCount.length) === (oCount && oCount.length);
  // if xCount can be converted to true ('x' found), returns xCount.length; else, returns xCount (null)
}