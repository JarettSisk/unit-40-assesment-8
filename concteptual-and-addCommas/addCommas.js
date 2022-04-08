function addCommas(num) {
  console.log(num);
  // if its a negative number, convert to positive
  let temp;
  if (num < 0) {
    temp = (num * -1);
  } else {
    temp = num;
  }

  // convert to string
  const numString = temp.toString().split("");

  let decimals = "";
  let wholeNum;
  // split the whole num and decimal
  if (numString.includes(".")) {
    decimals = numString.slice(numString.indexOf("."));
    wholeNum = numString.slice(0, numString.indexOf("."));
  } else {
    wholeNum = numString;
  }

  let newWholeNum = [];
  // let count = 0;
  // add the numbers and commas to newWholeNum
  if (wholeNum.length > 3) {
    for( let i = wholeNum.length - 1; i >= 0; i--) {
      // count++;
      newWholeNum.unshift(wholeNum[i]);
      if((wholeNum.length - i) % 3 === 0 && i !== 0) {
        newWholeNum.unshift(",");
      } 
    }
  } else {
    return num.toString();
  }


  // if was originally negative, convert back to negative
  if (num < 0) {
    newWholeNum.unshift("-");
  }

  // convert to strings
  newWholeNum = newWholeNum.join("").toString();
  if (decimals) {
    decimals = decimals.join("").toString();
  }

  // combine the wholeNum and decimal and return them
  return `${newWholeNum}${decimals}`
}

// NOTE: Im pretty sure I couldve used toLocaleString() and practically wrote this in a few lines, but I figured springboard didnt want me going that route lol

module.exports = addCommas;