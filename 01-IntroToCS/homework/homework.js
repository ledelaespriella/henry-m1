"use strict";

function BinarioADecimal(num) {
  // tu codigo aca
  var BinToDecimalManual = (num) => {
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

function DecimalABinario(num) {
  // tu codigo aca
  return num.toString(2);
}

DecimalABinario(4);

module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
