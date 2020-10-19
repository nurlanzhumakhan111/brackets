module.exports = function check(str, bracketsConfig) {
  // your solution
    while(str !== ''){
      let counter = 0;
      for (let i of bracketsConfig) {
          let brackets = i[0] + i[1];
          if (str.includes(brackets)){
              str = str.replace(brackets, '');
              counter += 1;
          }
      }
      if (counter === 0) break;
    }
    if (str === '') return true;
    return false;
}