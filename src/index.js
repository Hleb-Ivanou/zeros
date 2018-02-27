module.exports = function getZerosCount(number) {
  var res = 0;
  while (number) {
    number = (number / 5) | 0;
    res += number;
  };
  
  return res;
}
