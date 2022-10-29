"use strict";

function BinarioADecimal(num) {
  // tu codigo aca
  const BinToDecimalManual = (num) => {
    const n = num.length;
    let result = 0;
    for (let i = 0; i < n; i++) {
      result += num[i] * 2 ** (n - 1 - i);
    }
    return result;
  };
  // return BinToDecimalManual(num);
  return parseInt(num, 2);
}

console.log(BinarioADecimal("10101"));

function DecimalABinario(num) {
  // tu codigo aca
  const DtoB = (num) => {
    let bin = "";
    if(num === 0) return bin=0;
    
    while (num > 0) {
      bin = (num % 2) + bin;
      num = Math.floor(num / 2);
    }
    return bin;
  };

  return DtoB(num);
  // return num.toString(2);
}

console.log(DecimalABinario(0));

module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
