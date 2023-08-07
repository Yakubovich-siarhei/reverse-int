module.exports = function reverse(n) {
  let result;
  result = String(Math.abs(n));
  return result.split("").reverse().join("");
};
