"use strict";

function BinarioADecimal(num) {
  // tu codigo aca
  const BinToDecimalManual = (num) => {
    var temp = num.split("");
    const n = num.length;
    var exp = [];
    for (let i = n - 1; i >= 0; i--) {
      exp.push(i);
    }
    var result = 0;
    for (let i = 0; i < n; i++) {
      result += parseInt(temp[i]) * (2 ** exp[i]);
    }

    return result;
  };

  return parseInt(num, 2);
}

console.log(BinarioADecimal("10101"));

function DecimalABinario(num) {
  // tu codigo aca
  const DtoB = (num) => {
    var bin = ""
    while (num > 0) {
      bin =(num % 2) + bin ;
      num = Math.floor(num / 2);
    }
    return bin;
  }

  // return DtoB(num);
  return num.toString(2);
}

console.log(DecimalABinario(21));


module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
